import Header from "./Components/Header/Header";
import GlobalStyle from "./globalStyle";
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />    
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
