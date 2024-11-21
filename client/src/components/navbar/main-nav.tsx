import { NavLink, useLocation } from "react-router-dom";
import {UserProfile, UserProfileIcon} from "../profile/user";

import { 
  HomeIcon as HomeIconS,
  EnvelopeIcon as EnvelopeIconS,
  UserIcon as UserIconS,
  ArrowRightStartOnRectangleIcon as LogoutIconS,
} from "@heroicons/react/24/solid"
import { 
  HomeIcon as HomeIconO,
  EnvelopeIcon as EnvelopeIconO,
  UserIcon as UserIconO,
  ArrowRightStartOnRectangleIcon as LogoutIconO,
} from "@heroicons/react/24/outline"

import "./main-nav.css";

import { UserType } from "../../types";

const MainNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const user:UserType = {name: "name", handle:"@user_handle", bio:"nada"}

  return (
    <div className="w-full sm:max-w-[250px]">
      <div className="w-full bg-blue-800 sm:bg-transparent sm:sticky sm:top-9">
        <div className="hidden sm:block">
          <UserProfile user={user} />
        </div>
        
        <ul className="w-full flex justify-evenly flex sm:block">
          <NavLink to="/home" className="nav-link">
            {pathname === "/home" ? <HomeIconS className="nav-icon" /> : <HomeIconO className="nav-icon" />}
            <span className="nav-label">HOME</span>
          </NavLink>
          <NavLink to="/messages"  className="nav-link">
            {pathname === "/messages" ? <EnvelopeIconS className="nav-icon" /> : <EnvelopeIconO className="nav-icon" />}
            <span className="nav-label">MESSAGES</span>
          </NavLink>
          <NavLink to="/profile"  className="nav-link">
            {pathname === "/profile" ? <UserIconS className="nav-icon" /> : <UserIconO className="nav-icon" />}
            <span className="nav-label">PROFILE</span>
          </NavLink>
          <NavLink to="/home"  className="nav-link">
            {pathname === "/home" ? <LogoutIconS className="nav-icon" /> : <LogoutIconO className="nav-icon" />}
            <span className="nav-label">LOGOUT</span>
          </NavLink>
          <div className="sm:hidden nav-link">
            <UserProfileIcon user={user} />
          </div>
        </ul>
      </div> 
    </div>
  )
}

export default MainNav;
