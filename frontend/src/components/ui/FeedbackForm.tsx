// src/components/FeedbackForm.tsx
import React, { useState } from "react";

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your feedback!: " + rating + " stars and comment: " + comment);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div>
        <label htmlFor="rating" className="block mb-1">
          Rating
        </label>
        <div id="rating" className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`star ${rating >= star ? "selected" : ""}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block mb-1">
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows={4}
        />
      </div>
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;