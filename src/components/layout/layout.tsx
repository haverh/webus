import { Outlet } from "react-router-dom";

import MainNav from "../navbar/main-nav";

const Layout = () => {
  return (
    <div className="flex min-h-dvh">
      <div className="flex flex-1 grow justify-end pr-8 border border-y-0 border-l-0 mr-12">
        <MainNav />
      </div>
      <div className="flex-1 grow-[2] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;