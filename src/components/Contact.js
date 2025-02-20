import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to the Flask backend here (via API call)
    console.log({ name, email, message });
  };

  return (
    <div>
      <h1 className="text-3xl text-blue-600 mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
