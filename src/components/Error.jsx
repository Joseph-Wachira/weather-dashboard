import { FiAlertCircle } from 'react-icons/fi';

export default function Error({ message }) {
  if (!message) return null;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-red-400/20 backdrop-blur-md rounded-xl text-white flex items-center gap-3 border border-red-300/30">
      <FiAlertCircle className="text-2xl" />
      <p>{message}</p>
    </div>
  );
}