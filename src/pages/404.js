import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <div className="mt-5">
    <div style={{ marginTop: "70px", width: "100%" }}></div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
