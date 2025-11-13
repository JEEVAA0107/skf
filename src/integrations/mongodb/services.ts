const API_BASE_URL = 'http://localhost:3002/api';

export const contactService = {
  async create(data: any) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      return { data: null, error: error.message };
    }
  }
};

export const feedbackService = {
  async create(data: any) {
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      return { data: null, error: error.message };
    }
  },

  async getAll() {
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`);
      return await response.json();
    } catch (error) {
      return { data: [], error: error.message };
    }
  }
};