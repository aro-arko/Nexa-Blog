import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  //   console.log(blogId);

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  console.log(blog);
  return (
    <div className="my-10">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
