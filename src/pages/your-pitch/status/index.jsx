import { useState } from "react";
import {
  FaBars,
  FaCheck,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Sidebar from "../../../components/Sidebar";

export default function PitchEditorStatus() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pitchTitle = "Nama Ide Bisnis";

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24 relative">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center border-b border-yellow-700">
        <h1 className="text-lg font-bold">Pitch Editor</h1>
        <button
          className="text-black text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
      </header>

      {/* Title & Tabs */}
      <section className="p-4 border-b">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <img src="/favicon.ico" alt="icon" className="w-4 h-4" />
            {pitchTitle}
          </h2>
          <FiExternalLink className="text-purple-600 text-xl cursor-pointer hover:scale-110 transition" />
        </div>
        <div className="flex space-x-6 border-b text-sm font-medium mt-2">
          <span className="pb-2 border-b-2 border-black cursor-pointer">Status</span>
          <span className="pb-2 text-gray-400 border-b-2 border-transparent cursor-not-allowed">
            Content
          </span>
        </div>
      </section>

      {/* Completion Check */}
      <section className="p-4">
        <h3 className="font-semibold text-lg mb-2">Completion Check</h3>
        <p className="text-sm text-gray-500 italic mb-3">
          Every section below is <b>optional</b>. You can publish the post even
          if some parts are incomplete — though not recommended.
        </p>
        <ul className="space-y-2 text-sm">
          <ChecklistItem checked label="Pitch video" />
          <ChecklistItem label="History still empty" />
          <ChecklistItem label="Solution still empty" />
          <ChecklistItem checked label="Call to Action" />
          <ChecklistItem label="No documentation added" />
        </ul>
      </section>

      {/* Publication Control */}
      <section className="p-4">
        <h3 className="font-semibold text-lg mb-2">Publication</h3>
        <p className="text-sm text-gray-500 mb-1">
          Manage visibility of this post to others.
        </p>
        <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300">
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </section>

      {/* Danger Zone */}
      <section className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-red-600">Danger Zone</h3>
        <p className="text-sm text-gray-500 italic mb-3">
          Deletion is permanent. Proceed with caution.
        </p>
        <button
          onClick={() => setIsDeleteOpen(true)}
          className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 font-semibold hover:bg-red-600 transition"
        >
          <MdDelete />
          Delete this post
        </button>
      </section>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-around text-sm text-gray-700 z-10">
        <button
          className="flex flex-col items-center hover:text-black"
          onClick={() => alert("Go to Add Post")}
        >
          <FaPlus size={20} />
          Add Post
        </button>
        <button
          className="flex flex-col items-center hover:text-black"
          onClick={() => alert("Go to Dashboard")}
        >
          <FaBars size={20} />
          Dashboard
        </button>
        <button
          className="flex flex-col items-center hover:text-black"
          onClick={() => alert("Go to Explore")}
        >
          <FaTimes size={20} />
          Explore
        </button>
      </footer>

      {/* Delete Confirmation Modal */}
      {isDeleteOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold text-red-600 flex gap-2 items-center">
                ⚠️ Attention required!
              </h2>
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="text-gray-500 text-lg font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-sm mb-2 text-gray-700">
              <b>This action cannot be undone.</b> Proceed with caution.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Title: <b>{pitchTitle}</b>
            </p>
            <input
              type="text"
              placeholder="Retype the title here"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <div className="flex justify-between items-center">
              <button
                disabled={confirmInput !== pitchTitle}
                className={`px-4 py-2 rounded font-semibold transition ${
                  confirmInput === pitchTitle
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-red-300 text-white cursor-not-allowed"
                }`}
              >
                Delete this post
              </button>
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="bg-gray-200 px-4 py-2 rounded font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Checklist item component
function ChecklistItem({ label, checked }) {
  return (
    <li className="flex items-center gap-2">
      {checked ? (
        <FaCheck className="text-green-600" />
      ) : (
        <FaTimes className="text-red-600" />
      )}
      <span>{label}</span>
    </li>
  );
}
