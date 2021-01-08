import React from "react";
import "./style.css";

function Paginate(props) {
  return (
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a className="page-link" href={props.prev} aria-label="Previous">
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous Service</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="/services/1">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="/services/2">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="/services/3">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="/services/4">
          4
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href={props.next} aria-label="Next">
          <span aria-hidden="true">»</span>
          <span className="sr-only">Next Service</span>
        </a>
      </li>
    </ul>
  );
}

export default Paginate;
