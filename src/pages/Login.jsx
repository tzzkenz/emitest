import { useState } from "react";
import Img from "../assets/cover.jpg";
import line from "../assets/line.png";
import logo from "../assets/google.png";

const Login = () => {
  const [activeButton, setActiveButton] = useState("students");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      {/* Form Container */}
      <div className="flex items-center justify-center p-4">
        <form
          className="relative max-w-md w-full bg-[#E8F2F5] p-8 rounded-lg shadow-lg"
          style={{ maxHeight: "90vh" }}
          onSubmit={handleSubmit}
          aria-labelledby="sign-in-heading"
        >
          {/* Sliding Button Container */}
          <div className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 flex space-x-2 bg-[#E8F2F5] p-1 rounded-full shadow-md">
            <button
              type="button"
              onClick={() => setActiveButton("students")}
              className={`px-4 py-2 rounded-full transition-transform ${
                activeButton === "students"
                  ? "bg-white text-emigrate-blue font-semibold"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              Students
            </button>
            <button
              type="button"
              onClick={() => setActiveButton("consultancy")}
              className={`px-4 py-2 rounded-full transition-transform ${
                activeButton === "consultancy"
                  ? "bg-white text-emigrate-blue font-semibold"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              Consultancy
            </button>
          </div>

          <h2
            id="sign-in-heading"
            className="text-2xl font-bold text-center text-emigrate-blue mb-6"
          >
            Sign In
          </h2>

          <div className="grid grid-cols-1 gap-y-4">
            <div>
              <label
                htmlFor="name"
                className="font-semibold text-emigrate-blue"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-emigrate-blue"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="font-semibold text-emigrate-blue"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                required
                aria-required="true"
              />
            </div>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className={`border w-full py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-lg shadow-md mt-4 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Continue"}
          </button>

          <div className="flex items-center justify-center my-4">
            <img src={line} alt="line" className="w-1/4" />
            <span className="mx-4 text-gray-600">Or</span>
            <img src={line} alt="line" className="w-1/4" />
          </div>

          <button
            type="button"
            className="border w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center"
          >
            <img src={logo} alt="Google Logo" className="w-6 h-6 mr-2" />
            Continue with Google
          </button>
        </form>
      </div>

      {/* Image Container */}
      <div className="hidden sm:block relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={Img}
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Login;
