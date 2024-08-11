import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import PageHeader from "../components/work-page/PageHeader";
import JobSearch from "../components/work-page/JobSearch";
import JobFilters from "../components/work-page/JobFilters";
import JobList from "../components/work-page/JobList";
import Pagination from "../components/work-page/Pagination";
import ApplyModal from "../components/work-page/ApplyModal";

function WorkPage() {
  const [filters, setFilters] = useState({
    jobType: [],
    location: [],
    salary: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [modalJob, setModalJob] = useState(null);
  const [applicationMessage, setApplicationMessage] = useState("");
  const jobsPerPage = 6;

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleApply = (job) => {
    setModalJob(job);
  };

  const closeModal = () => {
    setModalJob(null);
  };

  const confirmApplication = () => {
    setApplicationMessage(
      `Successfully applied to ${modalJob.title} at ${modalJob.company}`
    );
    closeModal();
    setTimeout(() => setApplicationMessage(""), 5000); // Clear message after 5 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader title="Job Opportunities" icon="briefcase" />
        <div className="mb-8">
          <JobSearch setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <button
            onClick={toggleFilters}
            className="md:hidden mb-4 bg-emigrate-blue text-white px-4 py-2 rounded hover:bg-emigrate-blue transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          <div
            className={`w-full md:w-1/4 ${
              showFilters ? "block" : "hidden md:block"
            }`}
          >
            <JobFilters filters={filters} setFilters={setFilters} />
          </div>
          <div className="w-full md:w-3/4">
            <JobList
              filters={filters}
              searchTerm={searchTerm}
              currentPage={currentPage}
              jobsPerPage={jobsPerPage}
              setTotalJobs={setTotalJobs}
              onApply={handleApply}
            />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalJobs={totalJobs}
              jobsPerPage={jobsPerPage}
            />
          </div>
        </div>
        {modalJob && (
          <ApplyModal
            job={modalJob}
            onClose={closeModal}
            onApply={confirmApplication}
          />
        )}
        {applicationMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            {applicationMessage}
          </div>
        )}
      </main>
    </div>
  );
}

export default WorkPage;
