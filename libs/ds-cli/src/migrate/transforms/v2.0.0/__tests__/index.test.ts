import { describe, it, expect } from 'vitest';

import { getTransform, getAllTransforms } from '../index.js';

describe('v2.0.0 transforms index', () => {
  describe('getTransform', () => {
    it('should return transform for valid migration names', () => {
      const alertTransform = getTransform('v2-alert');
      const textareaTransform = getTransform('v2-textarea');

      expect(alertTransform).toBeDefined();
      expect(textareaTransform).toBeDefined();
      expect(alertTransform?.name).toBe('v2-alert');
      expect(textareaTransform?.name).toBe('v2-textarea');
    });

    it('should return undefined for invalid migration names', () => {
      expect(getTransform('invalid')).toBeUndefined();
      expect(getTransform('')).toBeUndefined();
      expect(getTransform('v1-button')).toBeUndefined();
    });
  });

  describe('getAllTransforms', () => {
    it('should return all available transforms', () => {
      const transforms = getAllTransforms();

      expect(transforms).toHaveLength(2);
      expect(transforms.map((t) => t.name)).toContain('v2-alert');
      expect(transforms.map((t) => t.name)).toContain('v2-textarea');
    });

    it('should return transform objects with required properties', () => {
      const transforms = getAllTransforms();

      transforms.forEach((transform) => {
        expect(transform).toHaveProperty('name');
        expect(transform).toHaveProperty('description');
        expect(transform).toHaveProperty('run');
        expect(typeof transform.run).toBe('function');
      });
    });
  });
});
