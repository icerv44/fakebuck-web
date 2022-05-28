import React from "react";
import defaultPic from "../../asset/image/Logo.png";

function UserIcon({ src, size, border }) {
  //console.log(src);
  return (
    <img
      className={`rounded-circle ${
        border ? "border border-white border-" + border : ""
      }`}
      src={src}
      width={size}
      height={size}
      alt="user"
    />
  );
}

export default UserIcon;
