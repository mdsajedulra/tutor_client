import BlogDetails from "@/components/sheared/blog/BlogDetails";

export const metadata = {
  title: "Blog Page",
  description: "This is blog page details",
};
const BlogHome = async () => {
  const data = [
    {
      id: 1,
      category: "Educational Tips",
      title: "5 Effective Study Techniques for Exams",
      excerpt:
        "Discover proven methods to enhance your study sessions and improve retention through active recall and spaced repetition.",
      date: "2024-03-15",
    },
    {
      id: 2,
      category: "Platform Updates",
      title: "New Collaborative Features Added",
      excerpt:
        "Learn about our latest real-time collaboration tools and enhanced whiteboard capabilities for group learning.",
      date: "2024-03-14",
    },
    {
      id: 3,
      category: "Industry News",
      title: "Global Shift Towards Hybrid Learning Models",
      excerpt:
        "Analysis of how educational institutions worldwide are adapting to blended online/in-person teaching approaches.",
      date: "2024-03-12",
    },
  ];

  return (
    <div>
      <BlogDetails data={data}></BlogDetails>
    </div>
  );
};

export default BlogHome;
