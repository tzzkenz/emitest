import PropTypes from "prop-types";

function Pagination({ currentPage, setCurrentPage, totalJobs, jobsPerPage }) {
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  return (
    <div className="flex justify-center mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === page
              ? "bg-emigrate-blue text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

//Add proptypre validation
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalJobs: PropTypes.number.isRequired,
  jobsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
