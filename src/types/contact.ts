export interface ContactFormData {
  name: string;
  email: string;
  tel?: string;
  service?: string;
  message: string;
}

export interface ApiResponse {
  message?: string;
  error?: string;
}