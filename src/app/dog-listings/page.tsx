'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dogs')
      .then(response => {
        setDogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the dogs!', error);
      });
  }, []);

  // Function to toggle the visibility of additional details for a dog
  const toggleDetails = (index) => {
    setDogs(prevDogs => {
      const updatedDogs = [...prevDogs];
      updatedDogs[index].showDetails = !updatedDogs[index].showDetails;
      return updatedDogs;
    });
  };

  return (
    <div className="container mx-auto p-6 flex flex-wrap">
      {dogs.map((dog, index) => (
        <div key={dog._id} className="w-1/3 p-4">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="mb-4">
              {/* Properly construct the image source URL */}
              <img src={`http://localhost:5000/${dog.images[0]}`} alt={dog.name} className="w-full h-auto rounded-md" />
            </div>
            <h2 className="text-xl font-bold mb-2">{dog.name}</h2>
            <p className="mb-2">{dog.description}</p>
            <p className="mb-2">Contact: {dog.phone}</p>
            <p className="mb-2">Address: {dog.address}</p>
            
            
          </div>
        </div>
      ))}
    </div>
  );
}
