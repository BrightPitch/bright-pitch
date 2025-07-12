// import { useEffect, useState } from "react";
// import supabase from "@/lib/db";

// export default function useCourses(filter = {}) {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       let query = supabase.from("courses").select("*");

//       // optional filter
//       if (filter.column && filter.value) {
//         query = query.eq(filter.column, filter.value);
//       }

//       const { data, error } = await query;
//       if (error) {
//         console.error("Error fetching courses:", error);
//       } else {
//         setCourses(data);
//       }
//       setLoading(false);
//     };

//     fetchCourses();
//   }, [filter]);

//   return { courses, loading };
// }


import { useEffect, useState } from "react";
import supabase from "@/lib/db";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select("*");
      if (error) {
        console.error("Error fetching courses:", error);
      } else {
        setCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  return { courses, loading };
}

export function useCourseById(id) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching course:", error);
      } else {
        setCourse(data);
      }
      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  return { course, loading };
}