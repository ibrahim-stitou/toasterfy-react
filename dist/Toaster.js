var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState } from "react";
var Toaster = function () {
    var _a = useState([]), toasts = _a[0], setToasts = _a[1];
    // Add a new toast
    var addToast = function (message, type) {
        var id = Math.random().toString(36).substring(2, 9); // Generate unique ID
        setToasts(function (prev) { return __spreadArray(__spreadArray([], prev, true), [{ id: id, message: message, type: type }], false); });
    };
    // Remove a toast
    var removeToast = function (id) {
        setToasts(function (prev) { return prev.filter(function (toast) { return toast.id !== id; }); });
    };
    return (React.createElement("div", { className: "fixed top-0 right-0 m-4 space-y-2" },
        toasts.map(function (toast) { return (React.createElement("div", { key: toast.id, className: "p-4 rounded shadow ".concat(toast.type === "success"
                ? "bg-green-500 text-white"
                : toast.type === "error"
                    ? "bg-red-500 text-white"
                    : toast.type === "info"
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-500 text-black") },
            React.createElement("span", null, toast.message),
            React.createElement("button", { className: "ml-4", onClick: function () { return removeToast(toast.id); } }, "\u2716"))); }),
        React.createElement("button", { onClick: function () { return addToast("Success Toast!", "success"); } }, "Show Success"),
        React.createElement("button", { onClick: function () { return addToast("Error Toast!", "error"); } }, "Show Error")));
};
export default Toaster;
