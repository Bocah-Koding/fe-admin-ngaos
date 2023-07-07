"use client";
import { FiUser } from "react-icons/fi";

export default function Nav() {
  return (
    <nav className="bg-ngaos-2 flex justify-between items-center py-2 px-20 text-white">
      <div>Ngaos</div>

      <div className="flex gap-x-2 items-center">
        <FiUser /> <p>JAMAL</p>
      </div>
    </nav>
  );
}
