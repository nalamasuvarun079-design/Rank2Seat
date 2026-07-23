function CollegeCard({ college }) {
  const getBadgeColor = () => {
    if (college.chance === "GREEN")
      return "bg-green-100 text-green-700";

    if (college.chance === "YELLOW")
      return "bg-yellow-100 text-yellow-700";

    return "bg-red-100 text-red-700";
  };

  const getChanceText = () => {
    if (college.chance === "GREEN") return "🟢 Safe Chance";
    if (college.chance === "YELLOW") return "🟡 Target Chance";
    return "🔴 Dream Chance";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold text-blue-700">
            {college.name}
          </h2>

          <p className="text-gray-600 mt-2">
            📍 {college.city}
          </p>

          <p className="text-gray-600">
            💻 {college.branch}
          </p>

          <p className="text-gray-600">
            🎯 Last Rank : {college.cutoff}
          </p>

          <p className="text-gray-600">
            💰 Fee : ₹{college.fee.toLocaleString()}
          </p>
        </div>

        <span
          className={`px-4 py-2 rounded-full font-bold ${getBadgeColor()}`}
        >
          {getChanceText()}
        </span>

      </div>
    </div>
  );
}

export default CollegeCard;