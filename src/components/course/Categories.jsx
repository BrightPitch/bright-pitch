"use client";

import { useCourses } from "@/hooks/useCourse";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const { courses: categories, loading } = useCourses();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-md text-blue-900">Categories</h2>
        <span className="text-sm text-red-500">View all</span>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto">
          {categories.map((cat, i) => (
            <Link href={`/courseList/${cat.id}`} key={i}>
              <div key={i} className="flex-shrink-0 w-20 text-center">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-1"
                />
                <span className="text-xs">{cat.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
