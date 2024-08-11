import PropTypes from "prop-types";

function ApplyModal({ job, onClose, onApply }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
        <p className="mb-2">
          <strong>Company:</strong> {job.company}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="mb-2">
          <strong>Salary:</strong> {job.salary}
        </p>
        <p className="mb-4">
          <strong>Type:</strong> {job.type}
        </p>
        <p className="mb-6">
          Are you sure you want to apply for this position?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onApply}
            className="px-4 py-2 bg-emigrate-blue text-white rounded hover:bg-blue-600 transition-colors"
          >
            Confirm Application
          </button>
        </div>
      </div>
    </div>
  );
}

ApplyModal.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default ApplyModal;
