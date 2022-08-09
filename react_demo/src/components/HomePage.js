import React from "react";

// React component
export default function HomeView() {
  return (
    <main className="home">
      <ul className="home-ul">
        <h2>Fun Facts about React</h2>
        <li>
          <i className="fa fa-angle-right">
            Was first released in 2013
          </i>
        </li>
        <li>
          <i className="fa fa-angle-right">
            Was originally created by Jordan Walker
          </i>
        </li>
        <li>
          <i className="fa fa-angle-right"> Has well over 100K stars on GitHub</i>
        </li>
        <li>
          <i className="fa fa-angle-right">Maintained by Facebook</i>
        </li>
        <li>
          <i className="fa fa-angle-right">Powers thousands of enterprice apps, including mobile apps</i>
        </li>
      </ul>
      </main>
  );
}
