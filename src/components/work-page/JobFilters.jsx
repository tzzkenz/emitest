import PropTypes from "prop-types";

function JobFilters({ filters, setFilters }) {
  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value],
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Job Type</h3>
        {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={type}
              checked={filters.jobType.includes(type)}
              onChange={() => handleFilterChange("jobType", type)}
              className="mr-2"
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Location</h3>
        {["Remote", "On-site", "Hybrid"].map((loc) => (
          <div key={loc} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={loc}
              checked={filters.location.includes(loc)}
              onChange={() => handleFilterChange("location", loc)}
              className="mr-2"
            />
            <label htmlFor={loc}>{loc}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-medium mb-2">Salary Range</h3>
        {["$0 - $50k", "$50k - $100k", "$100k - $150k", "$150k+"].map(
          (range) => (
            <div key={range} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={range}
                checked={filters.salary.includes(range)}
                onChange={() => handleFilterChange("salary", range)}
                className="mr-2"
              />
              <label htmlFor={range}>{range}</label>
            </div>
          )
        )}
      </div>
    </div>
  );
}

//add proptypes
JobFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default JobFilters;
