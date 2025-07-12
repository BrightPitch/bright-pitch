import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaFilter,
  FaPlus,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdUpdate, MdOutlineUnpublished } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Header from "@/components/Header";
import NavigationPanel from "@/components/ui/NavigationPanel";

export default function MyPitches() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative pb-24">
      <Header title={"Manage Pitch"} toggleSidebar={() => setShowSidebar(true)}></Header>
      {
        showSidebar 
        ? <NavigationPanel closeAction={() => setShowSidebar(false)} />
        : null 
      }

      {/* Filter + Sort */}
      <div className="p-3 flex items-center gap-2 border-b">
        <button
          className="flex items-center border rounded px-3 py-2 gap-2 w-full"
          onClick={() => setShowFilter(true)}
        >
          <FaFilter />
          Filter by...
        </button>
        <button onClick={() => setShowSort(true)} className="text-xl">
          <FaBars className="rotate-90" />
        </button>
      </div>

      {/* Pitch List */}
      <div className="p-4 space-y-4">
        {[...Array(3)].map((_, idx) => (
          <PitchCard
            key={idx}
            id={`idea${idx + 1}`}
            status={idx === 0 ? "draft" : "published"}
          />
        ))}
      </div>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-around text-sm text-gray-700 z-10">
        <button className="flex flex-col items-center" onClick={() => alert("Go to Dashboard")}>
          <FaBars size={20} />
          Dashboard
        </button>
        <button className="flex flex-col items-center" onClick={() => alert("Add Post")}>
          <FaPlus size={20} />
          Add Post
        </button>
        <button className="flex flex-col items-center" onClick={() => alert("Explore Posts")}>
          <FaFilter size={20} />
          Explore
        </button>
      </footer>

      {/* Sort Panel */}
      {showSort && (
        <Overlay onClose={() => setShowSort(false)}>
          <div className="bg-white p-4 w-full max-w-sm rounded shadow-md mx-auto mt-10">
            <HeaderPanel title="Sort" onClose={() => setShowSort(false)} />
            <div className="flex gap-2 mb-4">
              <button className="border px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                Ascending
              </button>
              <button className="border px-3 py-1 rounded-full">Descending</button>
            </div>
            <div className="mb-4">
              <RadioOption name="sort" label="Last updated" />
              <RadioOption name="sort" label="Created time" />
            </div>
            <div className="flex gap-3">
              <button className="bg-yellow-400 px-4 py-2 rounded">Apply</button>
              <button className="border px-4 py-2 rounded text-purple-600">Clear</button>
            </div>
          </div>
        </Overlay>
      )}

      {/* Filter Panel */}
      {showFilter && (
        <Overlay onClose={() => setShowFilter(false)}>
          <div className="bg-white p-4 w-full max-w-sm rounded shadow-md mx-auto mt-10">
            <HeaderPanel title="Filter" onClose={() => setShowFilter(false)} />
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tag</h4>
              <Checkbox label="Food and beverage" />
              <Checkbox label="Art and culture" />
              <Checkbox label="Digital technology" />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Publish status</h4>
              <Checkbox label="Published" />
              <Checkbox label="On draft" />
            </div>
            <div className="flex gap-3">
              <button className="bg-yellow-400 px-4 py-2 rounded">2 results</button>
              <button className="border px-4 py-2 rounded text-purple-600">Clear</button>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}

// Pitch card
function PitchCard({ id, status }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            status === "published"
              ? "bg-green-600 text-white"
              : "bg-orange-400 text-white"
          }`}
        >
          {status === "published" ? "Published" : "On draft"}
        </span>
        <Link href={`/your-pitch/detail/${id}`} passHref>
          <FaExternalLinkAlt className="text-purple-600 cursor-pointer hover:scale-110 transition" />
        </Link>
      </div>
      <h3 className="font-bold text-md mb-1">Nama Ide Bisnis</h3>
      <div className="flex gap-2 mb-2 flex-wrap">
        <span className="bg-gray-200 text-sm px-2 py-1 rounded-full"># Food and beverage</span>
        <span className="bg-gray-200 text-sm px-2 py-1 rounded-full"># Ongoing</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        Deskripsi singkat mengenai ide bisnis yang dipitch...
      </p>
      <div className="flex gap-2 flex-wrap">
        <button
          className="bg-yellow-400 px-4 py-1 rounded flex items-center gap-1 text-sm"
          onClick={() => alert("Update pitch")}
        >
          <MdUpdate />
          Update
        </button>
        {status === "published" && (
          <button
            className="border border-red-400 text-red-500 px-3 py-1 rounded flex items-center gap-1 text-sm"
            onClick={() => alert("Unpublish pitch")}
          >
            <MdOutlineUnpublished />
            Unpublish
          </button>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-2 italic">Last updated: 12-05-2024</p>
    </div>
  );
}

// Overlay wrapper
function Overlay({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="absolute inset-0 overflow-auto">{children}</div>
      <div className="absolute top-0 right-0 m-4">
        <button onClick={onClose} className="text-white text-2xl">
          <IoClose />
        </button>
      </div>
    </div>
  );
}

// Reusable Panel Header
function HeaderPanel({ title, onClose }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold">{title}</h3>
      <button onClick={onClose}>
        <IoClose size={22} />
      </button>
    </div>
  );
}

// Reusable Checkbox
function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-2 text-sm mb-2 cursor-pointer">
      <input type="checkbox" className="accent-yellow-500" />
      {label}
    </label>
  );
}

// Reusable Radio
function RadioOption({ name, label }) {
  return (
    <label className="flex items-center gap-2 text-sm mb-2 cursor-pointer">
      <input type="radio" name={name} className="accent-yellow-500" />
      {label}
    </label>
  );
}
