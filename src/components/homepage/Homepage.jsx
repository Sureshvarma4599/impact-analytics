import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
export default function Homepage() {
  const [data, setData] = useState([]);
  const [duplicates, setDuplicates] = useState([]);
  const [value, setValue] = useState("");
  const history = useHistory();
  const api = () => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setDuplicates(res.data);
      });
  };
  useEffect(() => {
    api();
  }, []);
  const handleClick = (e) => {
    history.push({
      pathname: `/id/${e.id}`,
      state: { detail: e },
    });
  };
  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleFilter = () => {
    console.log(capitalizeFirstLetter(value));
    const string = capitalizeFirstLetter(value);
    if (value.length > 0) {
      const filtered = data.filter((item) => item.name.includes(string));
      setData(filtered);
    } else {
      setData(duplicates);
    }
  };
  return (
    <div>
      <h1>Portal</h1>
      <div className="search">
        <input type="text" onChange={handleChange} />
        <button onClick={handleFilter}>Search</button>
      </div>
      <div className="filter">
        <Link to="/shortlisted">
          <button
            style={{ backgroundColor: "#0AEA73", border: "2px solid #0AEA73" }}
          >
            Shortlisted
          </button>
        </Link>
        <Link to="/rejected">
          <button
            style={{ backgroundColor: "#F72727", border: "2px solid #F72727" }}
          >
            Rejected
          </button>
        </Link>
      </div>

      <div className="homePage">
        <div className="cards">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleClick(item)}
              >
                <img src={item.Image} />
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
