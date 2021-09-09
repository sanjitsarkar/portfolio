//Blog
const initBlog = async()=>{
    const blog_list = document.querySelector('.blog_list')
    
    const blogs = await (await fetch("../data/blogs.json")).json()
    blogs.forEach((_blog,i) => {
        const blog  = document.createElement('div')
        blog.classList.add('card','blog_card')
        // blog.style.background = "url('./img/coder.svg')"
        const title = document.createElement('h1')
        title.classList.add('title_secondary')
        const published_date = document.createElement('h4')
        published_date.classList.add('published_date')
        const desc = document.createElement('p')
        desc.classList.add('desc')
        const read_more = document.createElement('a')
        read_more.classList.add('btn','btn_primary','read_more')
        read_more.href = `/blog.html?id=${i}`
        title.textContent = _blog.title
        published_date.textContent = _blog.publishedDate
        desc.innerHTML = _blog.blogDesc.substring(0,250)+'.....'
        read_more.textContent = "Read More"
        blog.appendChild(title)
        blog.appendChild(published_date)
        blog.appendChild(desc)
        blog.appendChild(read_more)
        blog_list.appendChild(blog)
        console.log("Hello")
    
    });
    }
    
    initBlog()
    