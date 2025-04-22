import "./App.css";
import Details from "./components/Details";
import Introduction from "./components/Introduction";
import FinalThankYou from "./components/FinalThankYou";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormCard from "./components/FormCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/ThankYou" element={<FinalThankYou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// {/* Form */}
//         <div className="bg-black/30 rounded-lg backdrop-invert backdrop-opacity-10 p-4 relative z-10 w-full max-w-2xl shadow-2xl">
//           <div className="flex justify-between">
//             <div className="flex  flex-col items-start mb-4">
//               <h2 className="text-white text-2xl font-bold mb-1 text-center">
//                 Registration Form
//               </h2>
//               <p className="text-white text-xs">
//                 Your details will be verified for the Recruitments.
//               </p>
//             </div>
//           </div>

//           <form className="space-y-4 " onSubmit={handleSubmit}>
//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 👤 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Full Name"
//               />
//               {errors.name && (
//                 <p className="text-red-600 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 🌐 Email ID
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Email ID"
//               />
//               {errors.email && (
//                 <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className="text-white text-xs block mb-1">✏️ Year</label>
//               <select
//                 name="year"
//                 value={formData.year}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
//               >
//                 <option value="" disabled>
//                   Select year
//                 </option>
//                 {/* <option value="1st" className="text-white bg-black">1st Year</option> */}
//                 <option value="2nd" className="text-white bg-black">
//                   1st Year
//                 </option>
//                 <option value="3rd" className="text-white bg-black">
//                   2nd Year
//                 </option>
//                 {/* <option value="4th" className="text-white bg-black">4th Year</option> */}
//               </select>
//               {errors.year && (
//                 <p className="text-red-600 text-sm mt-1">{errors.year}</p>
//               )}
//             </div>

//             <div>
//               <label className="text-white text-xs block mb-1">⚙️ Branch</label>
//               {/* <input
//               type="text"
//               name="branch"
//               value={formData.branch}
//               onChange={handleChange}
//               className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white  border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
//               placeholder="Enter your branch"
//             /> */}
//               <select
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
//               >
//                 <option value="" disabled>
//                   Select branch
//                 </option>
//                 <option className="text-white bg-black" value="CS">
//                   CS
//                 </option>
//                 <option className="text-white bg-black" value="AIML">
//                   AIML
//                 </option>
//                 <option className="text-white bg-black" value="CSDS">
//                   CSDS
//                 </option>
//                 <option className="text-white bg-black" value="IT">
//                   IT
//                 </option>
//                 <option className="text-white bg-black" value="EEE">
//                   EEE
//                 </option>
//                 <option className="text-white bg-black" value="CE">
//                   CE
//                 </option>
//                 <option className="text-white bg-black" value="EE">
//                   EE
//                 </option>
//                 <option className="text-white bg-black" value="EC">
//                   EC
//                 </option>
//                 <option className="text-white bg-black" value="ME">
//                   ME
//                 </option>
//               </select>
//               {errors.branch && (
//                 <p className="text-red-600 text-sm mt-1">{errors.branch}</p>
//               )}
//             </div>
//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 #️⃣ Roll Number
//               </label>
//               <input
//                 type="text"
//                 name="roll_number"
//                 value={formData.roll_number}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Roll Number"
//               />
//               {errors.roll_number && (
//                 <p className="text-red-600 text-sm mt-1">
//                   {errors.roll_number}
//                 </p>
//               )}
//             </div>

//             {/* <div>
//               <label className="text-white text-xs block mb-1">
//                 🤖 Prior Experience in AI Agents/LLMs/ML <i>( if any )</i>
//               </label>
//               <textarea
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2 focus:outline-none text-sm/6 w-full"
//                 placeholder="Briefly describe your experience"
//                 rows="4"
//               ></textarea>
//               {errors.experience && (
//                 <p className="text-red-600 text-sm mt-1">{errors.experience}</p>
//               )}
//             </div> */}

//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 📞 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Phone Number"
//               />
//               {errors.phone_number && (
//                 <p className="text-red-600 text-sm mt-1">
//                   {errors.phone_number}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 Resume Link (Google Drive etc)
//               </label>
//               <input
//                 type="text"
//                 name="resume_link"
//                 value={formData.resume_link}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Resume"
//               />
//               {errors.resume_link && (
//                 <p className="text-red-600 text-sm mt-1">
//                   {errors.resume_link}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 Github Link
//               </label>
//               <input
//                 type="text"
//                 name="github_link"
//                 value={formData.github_link}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Github Link"
//               />
//             </div>

//             <div>
//               <label for="username" class="text-white text-xs block mb-1">
//                 Behance Link
//               </label>
//               <input
//                 type="tel"
//                 name="behance_link"
//                 value={formData.behance_link}
//                 onChange={handleChange}
//                 className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
//                 placeholder="Enter your Behance Profile Link"
//               />
//             </div>

//             <button
//               type="submit"
//               className="flex items-center justify-center w-full py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-70 mb-10"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <CgSpinner className="animate-spin h-5 w-5 mr-2" />
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   <i>Submit</i>
//                   <svg
//                     className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                 </>
//               )}
//             </button>
//           </form>
