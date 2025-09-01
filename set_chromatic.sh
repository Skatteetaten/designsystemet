#!/bin/bash

FILE_PATH=".chromatic"
ENV_VAR_NAME="CHROMATIC_PROJECT_TOKEN"

# Check if file exists
if [ ! -f "$FILE_PATH" ]; then
  echo "Error: File '$FILE_PATH' does not exist"
  exit 1
fi

# Read file content and set as environment variable
FILE_CONTENT=$(cat "$FILE_PATH")
export "$ENV_VAR_NAME"="$FILE_CONTENT"

echo "Environment variable $ENV_VAR_NAME set to content from $FILE_PATH"
