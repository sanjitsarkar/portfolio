const initBlogPost = async()=>{
    const id = window.location.search.split('=')[1]
    const blogs = await (await fetch("../data/blogs.json")).json()
    const curBlog = blogs[id]
    const blog = document.querySelector('.blog_card')
    const title = blog.querySelector('h1.title_secondary')
    const cover_img = blog.querySelector('.cover_img')
    const published_date = blog.querySelector('h4.published_date')
    const desc =  blog.querySelector('p.desc')
    title.textContent = curBlog.title
    published_date.textContent = curBlog.publishedDate
    desc.innerHTML = curBlog.blogDesc
}

initBlogPost()