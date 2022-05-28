import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FriendCard from "./FriendCard";
import axios from "../../config/axios";

const getTitle = (pathname) => {
  switch (pathname) {
    case "/friend/request":
      return "Friend Request";

    case "/friend/suggestion":
      return "Suggestion";

    default:
      return "All Friend";
  }
};

const fetchUser = (pathname) => {
  console.log("fetchUser " + pathname);
  switch (pathname) {
    case "/friend/request":
      return axios.get("/friends?status=pending");

    case "/friend/suggestion":
      return axios.get("/friends?status=unknown");

    default:
      return axios.get("/friends");
  }
};

function FriendContainner() {
  const { pathname } = useLocation();
  const [friends, setfriends] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetchUser(pathname);
      setfriends(res.data.users);
      console.log("fetchData   " + res);
    } catch (err) {
      console.log("fetchData   " + err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  console.log("friends " + friends);

  return (
    <div className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5">
      <h1 className="text-5 mb-3 fw-bold">{getTitle(pathname)}</h1>
      <div className="row g-2">
        {friends.map((el) => (
          <FriendCard key={el.id} friend={el} fetchData={fetchData} />
        ))}
      </div>
    </div>
  );
}

export default FriendContainner;
