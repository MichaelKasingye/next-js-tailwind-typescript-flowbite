import React from "react";

// components

type Props = {
  children: any;
};

export default function Auth({ children }: Props) {
  return (
    <>
      <h1>Auth SideBar</h1>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <h1>Auth Footer</h1>
        </section>
      </main>
    </>
  );
}
