"use client";

import { useCourses } from "@/hooks/useCourse";
import Image from "next/image";
import Link from "next/link";

export default function PopularCourse() {
  const { courses, loading } = useCourses();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-md text-blue-900">Popular</h2>
        <span className="text-sm text-red-500">View all</span>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {courses.map((item, i) => (
            <Link href={`/courseList/${item.id}`} key={i}>
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={100}
                  className="w-full h-28 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 p-2 text-white flex flex-col justify-end">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <div className="flex items-center gap-1 text-xs mt-1">
                    <Image
                      src={item.avatar}
                      alt={item.teacher}
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{item.teacher}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
