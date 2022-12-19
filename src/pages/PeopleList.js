import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProfiles } from "../reducers/profiles";

import PeopleListElement from "../components/PeopleListElement";

const People = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const peopleList = useSelector((store) => store.profiles.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getProfiles());
    }
  }, [accessToken, dispatch]);

  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">People</h2>
      <div className="people-container">
        {peopleList.map((profile) => (
          <PeopleListElement
            key={profile._id}
            avatar={profile.image}
            name={profile.name}
            userId={profile._id}
            followingUsers={profile.followers}
          />
        ))}
      </div>
    </div>
  );
};

export default People;
