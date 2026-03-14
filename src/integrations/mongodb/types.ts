export interface ContactMessage {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: Date;
  updated_at: Date;
}

export interface CustomerFeedback {
  _id?: string;
  name: string;
  location: string;
  product_name: string;
  rating: number;
  comment: string;
  image_url?: string;
  verified: boolean;
  helpful: number;
  created_at: Date;
  updated_at: Date;
}