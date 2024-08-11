import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function UserProfile({ user, show, setShow, className }) {
  if (!show) return null;

  return (
    <div className={`bg-white p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Profile</h2>
        <button
          onClick={() => setShow(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="text-center mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="text-lg font-semibold mt-2">{user.name}</h3>
        <p className="text-gray-600">{user.title || "No title"}</p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-5 h-5 mr-2 text-gray-500"
          />
          <span>{user.email || "No email"}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-5 h-5 mr-2 text-gray-500"
          />
          <span>{user.phone || "No phone"}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="w-5 h-5 mr-2 text-gray-500"
          />
          <span>{user.location || "No location"}</span>
        </div>
      </div>
    </div>
  );
}

//add props types
UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default UserProfile;
