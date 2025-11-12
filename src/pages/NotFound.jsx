
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-white">
      <div className="text-center px-6">
        <div className="text-7xl font-black text-black mb-4">404</div>
        <p className="text-lg text-black/80 mb-6">Look like you're lost</p>
        <p className="text-black/60 mb-10">the page you are looking for not avaible!</p>
        <Link to="/" className="inline-block px-5 py-2 rounded-md bg-green-600 text-white">Go to Home</Link>
      </div>
    </div>
  );
}
