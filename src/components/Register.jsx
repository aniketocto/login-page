// import { useNavigate, useNavigation } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const handleRegisterClick = () => {
//     navigate("/sign-up");
//   };
//   return (
//     <>
//       <div className="flex items-center justify-center min-h-screen">
//         <div className=" p-10  shadow-md h-[600px] bg-black w-[500px] ">
//           <div className=" mb-12">
//             <h3 className="text-xl text-white  font-bold ">
//               Create an Account
//             </h3>
//           </div>
//           <p className=" text-[20px] text-white  mb-4">
//             Create an account to enjoy all the benefits of our registered
//             customers.
//           </p>
//           <ul className="list-none mt-4 ml-4 mb-4 text-white">
//             <li className="pb-2">Save your favourites across devices</li>
//             <li className="pb-2">Save time at checkout for future orders</li>
//             <li className="pb-2">
//               Manage your purchases and returns in your order history
//             </li>
//             <li className="pb-2">
//               Become a <span className="underline">HUGO BOSS EXPERIENCE</span>{" "}
//               member to profit from special offers
//             </li>
//           </ul>
//           <button
//             onClick={handleRegisterClick}
//             className="w-full px-3 py-2 mt-24 text-sm font-medium text-center text-black bg-white shadow-sm focus:outline-none focus:ring-1"
//           >
//             Register Now
//           </button>
//           <p className="mt-5 text-white underline text-sm text-center">
//             I registered in a store and want to activate my account
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10 shadow-md bg-black w-full md:w-[500px]">
        <div className="mb-12">
          <h3 className="text-xl text-white font-bold">Create an Account</h3>
        </div>
        <p className="text-lg text-white mb-4">
          Create an account to enjoy all the benefits of our registered
          customers.
        </p>
        <ul className="list-none mt-4 ml-4 mb-4 text-white">
          <li className="pb-2">Save your favorites across devices</li>
          <li className="pb-2">Save time at checkout for future orders</li>
          <li className="pb-2">
            Manage your purchases and returns in your order history
          </li>
          <li className="pb-2">
            Become a{" "}
            <span className="underline">HUGO BOSS EXPERIENCE</span> member to
            profit from special offers
          </li>
        </ul>
        <button
          onClick={handleRegisterClick}
          className="w-full px-3 py-2 mt-8 md:mt-24 text-sm font-medium text-center text-black bg-white shadow-sm focus:outline-none focus:ring-1"
        >
          Register Now
        </button>
        <p className="mt-5 text-white underline text-sm text-center">
          I registered in a store and want to activate my account
        </p>
      </div>
    </div>
  );
};

export default Register;
