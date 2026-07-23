import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();

  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("EWS");
  const [branch, setBranch] = useState("CSE");

  const handleSearch = () => {
    if (!rank) {
      alert("Please enter your PGECET Rank");
      return;
    }

    navigate("/results", {
      state: {
        rank,
        category,
        branch,
      },
    });
  };

  return (
    <div className="space-y-4">

      <input
        type="number"
        placeholder="Enter PGECET Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-3"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-3"
      >
        <option>EWS</option>
        <option>OC</option>
        <option>BC-A</option>
        <option>BC-B</option>
        <option>BC-C</option>
        <option>BC-D</option>
        <option>BC-E</option>
        <option>SC</option>
        <option>ST</option>
      </select>

      <select
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-3"
      >
        <option>CSE</option>
        <option>AI & ML</option>
        <option>Data Science</option>
        <option>Cyber Security</option>
        <option>Information Technology</option>

        <option>ECE</option>
        <option>Embedded Systems</option>
        <option>VLSI Design</option>
        <option>Digital Electronics</option>

        <option>EEE</option>
        <option>Power Electronics</option>
        <option>Power Systems</option>

        <option>Mechanical Engineering</option>
        <option>CAD/CAM</option>
        <option>Thermal Engineering</option>
        <option>Machine Design</option>

        <option>Civil Engineering</option>
        <option>Structural Engineering</option>
        <option>Transportation Engineering</option>
        <option>Geotechnical Engineering</option>

        <option>MCA</option>
        <option>MBA</option>
      </select>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-3 font-bold"
      >
        🔍 Find My Colleges
      </button>

    </div>
  );
}

export default SearchForm;