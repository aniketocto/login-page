import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: user.email,
        });
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className=" ml-96 mt-10 p-5 w-[55%] max-md:w-[100%]  max-md:m-2 flex flex-col bg-gray-100 shadow-md">
      <div className=" text-start">
        <h3 className="text-xl font-bold">CREATE ACCOUNT</h3>
      </div>
      <p className="text-gray-500 mt-6 text-sm">
        Register now and start enjoying the benefits of a customer account right
        away
      </p>
      <p className=" text-gray-500 text-sm mb-6">
        Please complete all fields marked with an *.
      </p>
      <form onSubmit={handleSubmit}>
        <select className="w-[48.8%] border border-gray-600 px-3 py-2 focus:outline-none">
          <option value="" disabled selected>
            Salutation
          </option>
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
          <option value="mrs">Mrs.</option>
        </select>
        <div className="flex gap-5 mt-5">
          <input
            type="text"
            name="firstName"
            className="w-full border border-gray-600 px-3 py-2 focus:outline-none placeholder:text-gray-700"
            placeholder="*First name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="lastName"
            className="w-full border border-gray-600 px-3 py-2  placeholder:text-gray-700"
            placeholder="*Last name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <p className="mt-5 text-sm font-bold text-gray-700">
          DATE OF BIRTH (OPTIONAL)
        </p>
        <div className="flex flex-row space-x-2 mt-1">
          <select className="w-1/3 border border-gray-600 px-3 py-2 focus:outline-none">
            <option value="" disabled selected>
              Date
            </option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          <select className="w-1/3 border border-gray-600 px-3 py-2 focus:outline-none">
            <option value="" disabled selected>
              Month
            </option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">April</option>
            <option value="4">March</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select className="w-1/3  border border-gray-600 px-3 py-2 focus:outline-none">
            <option value="" disabled selected>
              Year
            </option>
            {Array.from({ length: 2006 - 1921 + 1 }, (_, i) => 2006 - i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <input
            type="number"
            className="w-full border border-gray-600 px-3 py-2 mt-5"
            placeholder="Phone Number"
          />
          <p className="text-[12px] text-gray-800">Example: +99 123-456</p>
        </div>
        <div className=" flex flex-col gap-5 mt-5">
          <input
            type="email"
            id="email"
            placeholder="* Email address"
            className="w-full px-3 py-2 border shadow-sm focus:outline-none border-gray-600"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="* Password"
            className="w-full px-3 py-2 border shadow-sm focus:outline-none border-gray-600"
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-5 gap-3">
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 mr-2  focus:ring-1 focus:ring-blue-500"
              id="updates"
            />
            <label className="text-sm font-semibold text-black">
              Get updates about special offers, new product releases and
              exclusive member benefits from Hugo Boss via email.
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 mr-2  focus:ring-1 focus:ring-blue-500"
              id="update"
            />
            <label className="text-sm font-semibold text-black">
              PERSONALIZED OFFERS
            </label>
            <p className=" text-[12px] font-semibold ml-6">
              Get unique content and recommendation based on your personalized
              Interests and shopping habits
            </p>
          </div>
        </div>
        <hr className="w-full border border-gray-400 mt-6 mb-6" />
        <p className=" text-sm text-gray-800">
          The{" "}
          <span className=" text-black underline font-semibold">
            Terms and Conditions
          </span>{" "}
          as well as the associated{" "}
          <span className=" text-black underline font-semibold">
            Privacy policy{" "}
          </span>{" "}
          are applicable for participation in HUGO BOSS EXPERIENCE
        </p>
        <p className=" text-sm text-gray-800 mt-5">
          By clicking "create account", I confrim that I have read and agree to
          the
          <span className=" text-black underline font-semibold">
            Terms and Conditions
          </span>{" "}
          of HUGO BOSS AG for participation in HUGO BOSS EXPERIENCE{" "}
        </p>
        <button
          type="submit"
          className=" w-40 py-3 mt-5 text-sm font-medium ml-[80%] max-md:ml-[45%] text-white bg-black shadow-sm focus:outline-none focus:ring-1"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
