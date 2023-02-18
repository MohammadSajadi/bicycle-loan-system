import './locations.css'

import React, { useState } from 'react';
import axios from 'axios';

export const Locations = () => {
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/location');
      setLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLocation = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/location/${id}`);
      setLocations(locations.filter((location) => location.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const renderLocations = () => {
    return (
      <table>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Location Id</th>
            <th>Actions</th>
          </tr>
        </thead> */}
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.name}</td>
              <td>{location.address}</td>
              <td>{location.id}</td>
              <td>
                <button onClick={() => deleteLocation(location.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="locations">
      <h1>Locations</h1>
      {renderLocations()}
      <form
        className="locationsForm"
        onSubmit={async (event) => {
          event.preventDefault();
          const name = event.target.name.value;
          const address = event.target.address.value;
          try {
            const response = await axios.post('http://localhost:3001/api/location', { name, address });
            setLocations([...locations, response.data]);
          } catch (error) {
            console.error(error);
          }
          event.target.reset();
        }}
      >
        <div className="locationsFormGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="locationsFormGroup">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
  
};