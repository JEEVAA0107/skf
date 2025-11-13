import { useState, useEffect } from 'react';
import { getDatabase } from '@/integrations/mongodb/client';

const Debug = () => {
  const [data, setData] = useState<any>({ contacts: [], feedbacks: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = await getDatabase();
        const contacts = await db.collection('contact_messages').find({}).toArray();
        const feedbacks = await db.collection('customer_feedback').find({}).toArray();
        setData({ contacts, feedbacks });
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Messages ({data.contacts.length})</h2>
      <pre>{JSON.stringify(data.contacts, null, 2)}</pre>
      
      <h2>Customer Feedback ({data.feedbacks.length})</h2>
      <pre>{JSON.stringify(data.feedbacks, null, 2)}</pre>
    </div>
  );
};

export default Debug;