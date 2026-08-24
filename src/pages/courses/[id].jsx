"use client";

import Header from "@/components/layout/Header";
import { useCourseById } from "@/hooks/useCourse";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";


const CourseDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const { course, loading } = useCourseById(id);

  if (loading || !course) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header title="Course Detail" />

      {/* Title */}
      <div className="flex flex-col">
        <h2 className="font-bold px-4 mt-4 mb-2">
          {course?.title || "Course Title"}
        </h2>
        <div className="h-1 bg-accent mx-4 my-1 rounded-full" />
      </div>

      {/* Course Image with Play Button */}
      <div className="relative px-4 my-8">
        <Image
          src={course?.image || "/placeholder.jpg"}
          alt={course?.title}
          width={600}
          height={300}
          className="rounded-lg w-full object-cover "
        />
      </div>

      {/* Description */}
      <div className="px-4">
        <div className="border border-accent rounded-lg p-4">
          <p>
            {course?.overview || "No description available."}
          </p>
        </div>
      </div>

      {/* Join Button */}
      <div className="mt-auto p-4">
        <button className="w-full bg-primary font-bold rounded-full gap-4">
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
