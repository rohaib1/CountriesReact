import React from "react";

const Country = ({ country, onButtonClick, visited }) => {
  const headingStyle = {
    textAlign: 'left', // Align text to the left
  };

  return (
    <div>
      <h2 style={headingStyle}>{country.name.common}{country.flag}</h2>
      <p style={headingStyle}>Capital: {country.capital}</p>
      {!visited && (
        <button onClick={() => onButtonClick(country)}>Move to Visited!</button>
      )}
    </div>
  );
};

export default Country;
