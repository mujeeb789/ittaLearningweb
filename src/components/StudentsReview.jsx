import React from "react";

const StudentReviewCard = ({ review }) => {
  // Function to render the star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.91c.969 0 1.371 1.24.588 1.81l-3.97 2.887 1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.97-2.887-3.971 2.887c-.782.57-1.838-.197-1.538-1.118l1.518-4.674-3.97-2.887c-.783-.57-.381-1.81.588-1.81h4.91l1.518-4.674z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center px-6 py-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4"
          src={review.avatar}
          alt="Student Avatar"
        />
        <div>
          <h4 className="text-xl font-semibold text-gray-800">{review.studentName}</h4>
          <p className="text-gray-600">{review.courseName}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{review.reviewText}</p>
        <div className="mt-4 flex items-center">
          {renderStars(review.rating)}
          <span className="ml-2 text-gray-600">({review.rating}/5)</span>
        </div>
      </div>
    </div>
  );
};

export default StudentReviewCard;
