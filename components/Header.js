import Link from 'next/link'
const Header = () => {
    return (
        <header className="header">
        <img className="menu " src="./img/icons/menu.svg"/>
        <img className="close hide" src="./img/icons/close.svg"/>
        <a href="/" className="title_secondary">Sanjit Sarkar</a>
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