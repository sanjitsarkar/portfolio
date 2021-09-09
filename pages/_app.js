import "../styles/style.css";
// import '../styles/blog.css';
import "../firebase/firebase";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://sanjitsarkar.tk/" />
    <link rel="canonical" href="https://sanjitsarkar.vercel.app/" />
    <meta name="keywords" content="sanjit sarkar, portfolio, nodejs, fullstack,frontend, backend,india,assam,bvec,cse"/>
    <meta name="author" content="Sanjit Sarkar"/>
    <meta
    title="Sanjit Sarkar"
      name="description"
      content="It's a portfolio site for Sanjit Sarkar"
    
      />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
