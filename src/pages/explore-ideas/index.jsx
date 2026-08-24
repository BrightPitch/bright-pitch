import IdeaCard from "@/components/pitch/IdeaCard";
import BottomNav from "@/components/layout/BottomNav";
import { Filter } from "lucide-react";
import Header from "@/components/layout/Header";
import { FaSort } from "react-icons/fa";

const index = () => {
  const ideas = [
    {
      title: "Nama Ide Bisnis",
      description:
        "Deskripsi singkat mengenai ide bisnis yang dipitch. By default, akan menggunakan sepotong bagian Solution. Jika konten bagian Solusi terlalu panjang, maka gini...",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      title: "Nama Ide Bisnis",
      description:
        "Deskripsi singkat mengenai ide bisnis yang dipitch. By default, akan menggunakan sepotong bagian Solution. Jika konten bagian Solusi terlalu panjang, maka gini...",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <Header title={"Explore Ideas"}></Header>
      {/* List of Ideas */}

      <div className="relative z-10 p-4">
        <div className="w-full mb-4 flex justify-around items-center gap-2">
          <Filter size={32} />
          <input
            type="text"
            className="w-full"
            placeholder="Search pitches"
          />
          <button onClick={() => setShowSort(true)} className="text-xl">
            <FaSort />
          </button>
        </div>
        {ideas.map((idea, index) => (
          <IdeaCard
            key={index}
            title={idea.title}
            description={idea.description}
            image={idea.image}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default index;
