#!/usr/bin/env bash
set -euo pipefail

# Kjorer storybook-tester i en lokke for a avdekke ustabile tester.
#
# Bruk:
#   ./scripts/flaky-test-runner.sh [antall] [testfilter] [filfilter]
#
# Eksempler:
#   ./scripts/flaky-test-runner.sh 10
#   ./scripts/flaky-test-runner.sh 10 "" "Combobox.accessibility"
#   ./scripts/flaky-test-runner.sh 20 "Tastaturnavigasjon" "Combobox.accessibility"
#   ./scripts/flaky-test-runner.sh 10 "Tastaturnavigasjon"

ITERATIONS="${1:-10}"
TEST_FILTER="${2:-}"
FILE_FILTER="${3:-}"

PASS_COUNT=0
FAIL_COUNT=0
FAILED_RUNS=()

TEST_CMD=(npm run test:storybook -- --reporter=verbose)

if [[ -n "$FILE_FILTER" ]]; then
  TEST_CMD+=("$FILE_FILTER")
fi

if [[ -n "$TEST_FILTER" ]]; then
  TEST_CMD+=(-t "$TEST_FILTER")
fi

echo "========================================"
echo " Flaky Test Runner"
echo "========================================"
echo " Iterations: $ITERATIONS"
echo " Command:    ${TEST_CMD[*]}"
echo "========================================"
echo ""

for ((i = 1; i <= ITERATIONS; i++)); do
  printf "[%d/%d] Running... " "$i" "$ITERATIONS"

  if "${TEST_CMD[@]}" > /tmp/flaky-test-output-$$.log 2>&1; then
    # Sjekk om noen tester faktisk ble kjort
    if ! grep -qE "Tests.*[0-9]+ passed" /tmp/flaky-test-output-$$.log; then
      echo "NO TESTS MATCHED"
      echo ""
      echo "No tests matched the provided filters. Check your arguments."
      echo "  Test filter: ${TEST_FILTER:-<none>}"
      echo "  File filter: ${FILE_FILTER:-<none>}"
      rm -f /tmp/flaky-test-output-$$.log
      exit 1
    fi
    PASS_COUNT=$((PASS_COUNT + 1))
    echo "PASS"
  else
    FAIL_COUNT=$((FAIL_COUNT + 1))
    FAILED_RUNS+=("$i")
    echo "FAIL"
    echo "  Output saved to: /tmp/flaky-test-fail-run-${i}-$$.log"
    cp /tmp/flaky-test-output-$$.log "/tmp/flaky-test-fail-run-${i}-$$.log"
  fi
done

rm -f /tmp/flaky-test-output-$$.log

echo ""
echo "========================================"
echo " Results"
echo "========================================"
echo " Total:    $ITERATIONS"
echo " Passed:   $PASS_COUNT"
echo " Failed:   $FAIL_COUNT"

if [[ ${#FAILED_RUNS[@]} -gt 0 ]]; then
  echo " Failed runs: ${FAILED_RUNS[*]}"
fi

echo "========================================"

if [[ $FAIL_COUNT -gt 0 ]]; then
  exit 1
fi
