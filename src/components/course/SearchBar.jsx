import { Filter } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 p-4 bg-white">
      {/* <button className="text-gray-500">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17l-4-4m0 0l-4-4m4 4h12"
          />
        </svg>
      </button> */}
      <div className=" relative flex w-full justify-center items-center gap-2">
        <Filter
          size={23}
          className=" mb-2 items-center absolute left-3 top-2.5"
        />
        <input
          type="text"
          className="ps-10 w-full border border-gray-300 rounded-md px-2 py-2"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
