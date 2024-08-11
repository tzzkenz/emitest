import { useEffect } from "react";
import JobCard from "./JobCard";
import PropTypes from "prop-types";

function JobList({
  filters,
  searchTerm,
  currentPage,
  jobsPerPage,
  setTotalJobs,
  onApply,
}) {
  const allJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$120,000 - $160,000",
      type: "Full-time",
    },
    {
      title: "Junior Front-End Developer",
      company: "WebWorks",
      location: "New York, NY",
      salary: "$60,000 - $80,000",
      type: "Full-time",
    },
    {
      title: "Data Scientist",
      company: "DataGen",
      location: "Boston, MA",
      salary: "$110,000 - $140,000",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      company: "Designify",
      location: "Seattle, WA",
      salary: "$70,000 - $90,000",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      company: "ManageIt",
      location: "Chicago, IL",
      salary: "$80,000 - $100,000",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      company: "CloudWave",
      location: "Austin, TX",
      salary: "$100,000 - $130,000",
      type: "Full-time",
    },
    {
      title: "Mobile App Developer",
      company: "AppCraft",
      location: "San Diego, CA",
      salary: "$90,000 - $110,000",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      company: "CodeBase",
      location: "Denver, CO",
      salary: "$95,000 - $120,000",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      company: "InnovateTech",
      location: "Los Angeles, CA",
      salary: "$110,000 - $150,000",
      type: "Full-time",
    },
    {
      title: "QA Engineer",
      company: "TestPro",
      location: "Phoenix, AZ",
      salary: "$70,000 - $90,000",
      type: "Full-time",
    },
    {
      title: "Business Analyst",
      company: "AnalyzeThis",
      location: "Miami, FL",
      salary: "$85,000 - $110,000",
      type: "Full-time",
    },
    {
      title: "Full Stack Developer",
      company: "DevHub",
      location: "Portland, OR",
      salary: "$100,000 - $130,000",
      type: "Full-time",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet",
      location: "Houston, TX",
      salary: "$105,000 - $135,000",
      type: "Full-time",
    },
    {
      title: "AI/ML Engineer",
      company: "FutureTech",
      location: "San Jose, CA",
      salary: "$120,000 - $160,000",
      type: "Full-time",
    },
    {
      title: "Technical Writer",
      company: "DocuTech",
      location: "Remote",
      salary: "$60,000 - $80,000",
      type: "Full-time",
    },
    {
      title: "Cloud Solutions Architect",
      company: "CloudNine",
      location: "Dallas, TX",
      salary: "$130,000 - $170,000",
      type: "Full-time",
    },
    {
      title: "Scrum Master",
      company: "AgileWorks",
      location: "Atlanta, GA",
      salary: "$90,000 - $120,000",
      type: "Full-time",
    },
    {
      title: "IT Support Specialist",
      company: "HelpDeskPro",
      location: "Nashville, TN",
      salary: "$50,000 - $70,000",
      type: "Full-time",
    },
    {
      title: "Salesforce Developer",
      company: "CRM Solutions",
      location: "Minneapolis, MN",
      salary: "$100,000 - $130,000",
      type: "Full-time",
    },
    {
      title: "Systems Administrator",
      company: "TechSupport",
      location: "San Antonio, TX",
      salary: "$80,000 - $100,000",
      type: "Full-time",
    },
  ];
  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      filters.jobType.length === 0 || filters.jobType.includes(job.type);
    const matchesLocation =
      filters.location.length === 0 || filters.location.includes(job.location);
    const matchesSalary =
      filters.salary.length === 0 ||
      filters.salary.some((range) => {
        const [min, max] = range
          .replace(/\$|k|\+/g, "")
          .split("-")
          .map(Number);
        const jobSalary = parseInt(job.salary.replace(/\$|,/g, ""));
        return (
          jobSalary >= min * 1000 && (max ? jobSalary <= max * 1000 : true)
        );
      });

    return matchesSearch && matchesType && matchesLocation && matchesSalary;
  });

  useEffect(() => {
    setTotalJobs(filteredJobs.length);
  }, [filteredJobs.length, setTotalJobs]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentJobs.map((job, index) => (
        <JobCard key={index} {...job} onApply={onApply} />
      ))}
    </div>
  );
}

JobList.propTypes = {
  filters: PropTypes.shape({
    jobType: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.arrayOf(PropTypes.string).isRequired,
    salary: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  searchTerm: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  jobsPerPage: PropTypes.number.isRequired,
  setTotalJobs: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default JobList;
