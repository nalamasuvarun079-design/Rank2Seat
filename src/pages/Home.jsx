import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-5xl font-bold text-center text-blue-700">
          🎓 Rank2Seat
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Your Rank. Your Seat. Your Future.
        </p>

        <div className="mt-8">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default Home;