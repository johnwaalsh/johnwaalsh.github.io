import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./nav";
import './App.css';
import HomeComponent from "./home/home";
import Footer from "./footer";
import ProjectsComponent from "./projects/projects";
import BlogComponent from "./blog/blog";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="d-flex justify-content-center">
                <div className="col-7">
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<HomeComponent/>}/>
                        <Route path="/projects" element={<ProjectsComponent/>}/>
                        <Route path="/blog" element={<BlogComponent/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
