import React from "react";
import defaultProfilePic from "../../asset/image/Logo.png";
function UserCard({ src }) {
  return (
    <img
      src={src || defaultProfilePic}
      className="card-img-top riunded-t-lg"
      alt="user"
    />
  );
}

export default UserCard;
