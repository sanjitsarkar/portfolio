import "../styles/style.css";
// import '../styles/blog.css';
import "../firebase/firebase";
import Footer from "../components/Footer";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <>
   
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
