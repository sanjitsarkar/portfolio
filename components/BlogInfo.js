const BlogInfo = ({ blog }) => {
  blog = blog.data();
  const date = new Date(blog.publishedDate.seconds * 1000);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="blog_post_card card">
      <h1 className="title_secondary">{blog.title}</h1>
      <div className="cover_img"></div>
      <h4 className="published_date">
        {month}, {year}
      </h4>
      <section
        style={{ color: "gray" }}
        className="desc"
        dangerouslySetInnerHTML={{ __html: blog.desc }}
      ></section>
    </div>
  );
};

export default BlogInfo;
