import React, { useState } from "react";

const Gender = () => {
  const [gender, setGender] = useState(0);
  return (
    <div className="flex flex-col  p-2 gap-2">
      <span className="mb-2 font-bold">Gender ({gender})</span>
      <div className="items-center flex">
        <input
          onClick={(e) => {
            e.target.checked ? setGender(gender + 1) : setGender(gender - 1);
          }}
          type="checkbox"
          className="custom-checkbox"
        />
        <label className="ml-1">Men</label>
      </div>
      <div className="items-center flex">
        <input
          onClick={(e) => {
            e.target.checked ? setGender(gender + 1) : setGender(gender - 1);
          }}
          type="checkbox"
          className="custom-checkbox"
        />
        <label className="ml-1">Women</label>
      </div>
      <div className="items-center flex">
        <input
          onClick={(e) => {
            e.target.checked ? setGender(gender + 1) : setGender(gender - 1);
          }}
          type="checkbox"
          className="custom-checkbox"
        />
        <label className="ml-1">Unisex</label>
      </div>
    </div>
  );
};

export default Gender;
