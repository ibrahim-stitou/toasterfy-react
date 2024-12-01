### Toaster Component

The `Toaster` component displays a toast message with customizable options.

#### Props:

- `message` (string): The message to display in the toast.
- `time` (number): The duration (in milliseconds) for how long the toast stays visible (default: `3000` ms).
- `bgColor` (string): The background color of the toast (default: `black`).
- `icon` (ReactNode): A custom icon to display alongside the toast message (optional).

#### Example:

```tsx
<Toaster 
  message="Operation Successful!" 
  time={5000} 
  bgColor="green" 
  icon={<FaCheckCircle />} 
/>
