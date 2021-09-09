
const BlogInfo = ({blog}) => {
    return (
        <div className="blog_post_card card" >
        <h1 className="title_secondary" >
            {blog.title}
        </h1>
        <div className="cover_img" ></div>
        <h4 className="published_date" >{blog.publishedDate}</h4>
        <p className="desc" >
       {blog.blogDesc}
        </p>
      </div>
    );
}

export default BlogInfo;