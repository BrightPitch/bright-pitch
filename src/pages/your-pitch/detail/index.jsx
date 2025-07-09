import { useRouter } from "next/router";
import { useState } from "react";
import {
  FaRegEdit,
  FaHome,
  FaPlus,
  FaCompass,
  FaBars,
} from "react-icons/fa";
import Sidebar from "../../../components/Sidebar";

export default function IdeaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative pb-24">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <header className="bg-yellow-500 p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">
          Idea Detail {id ? `#${id}` : <span className="italic text-gray-700">...loading</span>}
        </h1>
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-black text-2xl"
        >
          <FaBars />
        </button>
      </header>

      {/* Cover Section */}
      <div className="relative">
        <img
          src="/postImg/jasa.jpg"
          alt="Background"
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-2 left-4 text-white">
          <h2 className="text-xl font-bold">Nama Ide Bisnis</h2>
          <div className="flex items-center space-x-2 mt-1">
            <img
              src="https://i.pravatar.cc/30"
              alt="avatar"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm">Inventor username</span>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="bg-white/80 text-black text-xs px-2 py-1 rounded-full">
              # Food and Beverage
            </span>
            <span className="bg-white/80 text-black text-xs px-2 py-1 rounded-full">
              # Ongoing
            </span>
          </div>
        </div>
        <span className="absolute top-4 right-4 bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
          On Draft
        </span>
      </div>

      {/* Pitch Video */}
      <section className="p-4">
        <h3 className="text-lg font-semibold mb-2">Pitch Video</h3>
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden relative">
          <img
            src="/postImg/Shooting Range.jpg"
            alt="Video thumbnail"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">History</h3>
          <FaRegEdit className="text-purple-700 text-xl cursor-pointer hover:text-purple-900" />
        </div>
        <p className="text-sm text-gray-700 mb-2">
          Bagian ini berisi latar belakang permasalahan dari ide bisnis yang dipresentasikan.
          Di sini, inventor dapat memaparkan penjelasan atas permasalahan apa yang hendak ia selesaikan lewat ide ini.
          Inventor disarankan juga melampirkan data berupa link.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Inventor akan diberi pilihan untuk membuat pitching post secara manual atau cukup upload file PDF.
        </p>

        <h4 className="font-medium mb-1">Referensi:</h4>
        <ol className="list-decimal list-inside text-blue-600 text-sm space-y-1">
          <li>
            <a
              href="https://www.figma.com/design/1xm9vg8kU4vouevps5Hbnk/Startup_BrightPitch?node-id=7-193"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Figma Design - Startup BrightPitch
            </a>
          </li>
          <li>
            <a
              href="https://refactoring.guru/design-patterns/catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Refactoring Guru - Design Patterns
            </a>
          </li>
        </ol>
      </section>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2 text-gray-700 z-10">
        <button className="flex flex-col items-center hover:text-black">
          <FaHome size={20} />
          <span className="text-xs">Dashboard</span>
        </button>
        <button className="flex flex-col items-center hover:text-black">
          <FaPlus size={20} />
          <span className="text-xs">Add Post</span>
        </button>
        <button className="flex flex-col items-center hover:text-black">
          <FaCompass size={20} />
          <span className="text-xs">Explore</span>
        </button>
      </footer>
    </div>
  );
}
