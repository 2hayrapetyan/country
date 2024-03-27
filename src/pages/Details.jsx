/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import "./details.css";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        if (data.status === 404) {
          setError("Didnt I say that there is no such country? 😡");
        } else {
          setCountryData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching country data: ", error);
        setError("Error fetching country data. Please try again later.");
      }
    };

    fetchData();
  }, [countryName]);

  if (error) {
    return (
      <div className='details'>
        <span>{error}</span>
        <Link to='/' style={{ color: "#f8d57e" }}>
          Go back
        </Link>
      </div>
    );
  }

  if (!countryData) {
    return <div className='details'>Loading...</div>;
  }

  const { flags, currencies, population, capital } = countryData;

  return (
    <div className='details'>
      <Accordion
        title={"Flag"}
        content={<img src={flags.png} alt={`Flag`} />}
      />
      <Accordion
        title={"Currency"}
        content={Object.values(currencies).map((currency, index) => (
          <React.Fragment key={index}>
            {currency.name} ({currency.symbol})
          </React.Fragment>
        ))}
      />
      <Accordion title={"Population"} content={population} />
      <Accordion title={"Capital"} content={capital} />
    </div>
  );
}
