import { useState } from "react";
import Sidebar, { SidebarItem } from "../components/sidebar/SideBar";
import profileimg from "../assets/john.jpeg";
import arrowimg from "../assets/leftarrow.png";
import {
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Receipt,
  Settings,
  UserCircle,
  Package,
} from "lucide-react";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("personalDetails");
  const [educationFields, setEducationFields] = useState([
    {
      qualification: [""],
      college: [""],
      school: [""],
      position: [""],
      experience: [""],
    },
  ]);

  // const handleAddFields = () => {
  //   setEducationFields([
  //     ...educationFields,
  //     {
  //       qualification: [""],
  //       college: [""],
  //       school: [""],
  //       position: [""],
  //       experience: [""],
  //     },
  //   ]);
  // };

  const handleInputChange = (index, fieldIndex, event) => {
    const values = [...educationFields];
    values[index][event.target.name][fieldIndex] = event.target.value;
    setEducationFields(values);
  };

  const handleAddMore = (index, fieldName) => {
    const values = [...educationFields];
    values[index][fieldName].push(""); // Add a new empty entry
    setEducationFields(values);
  };

  const handleRemoveField = (index, fieldName, fieldIndex) => {
    const values = [...educationFields];
    values[index][fieldName].splice(fieldIndex, 1);
    setEducationFields(values);
  };

  const getInputClassName = (field) => {
    return field.length > 1 ? "w-1/2" : "w-full";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItem icon={<UserCircle size={20} />} text="User" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Statistics" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Billing" />
        <hr className="my-3 border-gray-300" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
      <div className="flex-1 p-6 overflow-auto bg-white shadow-lg">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Profile & Settings
          </h2>
          <p className="text-lg text-gray-600">Last login: 12 hours ago</p>
        </div>
        <div className="flex space-x-6">
          <div className="w-1/3">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <div className="h-32 w-32 mb-4 p-1 border-2 border-gray-200 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={profileimg}
                  alt="Profile"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                John Doe
              </h3>
              <div className="w-full">
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => setActiveSection("personalDetails")}
                      className={`w-full py-2 px-4 rounded-md ${
                        activeSection === "personalDetails"
                          ? "bg-[#00415A] text-white"
                          : "bg-white text-[#00415A]"
                      } hover:bg-[#E2F2F2] hover:text-[#00415A] transition`}
                    >
                      Personal Details
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveSection("academicInfo")}
                      className={`w-full py-2 px-4 rounded-md ${
                        activeSection === "academicInfo"
                          ? "bg-[#00415A] text-white"
                          : "bg-white text-[#00415A]"
                      } hover:bg-[#E2F2F2] hover:text-[#00415A] transition`}
                    >
                      Academic Info
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white text-[#00415A] py-2 px-4 rounded-md hover:bg-[#E2F2F2] transition">
                      Get Help
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white text-[#00415A] py-2 px-4 rounded-md hover:bg-[#E2F2F2] transition">
                      Security
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white text-[#00415A] py-2 px-4 rounded-md hover:bg-[#E2F2F2] transition">
                      Transaction Units
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white text-[#00415A] py-2 px-4 rounded-md hover:bg-[#E2F2F2] transition">
                      Terms & Privacy
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-white text-[#00415A] py-2 px-4 rounded-md hover:bg-[#E2F2F2] transition">
                      FAQs
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={arrowimg}
                alt="Back Arrow"
                className="h-6 w-6 cursor-pointer"
                onClick={() => setActiveSection("personalDetails")}
              />
              <h2 className="text-gray-800 text-2xl font-semibold">
                {activeSection === "personalDetails"
                  ? "Personal Details"
                  : "Academic Info"}
              </h2>
            </div>
            {activeSection === "personalDetails" ? (
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="age"
                    >
                      Age:
                    </label>
                    <input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="aadhaar-number"
                    >
                      Aadhaar Number:
                    </label>
                    <input
                      id="aadhaar-number"
                      type="number"
                      placeholder="Enter your Aadhaar number"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="email"
                    >
                      Email Address:
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="mobile"
                    >
                      Mobile Number:
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="dob"
                    >
                      Date of Birth:
                    </label>
                    <input
                      id="dob"
                      type="date"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="gender"
                    >
                      Gender:
                    </label>
                    <select
                      id="gender"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="address"
                    >
                      Residential Address:
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Enter your residential address"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="state"
                    >
                      State:
                    </label>
                    <select
                      id="state"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    >
                      <option value="">Select State</option>
                      {/* Add other options here */}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-lg font-semibold mb-2 text-gray-700"
                      htmlFor="country"
                    >
                      Country:
                    </label>
                    <input
                      id="country"
                      type="text"
                      placeholder="Enter your country"
                      className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#00415A] text-white py-3 px-6 text-sm rounded-md hover:bg-[#003B4F] transition">
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-6">
                {educationFields.map((field, index) => (
                  <div key={index} className="space-y-4">
                    {[
                      "qualification",
                      "college",
                      "school",
                      "position",
                      "experience",
                    ].map((fieldName) => (
                      <div key={fieldName} className="flex flex-col">
                        <label
                          className="text-lg font-semibold mb-2 text-gray-700"
                          htmlFor={`${fieldName}-${index}`}
                        >{`${
                          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
                        }:`}</label>
                        <div className="flex flex-wrap gap-2">
                          {field[fieldName].map((value, fieldIndex) => (
                            <div
                              key={fieldIndex}
                              className="flex items-center space-x-2"
                            >
                              <input
                                id={`${fieldName}-${index}-${fieldIndex}`}
                                name={fieldName}
                                type="text"
                                value={value}
                                onChange={(e) =>
                                  handleInputChange(index, fieldIndex, e)
                                }
                                placeholder={`Enter ${fieldName}`}
                                className={`p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00415A] text-sm ${getInputClassName(
                                  field[fieldName]
                                )}`}
                              />
                              {field[fieldName].length > 1 && (
                                <button
                                  type="button"
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() =>
                                    handleRemoveField(
                                      index,
                                      fieldName,
                                      fieldIndex
                                    )
                                  }
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => handleAddMore(index, fieldName)}
                            className="bg-[#00415A] text-white py-2 px-4 rounded-md hover:bg-[#003B4F] focus:outline-none focus:ring-2 focus:ring-[#00415A]"
                          >
                            Add More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="flex justify-center">
                  <button className="bg-[#00415A] text-white py-3 px-6 text-sm rounded-md hover:bg-[#003B4F] transition">
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
