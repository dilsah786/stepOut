import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/authContext";
import { api } from "../../config";

const TrainSearch = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trains, setTrains] = useState([]);
  const [error, setError] = useState("");

  const { token } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    const trainData = {
      source,
      destination,
    };

    try {
      const response = await fetch(`${api}/trains`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainData),
      });

      if (!response.ok) {
        // Handle non-200 responses
        const errorRes = await response.json();
        setError(errorRes.message || "An error occurred");
        return;
      }

      const res = await response.json();
      setTrains(res.trainList);
    } catch (err) {
      setError("Facing issue while fetching trains");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Search Trains</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Source Station</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Destination Station</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </form>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {trains.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Available Trains</h2>
          <ul className="divide-y divide-gray-200">
            {trains.map((train) => (
              <li key={train.trainNumber} className="py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">{train.trainName}</p>
                    {/* <p className="text-gray-500">
                      Departure: {train.departure} - Arrival: {train.arrival}
                    </p> */}
                  </div>
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">
                    Book Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrainSearch;
