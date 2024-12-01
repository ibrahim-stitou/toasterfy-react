import React from "react";
import Toaster from "toasterfy-react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; // Add icons for customization

const App = () => {
  return (
    <div>
      <h1>Testing Toasterfy</h1>

      {/* Success toast */}
      <Toaster 
        message="Operation Successful!" 
        time={5000} 
        bgColor="green" 
        icon={<FaCheckCircle color="white" />} 
      />

      {/* Error toast */}
      <Toaster 
        message="Something went wrong!" 
        time={3000} 
        bgColor="red" 
        icon={<FaExclamationCircle color="white" />} 
      />
    </div>
  );
};

export default App;
