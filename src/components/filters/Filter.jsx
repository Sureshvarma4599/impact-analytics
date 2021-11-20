import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
export default function Filter(props) {
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (props.type === "1") {
      const data = sessionStorage.getItem("shortlisted_names");
      const result = JSON.parse(data);
      setData(result);
    }
    if (props.type === "2") {
      const data = sessionStorage.getItem("rejected_names");
      const result = JSON.parse(data);
      setData(result);
    }
  }, []);
  const handleBack = () => {
    history.push("/");
  };
  return (
    <div>
      {props.type === "1" ? (
        <div>
          <h1>Shortlisted profiles</h1>
          <button className="back" onClick={handleBack}>
            Back to HomePage
          </button>
        </div>
      ) : (
        <div>
          <h1>Rejected profiles</h1>
          <button className="back" onClick={handleBack}>
            Back to HomePage
          </button>
        </div>
      )}

      <div className="cards">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="card">
                <img src={item.Image} />
                <p>{item.name}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
