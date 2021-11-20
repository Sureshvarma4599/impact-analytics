import React from "react";
import "../../App.css";
import { shortlist, rejected } from "../../utils/api";
import { useLocation, useHistory } from "react-router-dom";
export default function Profile() {
  const location = useLocation();
  const history = useHistory();
  const data = location.state.detail;
  console.log(data);
  const shortlistHandler = () => {
    shortlist.push(data);
    sessionStorage.setItem("shortlisted_names", JSON.stringify(shortlist));
    history.push("/");
  };
  const rejectHandler = () => {
    rejected.push(data);
    sessionStorage.setItem("rejected_names", JSON.stringify(rejected));
    history.push("/");
  };
  return (
    <div className="detailWrapper">
      <h1>Detail View</h1>
      <div className="detailCard">
        <img src={data.Image} />
        <p>{data.name}</p>
        <button
          id="shortlist"
          style={{ backgroundColor: "#0AEA73", border: "2px solid #0AEA73" }}
          onClick={shortlistHandler}
        >
          Shortlist
        </button>
        <button
          id="shortlist"
          style={{ backgroundColor: "#F72727", border: "2px solid #F72727" }}
          onClick={rejectHandler}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
