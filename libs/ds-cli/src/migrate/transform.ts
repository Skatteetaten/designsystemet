import { SourceFile } from 'ts-morph';

export interface TransformOptions {
  dry?: boolean;
  exclude?: string | string[];
}

export interface TransformResult {
  filesProcessed: number;
  filesChanged: number;
  changes: Array<{
    file: string;
    changes: string[];
  }>;
}

export interface Transform {
  name: string;
  description: string;
  run(
    sourceFiles: SourceFile[],
    options: TransformOptions
  ): Promise<TransformResult>;
}

export abstract class BaseTransform implements Transform {
  abstract name: string;
  abstract description: string;

  abstract run(
    sourceFiles: SourceFile[],
    options: TransformOptions
  ): Promise<TransformResult>;

  protected createResult(): TransformResult {
    return {
      filesProcessed: 0,
      filesChanged: 0,
      changes: [],
    };
  }

  protected logChange(
    result: TransformResult,
    file: string,
    change: string
  ): void {
    const existingChange = result.changes.find((c) => c.file === file);
    if (existingChange) {
      existingChange.changes.push(change);
    } else {
      result.changes.push({
        file,
        changes: [change],
      });
    }
  }
}
