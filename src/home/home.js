import React from "react";

function HomeComponent() {
    return (
        <div className="text-start">
            <div className="d-flex">
                <img style={{height: 200}} alt="profile" className="rounded-circle" src="images/profile.png"/>
                <div className="d-flex flex-column m-3 mt-5">
                    <span className="mb-3">Hello! I'm John. I'm currently a graduate student at Northeastern University studying Computer Science.</span>
                    <span className="mb-3">I recently graduated from Northeastern University with a Bachelor's in Computer Science concentrating in Artificial Intelligence.</span>
                </div>
            </div>
            <div className="d-flex flex-column mt-3">
                <span className="mb-3">I'm interested in software development, machine learning, and computer vision. In particular, I'm passionate about building software to bring artificial intelligence to new real-world domains.</span>
                <span className="">When I'm not working, I enjoy weightlifting, hiking, biking, and learning as much as I can about the world. </span>
            </div>
        </div>
    );
}
export default HomeComponent;