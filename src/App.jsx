/* eslint-disable no-unused-vars */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import countries from "./myDumbData";
import List from "./components/List";
import Details from "./pages/Details";

function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputChange = (value) => {
    const filtered = filterCountries(value);
    setFilteredCountries(filtered);
  };
  const handleInputFocus = (isActive) => {
    setIsInputActive(isActive);
  };

  function filterCountries(input) {
    if (!input) {
      return countries;
    } else {
      const filtered = countries.filter((country) =>
        country.toLowerCase().startsWith(input.toLowerCase())
      );
      return filtered.length > 0
        ? filtered
        : ["i think there is no country with that name , at least not yet :)"];
    }
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onInputChange={handleInputChange}
          onInputFocus={handleInputFocus}
        />
        <Routes>
          <Route
            path='/'
            element={
              isInputActive ? (
                <List
                  countries={
                    filteredCountries.length > 0 ? filteredCountries : countries
                  }
                />
              ) : (
                <Main />
              )
            }
          />
          <Route path='/details/:countryName' element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
