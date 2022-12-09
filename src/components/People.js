import React from "react";
import { Link } from "react-router-dom";

const People = () => {
  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">People</h2>
      <div className="people-container">
        <div className="screen-layout__single-element people-container__single-user">
          <div className="people-container__user-data">
            <div className="screen-layout__user-avatar_border">
              <div className="screen-layout__user-avatar"></div>
            </div>
            <p className="screen-layout__user-name people-container__user-name">
              Name
            </p>
          </div>
          <button className="people-container__button">Follow</button>
        </div>
      </div>
    </div>
    /* <Link to={`/people/${userName}`} /> */
  );
};

export default People;
