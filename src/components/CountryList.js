import React, { useState } from "react";
import Country from "./Country";

const CountryList = ({ countries }) => {
  const [toVisitCountries, setToVisitCountries] = useState(countries);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleButtonClick = (countryToMove) => {
    // Remove the country from the "toVisitCountries" list
    const updatedToVisitCountries = toVisitCountries.filter(
      (country) => country !== countryToMove
    );

    // Add the country to the "visitedCountries" list
    setToVisitCountries(updatedToVisitCountries);
    setVisitedCountries([...visitedCountries, countryToMove]);
  };

  return (
    <div>
      <h2>To Visit:</h2>
      {toVisitCountries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
          onButtonClick={handleButtonClick}
          visited={false} // Pass visited prop as false for countries to visit
        />
      ))}

      <h2>Visited Countries:</h2>
      {visitedCountries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
          visited={true} // Pass visited prop as true for visited countries
        />
      ))}
    </div>
  );
};

export default CountryList;
