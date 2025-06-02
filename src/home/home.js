import React from "react";


function HomeComponent() {
   return (
       <div className="text-start">
           <div className="d-flex flex-column flex-md-row">
               <img style={{height: 200, width: 200}} alt="profile" className="align-self-center align-self-md-start rounded-circle" src="images/profile.jpeg"/>
               <div className="d-flex flex-column ms-0 ms-md-3 me-0 me-md-3 mb-md-3 mt-5">
                   <span className="mb-3"><b>Hello! I'm John. I'm a software engineer based in Massachusetts. </b></span>
                   <span className=""> I’m currently a software engineer at Woods Hole Oceanographic Institution, where I build software and machine learning solutions for ocean science.  </span>
               </div>
           </div>
           <div className="d-flex flex-column mt-3">
               <span className="mb-3">I'm passionate about building reliable, scalable software infrastructure around machine learning and computer vision applications. Throughout my career, I've engineered and deployed machine learning systems across diverse industries, including oceanography, robotics, insurance, and defense. </span>
               <span className="mb-3">Outside of software, I enjoy weightlifting, hiking, biking, and learning as much as I can about the world. </span>
               <h4 className="">Currently </h4>
               <ul>
                   <li className="mb-2"><span>Developing machine learning and embedded systems solutions for ocean science at <a href="https://www.whoi.edu/">Woods Hole Oceanographic Institution</a> </span></li>
                  
               </ul>
               <h4 className="">Previously </h4>
               <ul>
                   <li className="mb-2"><span>Completed my Master's in Computer Science at Northeastern University! </span></li>
                   <li className="mb-2"><span>Developing software to advance knowledge of the ocean as a Guest Student at Woods Hole Oceanographic Institution's <a href="https://warp.whoi.edu/">WARPLab</a></span></li>
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
