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
      </select>

      <button
  onClick={handleSearch}
  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
>
  🔍 Find My Colleges
</button>

    </div>
  );
}

export default SearchForm;