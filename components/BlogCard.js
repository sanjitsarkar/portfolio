import Link from "next/link";
const BlogCard = ({ blog }) => {
  const { id } = blog;
  blog = blog.data();
  const date = new Date(blog.publishedDate.seconds * 1000);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="card blog_card" key={id}>
      <div>
        <span>
          <h1 className="title_secondary">{blog.title}</h1>
          <h4 className="published_date">
            {month}, {year}
          </h4>
        </span>
        <section
          style={{ color: "white" }}
          className="desc"
          dangerouslySetInnerHTML={{ __html: blog.desc }}
        ></section>
      </div>
      {/* <div className="row"> */}
      {/* <div className="btn btn_primary read_more">
          <Link href={`/blogs/${id}`}>Read More</Link>
        </div> */}
      <div className="btn btn_primary read_more">
        <a href={blog.url} target="_blank">
          Read More
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default BlogCard;
