import PropTypes from "prop-types";

const Title = ({ title, des }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-lg uppercase font-medium text-[#00415A] tracking-wider">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl font-bold text-[#00415A] mt-2">
        {des}
      </h1>
    </div>
  );
};

//add proptypes
Title.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};

export default Title;
