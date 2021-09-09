import Link from 'next/link'
const Header = () => {
    return (
        <header className="header">
        <img className="menu " src="/img/icons/menu.svg"/>
        <img className="close hide" src="/img/icons/close.svg"/>
<h1 className="title_secondary"><Link href="/">Sanjit Sarkar</Link></h1>
        <nav className="right">
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
        </ul>
        
        </nav>

    </header>
    );
}

export default Header;