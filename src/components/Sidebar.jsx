// src/components/Sidebar.jsx
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Sidebar Content */}
      <aside className="absolute right-0 top-0 h-full w-64 bg-white p-4 shadow-lg z-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} aria-label="Close Sidebar">
            <IoClose size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 text-gray-800">
          <Link href="/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link href="/profile" className="block hover:underline">
            Profile
          </Link>

          <h3 className="font-bold text-sm mt-4 text-gray-500 uppercase">BrightPitch - Stage</h3>
          <Link href="/manage-posts" className="block hover:underline">
            Manage Posts
          </Link>
          <Link href="/bookmarks" className="block hover:underline">
            Bookmarks
          </Link>

          <h3 className="font-bold text-sm mt-4 text-gray-500 uppercase">BrightPitch - Academy</h3>
          <Link href="/courses" className="block hover:underline">
            Your Courses
          </Link>
          <Link href="/mentoring" className="block hover:underline">
            Mentoring
          </Link>
        </nav>
      </aside>
    </div>
  );
}
