import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function PageHeader({ title }) {
  return (
    <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">
      <FontAwesomeIcon icon={faBriefcase} className="mr-4" />
      {title}
    </h1>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
