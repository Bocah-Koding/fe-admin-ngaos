"use client";

import Dropdown from "@/components/Dropdown";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="drawer">
          {/* btn bar */}
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="px-5 py-1 text-white bg-ngaos-4 drawer-button"
            >
              Open drawer
            </label>
          </div>
          {/* btn bar */}

          {/* sidebar */}
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
          {/* sidebar */}
        </div>

        {/* dropdown */}
        <Dropdown />
      </main>
    </>
  );
}
