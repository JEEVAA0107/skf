import { BusinessEnquiry, ValidationResult } from '@/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{10}$/;

export const validateBusinessEnquiry = (data: BusinessEnquiry): ValidationResult => {
  const errors: string[] = [];

  if (!data.name?.trim()) {
    errors.push('Name is required');
  }

  if (!PHONE_REGEX.test(data.phone)) {
    errors.push('Phone must be 10 digits');
  }

  if (!EMAIL_REGEX.test(data.email)) {
    errors.push('Invalid email format');
  }

  if (!data.product?.trim()) {
    errors.push('Product selection is required');
  }

  return {
    isValid: errors.length === 0,
    errors: Object.freeze(errors)
  };
};