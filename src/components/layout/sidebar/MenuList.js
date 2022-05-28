import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menus = [
  {
    title: "Friend Request",
    to: "/friend/request",
    icon: "fa-solid fa-user-check",
  },
  {
    title: "Suggestion",
    to: "/friend/suggestion",
    icon: "fa-solid fa-user-plus",
  },
  { title: "All Frinend", to: "/friend", icon: "fa-solid fa-user-group" },
];

function MenuList() {
  const { pathname } = useLocation();
  console.log("MenuList  " + pathname);
  return (
    <ul className="px-2">
      {menus.map((el) => (
        <MenuItem
          key={el.title}
          title={el.title}
          to={el.to}
          icon={el.icon}
          active={pathname === el.to}
        />
      ))}
    </ul>
  );
}

export default MenuList;
