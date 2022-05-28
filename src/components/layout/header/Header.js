import React from "react";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Menu from "./Menu";
import ProfileIcon from "./ProfileIcon";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm py-0 fixed-top">
        <div className="container-fluid">
          <Logo />

          <Menu />

          <div className="d-flex justify-content-end align-items-center flex-grow-1 me-1">
            <ProfileIcon />
            <Dropdown />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

// import { Dropdown } from "bootstrap";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { FacebookLogo, Friend, Home } from "../../../icons";
// import Logo from "./Logo";
// import Menu from "./Menu";
// import ProfileIcon from "./ProfileIcon";
// function Header() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm py-0 fixed-top">
//         <div className="container-fluid">
//           <Logo />
//           <Menu />

//           {/* <button
//               className="navbar-toggler shadow-none border-0"
//               type="button"
//               data-bs-toggle="collapse"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button> */}

//           <div className="d-flex justify-content-end align-items-center flex-grow-1 me-1">
//             <ProfileIcon />

//             <div className="dropdown ms-2">
//               <button
//                 className="btn rounded-circle w-10 h-10 bg-gray-200 hover-bg-gray-300 shadow-none"
//                 data-bs-toggle="dropdown"
//               >
//                 <i className="fa-solid fa-caret-down" />
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end px-2 mt-1 border border-1 rounded-xl shadow-sm w-sm-90">
//                 <li>
//                   <Link
//                     className="dropdown-item p-2 d-flex align-items-center hover-bg-neutral-100 hover-rounded-lg"
//                     to="/profile"
//                   >
//                     <img
//                       className="rounded-circle me-3"
//                       src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
//                       width="60"
//                       height="60"
//                       alt="user"
//                     />
//                     <div className="d-flex flex-column">
//                       <span className="fw-bold">Han So Yoon</span>
//                       <small className="text-muted">See your profile</small>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider mx-2 border-1" />
//                 </li>
//                 <li>
//                   <button
//                     className="dropdown-item d-flex align-items-center p-2 hover-bg-neutral-100 hover-rounded-lg"
//                     type="button"
//                     //onClick={() => navigate("/login")}
//                   >
//                     <i className="fas fa-sign-out-alt rounded-circle p-2 bg-gray-300 text-5" />
//                     <small className="fw-bold ps-2">Log Out</small>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   );
// }

// export default Header;
