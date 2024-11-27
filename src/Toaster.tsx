import React, { useState } from "react";

type Toast = {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
};

const Toaster: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Add a new toast
  const addToast = (message: string, type: Toast["type"]) => {
    const id = Math.random().toString(36).substring(2, 9); // Generate unique ID
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  // Remove a toast
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-0 right-0 m-4 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded shadow ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : toast.type === "error"
              ? "bg-red-500 text-white"
              : toast.type === "info"
              ? "bg-blue-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          <span>{toast.message}</span>
          <button
            className="ml-4"
            onClick={() => removeToast(toast.id)}
          >
            ✖
          </button>
        </div>
      ))}

      {/* Example Buttons */}
      <button onClick={() => addToast("Success Toast!", "success")}>
        Show Success
      </button>
      <button onClick={() => addToast("Error Toast!", "error")}>
        Show Error
      </button>
    </div>
  );
};

export default Toaster;
