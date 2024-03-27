/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./styles/list.css";

const List = ({ countries }) => {
  return (
    <div className='listParent'>
      <div className='myList'>
        <ul>
          {countries.map((country, index) => (
            <Link key={index} to={`/details/${country}`}>
              {country}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
