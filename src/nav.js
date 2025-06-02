import {Link} from "react-router-dom";
import React from "react";

function NavigationBar() {
    return (
            <div>
                <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row mt-3">
                    <Link to="/" className="align-self-start align-self-md-center align-self-lg-center me-auto text-decoration-none text-dark">
                        <div className="d-flex">
                            <h1 className="align-self-center">John Walsh</h1>
                        </div>
                    </Link>
                    {/*<Link to="/projects" className="mb-1 mb-md-0 mb-lg-0 align-self-start align-self-md-center align-self-lg-center me-5 text-decoration-none text-dark">Projects</Link>*/}
                    {/*<Link to="/blog" className="mb-1 mb-md-0 mb-lg-0 align-self-start align-self-md-center align-self-lg-center me-5 text-decoration-none text-dark">Blog</Link>*/}
                    <a href="/assets/jwalsh_resume.pdf" className="nav-item mb-1 mb-md-0 mb-lg-0 align-self-start align-self-md-center align-self-lg-center text-decoration-none">Resume</a>
                </div>
                <hr/>
            </div>
    )
}

export default NavigationBar;