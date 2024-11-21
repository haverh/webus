import { Outlet } from "react-router-dom";

import MainNav from "../navbar/main-nav";

const Layout = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row min-h-dvh">
      <div className="w-full fixed bottom-0 sm:static flex flex-1 grow justify-end border border-y-0 border-l-0">
        <MainNav />
      </div>
      <div className="flex-1 grow-[3] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;