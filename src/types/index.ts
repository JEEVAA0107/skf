export interface BusinessEnquiry {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly product: string;
  readonly message: string;
}

export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: readonly string[];
}