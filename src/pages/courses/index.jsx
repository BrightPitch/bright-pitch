import Categories from "@/components/course/Categories";
import PopularCourse from "@/components/course/PopularCourse";
import SearchBar from "@/components/course/SearchBar";
import SuggestedCourse from "@/components/course/SuggestedCourse";
import BottomNav from "@/components/layout/BottomNav";
import Header from "@/components/layout/Header";

const index = () => {

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header title={"Explore Ideas"}></Header>
      
      <SearchBar />
      <SuggestedCourse />
      <PopularCourse />
      <Categories />
      <BottomNav />
    </div>
  );
};

export default index;
