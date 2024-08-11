import { useState } from "react";
import PropTypes from "prop-types";

const PostCard = ({
  authorName,
  profilePicture,
  timePosted,
  heading,
  shortContent,
  fullContent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded shadow-xl drop-shadow-lg w-full sm:w-3/4 lg:w-1/2 mx-auto">
      <div className="flex items-center space-x-4">
        <img
          src={profilePicture}
          alt={`${authorName}'s profile`}
          className="h-10 w-10 rounded-full bg-gray-300"
        />
        <div>
          <div className="font-bold text-sm sm:text-base">{authorName}</div>
          <div className="text-gray-500 text-xs sm:text-sm">{timePosted}</div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg sm:text-xl font-semibold">{heading}</h2>
        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          {isExpanded ? fullContent : shortContent}
        </p>
        <button
          onClick={handleReadMoreClick}
          className="mt-2 text-emigrate-blue hover:underline text-sm sm:text-base"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  authorName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  shortContent: PropTypes.string.isRequired,
  fullContent: PropTypes.string.isRequired,
};

export default PostCard;
