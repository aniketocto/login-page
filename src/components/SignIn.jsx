// import React from "react";
// import Register from "./Register";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { toast } from "react-toastify";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
      
//       navigate("/dashboard");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       toast.error(error.message, {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className=" flex flex-row gap-10 items-center justify-center max-md:flex">
//       <div className="flex items-center justify-center">
//         <div className="px-8 py-6 bg-gray-100 shadow-md text-left h-[600px] w-[500px]">
//           <div className="mb-4 mt-10">
//             <h3 className="text-xl font-bold">LOGIN</h3>
//             <p className=" text-sm text-gray-800 mt-8">
//               Please enter your e-mail address and password
//             </p>
//           </div>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="* Email address"
//                 className="w-full px-3 py-2 border shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 autoComplete="off"
//                 placeholder="* Password"
//                 className="w-full px-3 py-2 border shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
//                 />
//                 <label className="ml-2 text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//             <div className="flex flex-col items-end">
//               <button
//                 type="submit"
//                 className="w-36 px-3 py-2 text-sm font-medium text-center text-white bg-black shadow-sm focus:outline-none focus:ring-1"
//               >
//                 LOGIN
//               </button>
//               <a
//                 href="#"
//                 className="text-sm text-gray-600 underline hover:underline"
//               >
//                 Forgot your password?
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Register />
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate("/dashboard");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-md:gap-5 max-w-screen-lg mx-auto max-md:mt-10">
      <div className="flex items-center justify-center md:justify-start">
        <div className="px-8 py-6 bg-gray-100 shadow-md text-left md:h-[600px] md:w-[500px] w-full">
          <div className="mb-4 mt-10">
            <h3 className="text-xl font-bold">LOGIN</h3>
            <p className="text-sm text-gray-800 mt-8">
              Please enter your e-mail address and password
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="* Email address"
                className="w-full px-3 py-2 border shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                autoComplete="off"
                placeholder="* Password"
                className="w-full px-3 py-2 border shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-1 focus:ring-indigo-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-gray-600 underline hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full md:w-36 px-3 py-2 text-sm font-medium text-center text-white bg-black shadow-sm focus:outline-none focus:ring-1"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <Register />
    </div>
  );
};

export default SignIn;
