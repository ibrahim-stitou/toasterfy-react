oasterfy React 🛠️✨
Toasterfy React is a lightweight and customizable toast notification library for React. It helps you create beautiful, responsive, and non-intrusive toast messages with ease.

Features
🖌️ Customizable: Style your toasts with custom themes and animations.
🚀 Lightweight: Minimal bundle size for fast and efficient performance.
🔄 Flexible API: Support for various toast types (success, error, warning, info).
🕑 Auto-Dismiss: Control the duration or keep the notifications until dismissed manually.
📱 Responsive Design: Optimized for all screen sizes.
Installation
Install the package via npm or yarn:

npm install toasterfy-react  
# or  
yarn add toasterfy-react  
Usage
Get started with minimal configuration:

import React from 'react';  
import { Toaster, toast } from 'toasterfy-react';  
import 'toasterfy-react/dist/styles.css';  

function App() {  
  const notify = () => toast.success('Hello, Toasterfy! 🎉');  

  return (  
    <div>  
      <Toaster />  
      <button onClick={notify}>Show Toast</button>  
    </div>  
  );  
}  

export default App;  