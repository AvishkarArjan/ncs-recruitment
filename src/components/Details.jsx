import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import backgroundimage from "./backgroundimage.avif";
import backgroundimage from "../../src/assets/bg.png";
import { CgSpinner } from "react-icons/cg";
import logo from "../assets/ncs-logo.svg"; // adjust the path as needed
import ncs from '../assets/NCS-RECRUITMENT-cropped.svg';


function Details() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleProceed = () => {
    if (checked) {
      navigate("/form");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    roll_number: "",
    phone_number: "",
    resume_link: "",
    github_link:"",
    behance_link : "",

  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) newError.name = "Full name is required.";
    if (!formData.email.trim()) newError.email = "Email ID is required.";
    if (!formData.year) newError.year = "Year is required.";
    if (!formData.branch.trim()) newError.branch = "Branch is required.";
    if (!formData.phone_number.trim()) newError.phone_number = "Phone Number is required.";
    if (!formData.resume_link.trim()) newError.phone_number = "Resume Link is required.";
    if (!formData.roll_number.trim())
      newError.roll_number = "Roll Number is required.";
    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length > 0) {
      setErrors(validateError);
    } else {
      setErrors({});
      setLoading(true); // Start loading
      await fetch(
        "https://script.google.com/macros/s/AKfycby9wDr7BOZHxk2w49sg80nOjIJHt3APAqOPmIWouj0ks03b9iSTeAsaMxAuqx8a1v97/exec",
        {
          method: "POST",
          mode: "no-cors", // ← disables CORS errors but gives you an opaque response
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false); // Stop loading
      navigate("/ThankYou");
    }
  };

  return (
    <div
      className="overflow-auto relative w-full h-screen flex justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundimage})`,
      }}
    >
      {/* Overlay for dimming */}
      {/* <div className="fixed inset-0 bg-black opacity-60 z-0"></div> */}

      <div className="w-max-7xl gap-10 justify-between items-center my-15 m-3">
        {/* Details */}
        <div className="relative z-10 text-white  rounded-xl  m-2 p-4 max-w-2xl w-full mx-4">
          <div className="w-full mb-10">
            <img src={ncs} className="" width={500} alt="" />
            {/* <p className="text-sm text-gray-500">The first ever workshop on Agentic AI <i>@JSS Noida.</i></p> */}
          </div>

          <div className="flex text-black">
            <div className="mr-10">
              {/* WORKSHOP PROJECT */}
              <section className="text-center mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-extrabold">Clubs</h2>
                </div>
                <div className="text-sm leading-relaxed text-left">
                  {/* <strong>🔍 Build your own deep research assistant</strong> */}
                  {/* <p>
              Students will build a personalized deep research assistant agent,
              such as the ones provided by OpenAI and Perplexity that can:
            </p> */}
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-black ">
                    <li> 🚀 Development Club</li>
                    <li> ֎ AI/ML and Data Science</li>
                    <li> 🌐 Programming Club</li>
                    <li> 💻 Design Club</li>
                    <li>🤖 AR/VR & IOT Club</li>
                  </ul>
                  {/* <p className="mt-2">
              This tool can be hosted locally or online, and added to the
              students’ CVs or portfolio as a demonstrable project.
            </p> */}
                </div>
              </section>

              {/* REQUIREMENTS */}
              <section className="text-black">
                <h2 className="font-extrabold mb-3">ELIGIBILITY:</h2>
                <div className="text-sm text-left">
                  {/* <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>💼 Attendees must bring their own laptops/PCs</li>
              <li>🌐 PCs must have an internet connection</li>
              <li>🐍 PCs must have Python pre-installed</li>
            </ul> */}
                  I & II Year JSSATEN Students
                </div>
              </section>
            </div>

            {/* <div class="mt-5 flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
          <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">NOTE!</span> Attendance will be given to all attendees of the workshop.
          </div>
        </div> */}

            <div className="ml-10 text-black ">
              <section className="text-center mt-4 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-extrabold">ROUNDS - I YEAR</h2>
                </div>
                <div className="text-sm leading-relaxed text-left">
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-black ">
                    <li>🧠 Aptitude + Club Based MCQs</li>
                    <li> 💻 Club Based Activity</li>
                    <li> 🗣️ GD/Picture Perception and Description</li>
                    <li>👨🏽‍💼 Interview(Technical + HR)</li>
                  </ul>
                </div>
              </section>

              <section className="text-center mt-4 mb-8 text-black ">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-extrabold">ROUNDS - II YEAR</h2>
                </div>
                <div className="text-sm leading-relaxed text-left">
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li> 📋 Resume Shortlisting</li>
                    <li>💡 Technical Round</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <hr className="border: 1px solid #ccc; margin: 20px 0; black"></hr>

          <div className="flex mt-4 text-black ">
            <section className="text-center mt-4 mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-extrabold">FACULTY COORDINATOR</h2>
              </div>
              <div className="text-sm leading-relaxed text-left">
                <ul className=" mt-2 space-y-1">
                  <li> Mr. Ajay Kumar</li>
                  <li>Assistant Professor</li>
                  <li>JSSATEN</li>
                </ul>
              </div>
            </section>

            <section className="text-center mt-4 mb-8 ml-25 text-black ">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-extrabold">
                  HEAD OF THE DEPARTMENT
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-left">
                <ul className=" mt-2 space-y-1">
                  <li>Prof(Dr.) Kakoli Banerjee </li>
                  <li>HOD CSE</li>
                  <li>JSSATEN</li>
                </ul>
              </div>
            </section>
          </div>

          <section className="text-center mt-4 mb-8 text-black">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-extrabold">STUDENT COORDINATOR</h2>
            </div>
            <div className="text-sm leading-relaxed text-left">
              <ul className=" mt-2 space-y-1">
                <li> Rohit Pandey</li>
                <li>Mohit Singh</li>
                <li>JSSATEN</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Form */}
        <div className="bg-black/30 rounded-lg backdrop-invert backdrop-opacity-10 p-4 relative z-10 w-full max-w-2xl shadow-2xl">
          <div className="flex justify-between">
            <div className="flex  flex-col items-start mb-4">
              <h2 className="text-white text-2xl font-bold mb-1 text-center">
                Registration Form
              </h2>
              <p className="text-white text-xs">
                Your details will be verified for the Recruitments.
              </p>
            </div>
            <img src={logo} alt="" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label for="username" class="text-white text-xs block mb-1">
                👤 Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Full Name"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label for="username" class="text-white text-xs block mb-1">
                🌐 Email ID
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Email ID"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-white text-xs block mb-1">✏️ Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
              >
                <option value="" disabled>
                  Select year
                </option>
                {/* <option value="1st" className="text-white bg-black">1st Year</option> */}
                <option value="2nd" className="text-white bg-black">
                  1st Year
                </option>
                <option value="3rd" className="text-white bg-black">
                  2nd Year
                </option>
                {/* <option value="4th" className="text-white bg-black">4th Year</option> */}
              </select>
              {errors.year && (
                <p className="text-red-600 text-sm mt-1">{errors.year}</p>
              )}
            </div>

            <div>
              <label className="text-white text-xs block mb-1">⚙️ Branch</label>
              {/* <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white  border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
              placeholder="Enter your branch"
            /> */}
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
              >
                <option value="" disabled>
                  Select branch
                </option>
                <option className="text-white bg-black" value="CS">
                  CS
                </option>
                <option className="text-white bg-black" value="AIML">
                  AIML
                </option>
                <option className="text-white bg-black" value="CSDS">
                  CSDS
                </option>
                <option className="text-white bg-black" value="IT">
                  IT
                </option>
                <option className="text-white bg-black" value="EEE">
                  EEE
                </option>
                <option className="text-white bg-black" value="CE">
                  CE
                </option>
                <option className="text-white bg-black" value="EE">
                  EE
                </option>
                <option className="text-white bg-black" value="EC">
                  EC
                </option>
                <option className="text-white bg-black" value="ME">
                  ME
                </option>
              </select>
              {errors.branch && (
                <p className="text-red-600 text-sm mt-1">{errors.branch}</p>
              )}
            </div>
            <div>
              <label for="username" class="text-white text-xs block mb-1">
                #️⃣ Roll Number
              </label>
              <input
                type="text"
                name="roll_number"
                value={formData.roll_number}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Roll Number"
              />
              {errors.roll_number && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.roll_number}
                </p>
              )}
            </div>

            {/* <div>
              <label className="text-white text-xs block mb-1">
                🤖 Prior Experience in AI Agents/LLMs/ML <i>( if any )</i>
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2 focus:outline-none text-sm/6 w-full"
                placeholder="Briefly describe your experience"
                rows="4"
              ></textarea>
              {errors.experience && (
                <p className="text-red-600 text-sm mt-1">{errors.experience}</p>
              )}
            </div> */}

            <div>
              <label for="username" class="text-white text-xs block mb-1">
                📞 Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Phone Number"
              />
              {errors.phone_number && (
                <p className="text-red-600 text-sm mt-1">{errors.phone_number}</p>
              )}
            </div>

            <div>
              <label for="username" class="text-white text-xs block mb-1">
                Resume Link (Google Drive etc)
              </label>
              <input
                type="text"
                name="resume_link"
                value={formData.resume_link}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Resume"
              />
              {errors.resume_link && (
                <p className="text-red-600 text-sm mt-1">{errors.resume_link}</p>
              )}
            </div>

            <div>
              <label for="username" class="text-white text-xs block mb-1">
                Github Link
              </label>
              <input
                type="text"
                name="github_link"
                value={formData.github_link}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Github Link"
              />
              
            </div>

            <div>
              <label for="username" class="text-white text-xs block mb-1">
                Behance Link 
              </label>
              <input
                type="tel"
                name="behance_link"
                value={formData.behance_link}
                onChange={handleChange}
                className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
                placeholder="Enter your Behance Profile Link"
              />
              
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-70"
              disabled={loading}
            >
              {loading ? (
                <>
                  <CgSpinner className="animate-spin h-5 w-5 mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <i>Submit</i>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;
