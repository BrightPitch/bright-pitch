import Categories from "@/components/course/Categories";
import PopularCourse from "@/components/course/PopularCourse";
import SearchBar from "@/components/course/SearchBar";
import SuggestedCourse from "@/components/course/SuggestedCourse";
import BottomNav from "@/components/ui/BottomNav";
import Header from "@/components/ui/Header";

const index = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header title={"Course List"} />
      <SearchBar />
      <SuggestedCourse />
      <PopularCourse />
      <Categories />
      <BottomNav />
    </div>
  );
};

export default index;
