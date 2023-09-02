import { useState } from 'react';

export const Filter = ({ onFilterChange }) => {
  const [filert, setFilter] = useState('');

  // Обробник подій для зміни значення фільтра
  const handleInputChange = evt => {
    const value = evt.target.value;
    setFilter(value);
    onFilterChange(value);
    // console.log(value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filert}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
