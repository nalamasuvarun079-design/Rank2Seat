import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import { FaGraduationCap, FaSearch } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700 flex items-center justify-center px-5">

        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-5xl w-full">

          <div className="text-center">

            <FaGraduationCap
              className="mx-auto text-blue-700"
              size={70}
            />

            <h1 className="text-5xl font-bold mt-5 text-gray-800">
              Rank2Seat
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Telangana PGECET College Predictor
            </p>

          </div>

          <div className="mt-8">
            <SearchForm />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-blue-50 rounded-2xl p-6 text-center shadow">

              <FaSearch
                className="mx-auto text-blue-600"
                size={35}
              />

              <h2 className="font-bold text-xl mt-3">
                Smart Prediction
              </h2>

              <p className="text-gray-600 mt-2">
                Get college predictions based on your PGECET Rank.
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center shadow">

              <FaGraduationCap
                className="mx-auto text-green-600"
                size={35}
              />

              <h2 className="font-bold text-xl mt-3">
                Latest Colleges
              </h2>

              <p className="text-gray-600 mt-2">
                Explore colleges with branch and category filters.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Home;