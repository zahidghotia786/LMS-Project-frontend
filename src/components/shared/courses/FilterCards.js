import CourseCard from "./CourseCard";

const FilterCards = ({ courses }) => {

  return (
    <div
      className={` filter-contents flex flex-wrap sm:-mx-15px box-content mt-7 lg:mt-25px`}
      data-aos="fade-up"
    >
      {courses?.length ? (
        courses.slice(0, 6).map((course, idx) => (
          <CourseCard key={idx} idx={idx} course={course} />
        ))
      ) : (
        <span>No courses found.</span>
      )}
    </div>
  );
};

export default FilterCards;
