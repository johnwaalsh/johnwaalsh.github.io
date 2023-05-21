import React from "react";

function HomeComponent() {
    return (
        <div className="text-start">
            <div className="d-flex flex-column flex-md-row">
                <img style={{height: 200, width: 200}} alt="profile" className="align-self-center align-self-md-start rounded-circle" src="images/profile.png"/>
                <div className="d-flex flex-column ms-0 ms-md-3 me-0 me-md-3 mb-md-3 mt-5">
                    <span className="mb-3"><b>Hello! I'm John. I'm a Software Engineer and a graduate student at Northeastern University studying Computer Science. </b></span>
                    <span className="">I recently graduated from Northeastern University with a Bachelor's in Computer Science concentrating in Artificial Intelligence. </span>
                </div>
            </div>
            <div className="d-flex flex-column mt-3">
                <span className="mb-3">I'm interested in software development, machine learning, and computer vision. In particular, I'm passionate about building software to bring artificial intelligence to new domains. </span>
                <span className="mb-3">When I'm not working, I enjoy weightlifting, hiking, biking, and learning as much as I can about the world. </span>
                <h4 className="">Currently </h4>
                <ul>
                    <li className="mb-3"><span>Taking classes for my Master's in Computer Science at Northeastern University </span></li>
                </ul>
                <h4 className="">Previously </h4>
                <ul>
                    <li className="mb-2"><span>Completed my Bachelor's in Computer Science at Northeastern University! </span></li>
                    <li className="mb-2"><span>Built machine learning software for aerospace applications as a Python Software Engineer Co-op at <a href="https://www.morsecorp.com/">MORSE Corp</a> </span></li>
                    <li className="mb-2"><span>Developed computer vision models and image processing algorithms as a Data Science Co-op at Liberty Mutual's <a href="https://www.solarialabs.com/">Solaria Labs</a> </span></li>
                    <li className="mb-2"><span>Created machine learning pipelines for oceanographic data classification as a Software Intern at Woods Hole Oceanographic Institution's <a href="https://warp.whoi.edu/">WARPLab</a> </span></li>
                </ul>
            </div>
        </div>
    );
}
export default HomeComponent;