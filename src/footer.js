import React from "react";

function Footer() {
    return (
        <div className="mt-4 mb-2">
            <hr/>
            <a className="footer-icon" href="mailto:johnwalsh7412@gmail.com"><i style={{fontSize: 50}} className="m-3 bi bi-envelope-fill"></i></a>
            <a className="footer-icon" href="https://github.com/johnwaalsh"><i style={{fontSize: 50}} className="m-3 bi bi-github"></i></a>
            <a className="footer-icon" href="https://www.linkedin.com/in/johnwalsh01" ><i style={{fontSize: 50}} className="m-3 bi bi-linkedin"></i></a>
        </div>
    )
}

export default Footer;