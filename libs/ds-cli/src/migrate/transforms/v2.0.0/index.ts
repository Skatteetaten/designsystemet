import { alertVariantTransform } from './alertVariant/alertVariant.js';
import { textfieldTextareaTransform } from './textfieldTextarea/textfieldTextarea.js';
import { Transform } from '../../transform.js';

const transforms = new Map<string, Transform>([
  ['v2-alert', alertVariantTransform],
  ['v2-textarea', textfieldTextareaTransform],
]);

export function getTransform(name: string): Transform | undefined {
  return transforms.get(name);
}

export function getAllTransforms(): Transform[] {
  return Array.from(transforms.values());
}
