import React, { useEffect, useState } from "react";
import axios from "axios";

const RemindersDisplay = () => {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/get_reminders", { withCredentials: true })
      .then((res) => {
        setReminders(res.data.reminders);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reminders:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading reminders...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">⏰ Your Reminders</h2>

      {reminders.length === 0 ? (
        <p className="text-center text-gray-500">No reminders found.</p>
      ) : (
        <div className="grid gap-4">
          {reminders.map((reminder, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <h3 className="text-xl font-semibold">{reminder.title}</h3>
              <p className="text-gray-600 mt-1">{reminder.note}</p>
              <div className="text-sm text-gray-500 mt-2">
                ⏳ Scheduled for:{" "}
                <span className="font-medium">
                  {new Date(reminder.time).toLocaleString()}
                </span>
              </div>
              <p className="text-xs mt-1 text-green-600 capitalize">Status: {reminder.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RemindersDisplay;
