import Image from 'next/image'
const Footer = () => {
    return (
        <footer className="card" id="footer">
        <h1 className="title_secondary">
            Connect with me on
        </h1>
        <ul>
            <li className="github social"><a rel="noopener noreferrer" href="https://github.com/sanjitsarkar" target="_blank">
            <Image width="40%" height="40%" src="/img/icons/github.svg" alt="" srcSet=""/>
            </a></li>
            <li className="aedin social"><a rel="noopener noreferrer" href="https://www.aedin.com/in/sanjit-sarkar/"  target="_blank">
                <Image width="40%" height="40%" src="/img/icons/aedin.svg" alt="" srcSet=""/>
        
            </a></li>
            <li className="twitter social"><a rel="noopener noreferrer" href="https://twitter.com/XanjitXarkar" target="_blank">
                <Image width="40%" height="40%" src="/img/icons/twitter.svg" alt="" srcSet=""/>
            
            </a></li>
            <li className="codepen social">
                <a rel="noopener noreferrer" href="https://codepen.io/sanjitbrwnsmith"  target="_blank">
                <Image width="40%" height="40%" src="/img/icons/codepen.svg" alt="" srcSet=""/>
            </a></li>
        </ul>
    </footer>
   
    );
}

export default Footer;