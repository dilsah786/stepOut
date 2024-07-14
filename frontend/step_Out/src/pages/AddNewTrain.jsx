import React, { useState } from "react";
import { api } from "../../config";

const AddNewTrain = () => {
  const [trainName, setTrainName] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (availableSeats > 500) {
      return alert("Available seats can not exceeds more than 500");
    }
    const trainData = {
      trainName,
      trainNumber,
      source,
      destination,
      seats: parseInt(availableSeats, 10),
    };
    try {
      const result = await fetch(`${api}/admin/train`, {
        method: "POST",
        headers: {
            Authorization : `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(trainData),
      });

      const res = await result.json();
      console.log(res);

      
      alert(res.message)

      setTrainName("");
      setTrainNumber("");
      setSource("");
      setDestination("");
      setAvailableSeats("");

   
    } catch (error) {
      console.error("Error adding train:", error);
      alert("An error occurred. Please try again.");
    }
  };
















  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Add a New Train
        </h2>
        <form onSubmit={(e)=>handleSubmit(e)} className="space-y-4">
          <div>
            <label
              htmlFor="trainName"
              className="block text-sm font-medium text-gray-700"
            >
              Train Name
            </label>
            <input
              type="text"
              id="trainName"
              value={trainName}
              onChange={(e) => setTrainName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="trainNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Train Number
            </label>
            <input
              type="text"
              id="trainNumber"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-700"
            >
              Source
            </label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="availableSeats"
              className="block text-sm font-medium text-gray-700"
            >
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Train
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTrain;
