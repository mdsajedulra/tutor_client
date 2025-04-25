import BlogDetails from "@/components/sheared/blog/BlogDetails";

export const metadata = {
    title: "Blog Page",
    description: "This is blog page details"
}
const BlogPage = async () => {
    const res = await fetch('http://localhost:3000/api/blogs');
    const data = await res.json();
    console.log(data);

    
    return (
        <div>
            <BlogDetails data={data}></BlogDetails>
        </div>
    );
};

export default BlogPage;