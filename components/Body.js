import Link from 'next/link'
const Body = () => {
    return (
        <main>
        <section className="about_section card">
         <div className="left">
         <h1 className="title_primary">
         Sanjit Sarkar
         </h1>
         <p className="title_tertiary">
            I'm a Full Stack Developer with MERN, Android Developer with Flutter and Kotlin.
         </p>
        </div>
        <img src="./img/coder.svg" alt="sanjit sarkar"/>
        </section>
        <section className="technology_section card">
            <h1 className="title_secondary">
                Technolgy that I use for development
            </h1>
            <ul className="tech_list">
                <li><img src="./img/icons/html.svg" className="tech_icon html"/>HTML</li>
                <li><img src="./img/icons/css.svg" className="tech_icon css"/>CSS</li>
                <li><img src="./img/icons/javascript.svg" className="tech_icon javascript"/>Javascript</li>
                <li><img src="./img/icons/nodejs.svg" className="tech_icon nodejs"/>Nodejs</li>
                <li><img src="./img/icons/react.svg" className="tech_icon reactjs"/>Reactjs</li>
                <li><img src="./img/icons/mongodb.svg" className="tech_icon mongodb"/>MongoDB</li>
                <li><img src="./img/icons/express.svg" className="tech_icon expressjs"/>Expressjs</li>
                <li><img src="./img/icons/flutter.svg" className="tech_icon flutter"/>Flutter</li>
                <li><img src="./img/icons/android.svg" className="tech_icon android"/>Android</li>
            </ul>
        </section>
        <div className="row">
        <section className="project_section card">
        <h1 className="title_secondary">
            Projects
        </h1>
        <p className="section_desc">
            I like href showcase my work and thus, you can see my projects hosted online
        </p>
        <div className="btn_white btn color_primary">
        <Link href="/projects">See Projects</Link>
        </div>
        </section>
        <section className="blog_section card">
            <h1 className="title_secondary">
                Blogs
            </h1>
        <p className="section_desc">
            I am also working on some technical and non techincal blogs. I like href document my journey of learning.
        </p>
        <div className="btn_white btn color_violet">
        <Link href="/blogs">See Blogs</Link>
        </div>
        </section>
    </div>
    </main>
    );
}

export default Body;