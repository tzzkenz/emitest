// CreatePostSidebar.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faVideo,
  // faCalendarAlt,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const CreatePostSidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Create a Post</h2>
      <div className="flex items-center space-x-3 mb-4">
        <input
          type="textarea"
          placeholder="What's on your mind?"
          className="flex-grow p-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emigrate-blue"
        />
      </div>
      <div className="flex justify-between">
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded p-2 transition duration-200">
          <FontAwesomeIcon icon={faImage} className="text-green-500" />
          <span className="text-sm">Photo</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded p-2 transition duration-200">
          <FontAwesomeIcon icon={faVideo} className="text-emigrate-blue" />
          <span className="text-sm">Video</span>
        </button>
        {/* <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded p-2 transition duration-200">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500" />
          <span className="text-sm">Event</span>
        </button> */}
        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 rounded p-2 transition duration-200">
          <FontAwesomeIcon icon={faNewspaper} className="text-purple-500" />
          <span className="text-sm">Article</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePostSidebar;
