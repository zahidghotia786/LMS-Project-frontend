import CourseCard from "../courses/CourseCard";

const DraftContent = ({ courses , instructor , role }) => {
  return courses?.map((course, idx) => (
    <CourseCard key={idx} course={course} instructor={instructor} role={role} type={"primary"} />
  ));
};

export default DraftContent;
