import AccountForm from "../components/clientProfil/accountForm";
import Profile  from "../components/clientProfil/profile";
import React, { useState } from "react";

export default function Account() {
  const [userData, setUserData] = useState({
    fullname: "John Doe",
    email: "john@example.com"
  });
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      {showSettings ? (
        <AccountForm userData={userData} setShowSettings={setShowSettings} updateUserData={setUserData} />
      ) : (
        <div className="account-overview">
          <Profile showSettings={showSettings} setShowSettings={setShowSettings} userData={userData} />
        </div>
      )}
    </>
  );
}