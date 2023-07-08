"use client";

import { useState } from "react";

export default function Dropdown() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const list = [
    {
      id: 1,
      item: "item 1",
    },
    {
      id: 2,
      item: "item 2",
    },
  ];

  function focusInput() {
    setFocus(!focus);
  }

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={focusInput}
        readOnly
      />

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {focus &&
          list.map((listItem, index) => {
            return (
              <li key={index} onClick={focusInput}>
                <a
                  onClick={() => {
                    setValue(listItem.item);
                  }}
                >
                  {listItem.item}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
