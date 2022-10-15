import React from "react";
import { ActualSidebar } from "../components/SideBar";

// components

type Props = {
    children :any;
}

export default function Admin({children}: Props) {
  return (
    <>
      <ActualSidebar/>
      <div className="relative md:ml-64 bg-blueGray-100">
      <h1>Admin NavBar</h1>
        {/* Header */}
        <h1>Admin Stats</h1>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">

          {children}

          <h1>Admin Footer</h1>
        </div>
      </div>
    </>
  );
}


// type Props = {}

// export default function Admin({}: Props) {
//   return (
//     <div>Admin</div>
//   )
// }