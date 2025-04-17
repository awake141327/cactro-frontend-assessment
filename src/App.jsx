// React Utils
import React, { useState } from "react";

// Components
import LandingPage from "./components/LandingPage/LandingPage";
import CookieBox from "./components/CookieBox/CookieBox";

function App() {
  const [isCookieDialogOpen, setIsCookieDialogOpen] = useState(true);

  return (
    <div>
      <LandingPage />
      {isCookieDialogOpen && (
        <CookieBox setIsCookieDialogOpen={setIsCookieDialogOpen} />
      )}
      Add Some Changes to the New Branch.
    </div>
  );
}

export default App;
