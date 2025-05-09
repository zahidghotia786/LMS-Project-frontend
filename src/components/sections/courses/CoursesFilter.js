"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import FilterController from "@/components/shared/courses/FilterController";
import HeadingPrimaryXl from "@/components/shared/headings/HeadingPrimaryXl ";
import SectionName from "@/components/shared/section-names/SectionName";
import FilterControllerWrapper from "@/components/shared/wrappers/FilterControllerWrapper";
import FilterCards from "@/components/shared/courses/FilterCards";

const CoursesFilter = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/allcourses`);
        setCourses(res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch courses", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter(course => course.category?.toLowerCase() === selectedCategory);

  return (
    <section>
      <div className="h-[900px] pt-50px pb-10 md:pt-70px md:pb-50px lg:pt-20 2xl:pt-100px 2xl:pb-70px bg-whiteColor dark:bg-whiteColor-dark overflow-hidden">
        <div className="filter-container container">
          <div className="flex gap-15px lg:gap-30px flex-wrap lg:flex-nowrap items-center">
            {/* courses Left */}
            <div className="basis-full lg:basis-[500px]" data-aos="fade-up">
              <SectionName>Course List</SectionName>
              <HeadingPrimaryXl>
                Perfect Online <br className="hidden lg:block" /> Course For
                Your Career
              </HeadingPrimaryXl>
            </div>

            {/* courses right */}
            <FilterControllerWrapper>
              <FilterController setSelectedCategory={setSelectedCategory} />
            </FilterControllerWrapper>
          </div>

          {/* Course Cards */}
          <FilterCards courses={filteredCourses} loading={loading} />
        </div>
      </div>
    </section>
  );
};

export default CoursesFilter;
