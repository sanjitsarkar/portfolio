import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="card" id="footer">
        <h1 className="title_secondary">
            Connect with me on
        </h1>
        <ul>
            <li className="github"><a href="https://github.com/sanjitsarkar">
            <img src="../img/icons/github.svg" alt="" srcSet=""/>
            </a></li>
            <li className="linkedin"><a href="https://www.linkedin.com/in/sanjit-sarkar/" >
                <img src="../img/icons/linkedin.svg" alt="" srcSet=""/>
        
            </a></li>
            <li className="twitter"><a href="https://twitter.com/XanjitXarkar">
                <img src="../img/icons/twitter.svg" alt="" srcSet=""/>
            
            </a></li>
            <li className="codepen">
                <a href="https://codepen.io/sanjitbrwnsmith" >
                <img src="../img/icons/codepen.svg" alt="" srcSet=""/>
            </a></li>
        </ul>
    </footer>
   
    );
}

export default Footer;