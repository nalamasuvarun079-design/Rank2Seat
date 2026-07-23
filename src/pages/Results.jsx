import { useLocation } from "react-router-dom";
import colleges from "../data/colleges";
import CollegeCard from "../components/CollegeCard";

function Results() {
  const location = useLocation();

  const { rank, category, branch } = location.state || {};

  const userRank = Number(rank);

  const filteredColleges = colleges
    .filter((college) => college.branch === branch)
    .map((college) => ({
      ...college,
      chance:
        userRank <= college.cutoff
          ? "GREEN"
          : userRank <= college.cutoff + 1000
          ? "YELLOW"
          : "RED",
    }))
    .sort((a, b) => {
      const order = { GREEN: 1, YELLOW: 2, RED: 3 };
      return order[a.chance] - order[b.chance];
    });

  const safe = filteredColleges.filter(c => c.chance === "GREEN").length;
  const target = filteredColleges.filter(c => c.chance === "YELLOW").length;
  const dream = filteredColleges.filter(c => c.chance === "RED").length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          🎓 Rank2Seat Results
        </h1>

        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-gray-500">Your Rank</p>
            <h2 className="text-3xl font-bold text-blue-600">{rank}</h2>
          </div>

          <div className="bg-green-100 rounded-xl shadow p-5">
            <p className="text-green-700">Safe</p>
            <h2 className="text-3xl font-bold">{safe}</h2>
          </div>

          <div className="bg-yellow-100 rounded-xl shadow p-5">
            <p className="text-yellow-700">Target</p>
            <h2 className="text-3xl font-bold">{target}</h2>
          </div>

          <div className="bg-red-100 rounded-xl shadow p-5">
            <p className="text-red-700">Dream</p>
            <h2 className="text-3xl font-bold">{dream}</h2>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-3">
            Search Details
          </h2>

          <p><strong>Category:</strong> {category}</p>
          <p><strong>Branch:</strong> {branch}</p>

        </div>

        <div className="space-y-5 mt-8">

          {filteredColleges.length === 0 ? (
            <div className="bg-red-100 text-red-700 p-5 rounded-xl">
              No colleges found.
            </div>
          ) : (
            filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
              />
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default Results;