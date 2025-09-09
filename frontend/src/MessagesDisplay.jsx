import React, { useEffect, useState } from "react";
import axios from "axios";

const MessagesDisplay = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/get_messages", { withCredentials: true })
      .then((response) => {
        setMessages(response.data.messages.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading messages...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">📬VibeNet</h2>
      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        <div className="grid gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-400">{new Date(msg.timestamp).toLocaleString()}</p>
              <h3 className="text-xl font-semibold mt-1">{msg.title || "Untitled"}</h3>
              <p className="mt-2 text-gray-700">{msg.message}</p>
              <div className="mt-2 text-sm text-gray-500">
                Status: <span className="font-medium">{msg.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesDisplay;
