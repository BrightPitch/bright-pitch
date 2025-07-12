// src/pages/your-pitch/editPost/[id].jsx

import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaSave, FaTrash } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Sidebar from "../../../components/Sidebar";

export default function PitchEditorEdit() {
  const router = useRouter();
  const { id } = router.query;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pitchVideo, setPitchVideo] = useState("https://www.youtube.com/watch?v=lEy2x8ABB...");
  const [historyType, setHistoryType] = useState("Link");
  const [historyContent, setHistoryContent] = useState("https://www.youtube.com/watch?v=lEy2x8ABB...");
  const [solutionType, setSolutionType] = useState("Text");
  const [solutionContent, setSolutionContent] = useState("The content goes here...");

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center border-b border-yellow-700">
        <h1 className="text-lg font-bold">Edit Post: {id || "Loading..."}</h1>
        <button className="text-black text-2xl" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
      </header>

      {/* Title */}
      <section className="p-4 border-b">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <img src="/favicon.ico" alt="icon" className="w-4 h-4" />
            Nama Ide Bisnis
          </h2>
          <FiExternalLink className="text-purple-600 text-xl cursor-pointer hover:text-purple-800" />
        </div>
        <div className="flex space-x-4 border-b text-sm font-medium mt-2">
          <span className="pb-2 border-b-2 border-transparent text-gray-400">Status</span>
          <span className="pb-2 border-b-2 border-purple-600 text-purple-600">Content</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative text-white">
        <img
          src="/postImg/jasa.jpg"
          alt="background"
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-4 space-y-2">
          <input
            type="text"
            value="Nama Ide Bisnis"
            readOnly
            className="text-lg font-semibold bg-transparent border-none focus:outline-none placeholder-white"
          />
          <div className="flex items-center space-x-2 text-sm">
            <img
              src="https://i.pravatar.cc/28"
              alt="avatar"
              className="w-6 h-6 rounded-full"
            />
            <span>Inventor username</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-white text-black text-xs px-3 py-1 rounded-full hover:bg-gray-100">
              + Add tag
            </button>
            <span className="bg-gray-300 text-black text-xs px-3 py-1 rounded-full"># Food and beverage</span>
            <span className="bg-gray-300 text-black text-xs px-3 py-1 rounded-full"># Ongoing</span>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="p-4 space-y-6">
        {/* Pitch Video */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-lg">Pitch Video</h3>
            <button
              onClick={() => setPitchVideo("")}
              disabled={!pitchVideo}
              className="hover:text-red-600"
            >
              <RiDeleteBinLine className="text-red-500 text-xl" />
            </button>
          </div>
          <label className="text-sm text-gray-700">Video Link:</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mt-1"
            placeholder="https://youtube.com/..."
            value={pitchVideo}
            onChange={(e) => setPitchVideo(e.target.value)}
          />
        </div>

        {/* History */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-lg">History</h3>
            <button
              onClick={() => setHistoryContent("")}
              disabled={!historyContent}
              className="hover:text-red-600"
            >
              <RiDeleteBinLine className="text-red-500 text-xl" />
            </button>
          </div>
          <label className="text-sm text-gray-700">Type:</label>
          <select
            className="w-full border px-3 py-2 rounded mt-1"
            value={historyType}
            onChange={(e) => setHistoryType(e.target.value)}
          >
            <option value="Link">Link</option>
            <option value="Text">Text</option>
          </select>
          <label className="text-sm text-gray-700 mt-3 block">
            {historyType === "Link" ? "Video Link:" : "Text Description:"}
          </label>
          {historyType === "Link" ? (
            <input
              type="text"
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="https://example.com/video"
              value={historyContent}
              onChange={(e) => setHistoryContent(e.target.value)}
            />
          ) : (
            <textarea
              className="w-full border px-3 py-2 rounded mt-1"
              rows={4}
              placeholder="Explain the background history..."
              value={historyContent}
              onChange={(e) => setHistoryContent(e.target.value)}
            />
          )}
        </div>

        {/* Solution */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-lg">Solution</h3>
            <button
              onClick={() => setSolutionContent("")}
              disabled={!solutionContent}
              className="hover:text-red-600"
            >
              <RiDeleteBinLine className="text-red-500 text-xl" />
            </button>
          </div>
          <label className="text-sm text-gray-700">Type:</label>
          <select
            className="w-full border px-3 py-2 rounded mt-1"
            value={solutionType}
            onChange={(e) => setSolutionType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Link">Link</option>
          </select>
          {solutionType === "Text" ? (
            <textarea
              rows={4}
              className="w-full border px-3 py-2 rounded mt-2"
              placeholder="Describe your solution..."
              value={solutionContent}
              onChange={(e) => setSolutionContent(e.target.value)}
            />
          ) : (
            <input
              type="text"
              className="w-full border px-3 py-2 rounded mt-2"
              placeholder="Paste solution link"
              value={solutionContent}
              onChange={(e) => setSolutionContent(e.target.value)}
            />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-between gap-3 z-10">
        <button className="bg-yellow-500 text-black flex-1 py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400">
          <FaSave />
          SAVE
        </button>
        <button className="bg-red-500 text-white flex-1 py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-red-600">
          <FaTrash />
          DISCARD
        </button>
      </footer>
    </div>
  );
}
