// /src/pages/your-pitch/edit/[id].jsx

import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Header from "@/components/Header";
import NavigationPanel from "@/components/ui/NavigationPanel";

export default function PitchEditor() {
  const router = useRouter();
  const { id } = router.query;
  const [showSidebar, setShowSidebar] = useState(false);
  const [ideaName, setIdeaName] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-24">
      {/* Sidebar */}
                        <Header title={"Edit Pitch"} toggleSidebar={() => setShowSidebar(true)}></Header>
                        
                              {/* List of Ideas */}
                              {
                                showSidebar 
                                ? <NavigationPanel closeAction={() => setShowSidebar(false)} />
                                : null 
                              }

      {/* Title Section */}
      <section className="p-4 border-b">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <img src="/favicon.ico" alt="icon" className="w-4 h-4" />
            Pitch ID: {id || <span className="italic text-gray-400">...loading</span>}
          </h2>
          <FiExternalLink className="text-purple-600 text-xl cursor-pointer hover:text-purple-800" />
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b text-sm font-medium mt-2">
          <span className="pb-2 border-b-2 border-transparent text-gray-400">Status</span>
          <span className="pb-2 border-b-2 border-black">Content</span>
        </div>
      </section>

      {/* Cover Section */}
      <section className="relative text-white">
        <img
          src="/postImg/jasa.jpg"
          alt="background"
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-4 space-y-1">
          <input
            type="text"
            placeholder="Type your idea name here..."
            value={ideaName}
            onChange={(e) => setIdeaName(e.target.value)}
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
          <button className="bg-white text-black text-xs px-3 py-1 rounded-full w-max mt-1 hover:bg-gray-200">
            + Add tag
          </button>
        </div>
      </section>

      {/* Section Editors */}
      <section className="p-4 space-y-6">
        {[
          { title: "Pitch video", button: "Add Video" },
          { title: "History", button: "Add History" },
          { title: "Solution", button: "Add Solution" },
          { title: "Call To Action", button: "Add Call To Action" },
          { title: "Documentation", button: "Add Documentation" },
        ].map(({ title, button }) => (
          <div key={title}>
            <h3 className="font-medium border-b pb-1 mb-2">{title}</h3>
            <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300">
              <FaPlus />
              {button}
            </button>
          </div>
        ))}
      </section>

      {/* Bottom Buttons */}
      <footer className="fixed bottom-0 w-full bg-white border-t p-3 flex justify-between gap-3 z-20">
        <button
          className="bg-yellow-500 text-black flex-1 py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-yellow-400"
          disabled={!id}
        >
          <FaSave />
          SAVE
        </button>
        <button
          className="bg-red-500 text-white flex-1 py-2 rounded font-semibold flex items-center justify-center gap-2 hover:bg-red-600"
        >
          <FaTrash />
          DISCARD
        </button>
      </footer>
    </div>
  );
}
