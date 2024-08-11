import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function JobCard({ title, company, location, salary, type, onApply }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap items-center text-gray-600 mb-4">
        <div className="flex items-center mr-4 mb-2">
          <FontAwesomeIcon icon={faBuilding} className="mr-2" />
          <span>{company}</span>
        </div>
        <div className="flex items-center mr-4 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center mr-4 mb-2">
          <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>{type}</span>
        </div>
      </div>
      <button
        onClick={() => onApply({ title, company, location, salary, type })}
        className="bg-emigrate-blue text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
      >
        Apply Now
      </button>
    </div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default JobCard;
