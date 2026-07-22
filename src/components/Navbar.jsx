import { FaGraduationCap } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaGraduationCap size={28} />
          <h1 className="text-2xl font-bold">Rank2Seat</h1>
        </div>

        <div className="hidden md:flex gap-6 font-medium">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">Colleges</a>
          <a href="#" className="hover:text-yellow-300">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;