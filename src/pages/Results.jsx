import { useLocation } from "react-router-dom";
import colleges from "../data/colleges";
import CollegeCard from "../components/CollegeCard";

function Results() {
  const location = useLocation();

  const { rank, category, branch } = location.state || {};

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          🎓 Rank2Seat Results
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Search Details
          </h2>

          <p><strong>Rank:</strong> {rank}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Branch:</strong> {branch}</p>
        </div>

        <div className="space-y-5">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Results;