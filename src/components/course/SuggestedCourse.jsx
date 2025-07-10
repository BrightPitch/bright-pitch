"use client";

import { useCourses } from "@/hooks/useCourse";
import Image from "next/image";
import Link from "next/link";

export default function SuggestedCourse() {
  const { courses, loading } = useCourses();

  return (
    <div className="p-4">
      <h2 className="font-semibold text-md mb-3 text-blue-900">
        Suggested for you
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {courses.map((course, i) => (
            <Link href={`/courseList/${course.id}`} key={i}>
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={100}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {course.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
