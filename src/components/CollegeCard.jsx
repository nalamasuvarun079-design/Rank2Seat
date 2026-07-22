function CollegeCard({ college }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {college.name}
          </h2>

          <p className="text-gray-500">
            📍 {college.city}
          </p>

          <p className="text-gray-500">
            💻 {college.branch}
          </p>

          <p className="text-gray-500">
            💰 Fee: ₹{college.fee}
          </p>

          <p className="text-gray-500">
            🎯 Cutoff: {college.cutoff}
          </p>
        </div>

        <div>
          <span
            className={`px-4 py-2 rounded-full text-white font-bold ${
              college.chance === "GREEN"
                ? "bg-green-500"
                : college.chance === "YELLOW"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {college.chance}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;