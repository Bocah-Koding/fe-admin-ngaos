"use client";

import { useState } from "react";

export default function Dropdown() {
  const [value, setValue] = useState("");
  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={(e) => setValue(e.target.innerHTML)}>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
