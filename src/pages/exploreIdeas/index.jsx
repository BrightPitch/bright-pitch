import IdeaCard from "@/components/explore/IdeaCard";
import BottomNav from "@/components/ui/BottomNav";
import NavigationPanel from "@/components/ui/NavigationPanel";
import { Filter } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";

const index = () => {
  const ideas = [
    {
      title: "Nama Ide Bisnis",
      description:
        "Deskripsi singkat mengenai ide bisnis yang dipitch. By default, akan menggunakan sepotong bagian Solution. Jika konten bagian Solusi terlalu panjang, maka gini...",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <Header title={"Explore Ideas"} toggleSidebar={() => setShowSidebar(true)}></Header>

      {/* List of Ideas */}
      {
        showSidebar 
        ? <NavigationPanel closeAction={() => setShowSidebar(false)} />
        : null 
      }

      <div className="relative z-10 p-4">
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
