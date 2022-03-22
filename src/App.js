import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import GlobalStyle from "./globalStyle";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/AboutPage"
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />    
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
