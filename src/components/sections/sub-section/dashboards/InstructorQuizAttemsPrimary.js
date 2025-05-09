import QuizContainers from "@/components/shared/containers/QuizContainers";

const InstructorQuizAttemsPrimary = ({ title , path }) => {
  const allResults = [
    {
      id: 1,
      date: "December 26, 2024",
      title: "Write a on yourself using the 5",
      studentName: "Mice Jerry",
      qus: 4,
      tm: 8,
      ca: 4,
      status: "pass",
    },
    {
      id: 2,
      date: "December 26, 2024",
      title: "Write a on yourself using the 5",
      studentName: "Mice Jerry",
      qus: 4,
      tm: 8,
      ca: 4,
      status: "cancel",
    },
    {
      id: 3,
      date: "December 26, 2024",
      title: "Write a on yourself using the 5",
      studentName: "Mice Jerry",
      qus: 4,
      tm: 8,
      ca: 4,
      status: "time over",
    },
    {
      id: 4,
      date: "December 26, 2024",
      title: "Write a on yourself using the 5",
      studentName: "Mice Jerry",
      qus: 4,
      tm: 8,
      ca: 4,
      status: "processing",
    },
  ];
  return <QuizContainers allResults={allResults} title={title} path={path}/>;
};

export default InstructorQuizAttemsPrimary;
