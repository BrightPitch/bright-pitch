import IdeaCard from "@/components/explore/IdeaCard";
import BottomNav from "@/components/ui/BottomNav";
import { Filter, Menu } from "lucide-react";

const index = () => {
  const ideas = [
    {
      title: "Nama Ide Bisnis",
      description:
        "Deskripsi singkat mengenai ide bisnis yang dipitch. By default, akan menggunakan sepotong bagian Solution. Jika konten bagian Solusi terlalu panjang, maka gini...",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-400 p-4 flex justify-between items-center shadow">
        <h1 className="text-black font-bold text-lg">Explore Ideas</h1>
        <div className="flex items-center gap-3">
          <Menu size={20} />
        </div>
      </div>

      {/* List of Ideas */}
      <div className="p-4">
        <div className=" relative flex justify-center items-center gap-2 mb-4">
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
