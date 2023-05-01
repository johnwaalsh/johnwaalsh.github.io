import {Link} from "react-router-dom";
import React from "react";

function Footer() {
    return (
        <div>
            <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row mt-3">
                <Link to="/" className="align-self-start align-self-md-center align-self-lg-center me-auto text-decoration-none text-dark">
                    <div className="d-flex">
                        <h1 className="align-self-center">John Walsh</h1>
                    </div>
                </Link>
                <Link to="/search" className="mb-1 mb-md-0 mb-lg-0 align-self-start align-self-md-center align-self-lg-center me-5 text-decoration-none text-dark">Projects</Link>
                <Link to="/search" className="mb-1 mb-md-0 mb-lg-0 align-self-start align-self-md-center align-self-lg-center me-5 text-decoration-none text-dark">Blog</Link>
                <Link to="/search" className="mb-1 mb-md-0 mb-lg-0 align-self-start align-self-md-center align-self-lg-center text-decoration-none text-dark">Resume</Link>
            </div>
            <hr/>
        </div>
    )
}

export default Footer;