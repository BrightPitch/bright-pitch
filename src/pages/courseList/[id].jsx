"use client";

import Header from "@/components/ui/Header";
import { useCourseById } from "@/hooks/useCourse";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { ArrowLeft } from "lucide-react";

const CourseDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const { course, loading } = useCourseById(id);

  if (loading || !course) {
    return <div className="p-4">Loading...</div>;
  }


  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header title="Course Detail" />

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-700 px-4 mt-3 py-2">
        <ArrowLeft/>
        <span>Back</span>
      </button>

      {/* Title */}
      <h2 className="text-xl font-bold px-4 mt-3">
        {course?.title || "Course Title"}
      </h2>
      <div className="h-1 w-24 bg-pink-500 mx-4 my-1 rounded-full" />

      {/* Course Image with Play Button */}
      <div className="relative px-4 mt-2">
        <Image
          src={course?.image || "/placeholder.jpg"}
          alt={course?.title}
          width={600}
          height={300}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-4 mt-6">
        <div className="border border-pink-400 rounded-lg p-4 bg-gray-100 text-sm text-gray-800">
          {course?.overview || "No description available."}
        </div>
      </div>

      {/* Join Button */}
      <div className="mt-auto p-4">
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2">
          JOIN COURSE
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
