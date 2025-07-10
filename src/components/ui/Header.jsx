import { MenuIcon } from "lucide-react";

export default function Header({ title }) {
  return (
    <div className="bg-yellow-400 px-4 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold text-black">{title}</h1>
      <button type="button" className="">
        <MenuIcon />
      </button>
    </div>
  );
}
