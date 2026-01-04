import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center min-h-screen text-center">
      <div className="text-9xl font-bold mb-5">404</div>
      <div className="text-xl mb-10">Oops! The page you're looking for doesn't exist.</div>
      <Link
        to="/"
        className="bg-white text-black px-8 py-4 text-lg rounded hover:bg-gray-200 transition-colors"
      >
        Home Page
      </Link>
    </div>
  );
};

export default NotFound;