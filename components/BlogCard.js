import Link from 'next/link'
const BlogCard = ({blog}) => {
    const { id } = blog
    blog = blog.data()
    
  return (
    <div className="card blog_card" key={id}>
      <h1 className="title_secondary">
        {blog.title}
      </h1>
      <h4 className="published_date">{blog.publishedDate}</h4>
      <p className="desc">
        {blog.blogDesc}
      </p>
      <div className="btn btn_primary read_more">
      <Link href={`/blogs/${id}`}>
        Read More
      </Link>
      </div>
    </div>
  );
};

export default BlogCard;
