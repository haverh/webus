import { NavLink } from "react-router-dom";

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

const MainNav = () => {
  const pathname = window.location.pathname;
  console.log(pathname);

  return (
    <div className="mr-8">
      <div className="sticky top-9">
        <div className="size-[64px] text-left m-2.5 font-bold border bg-gray-900 rounded-full cursor-pointer transform hover:scale-105"></div>

        <ul className="w-fit">
          <NavLink to="/home" className="nav-link">
            {pathname === "/home" ? <HomeIconS className="size-6 mr-2" /> : <HomeIconO className="size-6 mr-2" />}
            <span className="text-xl">HOME</span>
          </NavLink>
          <NavLink to="/messages"  className="nav-link">
            {pathname === "/messages" ? <EnvelopeIconS className="size-6 mr-2" /> : <EnvelopeIconO className="size-6 mr-2" />}
            <span className="text-xl">MESSAGES</span>
          </NavLink>
          <NavLink to="/profile"  className="nav-link">
            {pathname === "/profile" ? <UserIconS className="size-6 mr-2" /> : <UserIconO className="size-6 mr-2" />}
            <span className="text-xl">PROFILE</span>
          </NavLink>
          <NavLink to="/home"  className="nav-link">
            {pathname === "/home" ? <LogoutIconS className="size-6 mr-2" /> : <LogoutIconO className="size-6 mr-2" />}
            <span className="text-xl">LOGOUT</span>
          </NavLink>
        </ul>
      </div> 
    </div>
  )
}

export default MainNav;
