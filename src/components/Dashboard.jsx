import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/sign-in";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-10  shadow-md h-[600px] w-[500px] ">
        {userData ? (
          <>
            <h3>
              Welcome {userData.firstName} {userData.lastName}
            </h3>
            <div>
              <p>Email:{userData.email} </p>
              <p>First Name:{userData.firstName} </p>
              <p>Last Name: {userData.lastName}</p>
            </div>
            <button
              className=" w-40 py-3 mt-5 text-sm font-medium text-white bg-black shadow-sm focus:outline-none focus:ring-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
