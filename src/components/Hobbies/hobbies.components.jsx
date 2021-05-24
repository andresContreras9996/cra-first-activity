import React from "react";

const checkStatus = (status) => {
  return status ? "Active" : "Inactive";
};

export const Hobbies = ({ hobbies,count }) => {
  return (
    <div>
    {
      <h2>Number of hobbies active: {count(hobbies)}</h2>
    }
      {hobbies.map((hobbie) => {
        return (
          <div>
            <h3>{hobbie.name}</h3>
            <p>{hobbie.description}</p>
            <p>Estatus: {checkStatus(hobbie.isActive)}</p>
          </div>
        );
      })}
    </div>
  );
};
