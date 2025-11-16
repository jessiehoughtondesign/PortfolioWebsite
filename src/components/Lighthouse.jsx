import React from "react";
import "./Lighthouse.css";

const BASE_URL = import.meta.env.BASE_URL;

const Lighthouse = () => {
const handleMouseMove = (event) => {
    const triangle = document.querySelector(".triangle");
    if (!triangle) return;

    const rect = triangle.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rad = Math.atan2(event.pageX - x, event.pageY - y);
    const rot = (rad * (180 / Math.PI) * -1);

    triangle.style.transform = `rotate(${rot}deg)`;
    triangle.style.transformOrigin = "top";
};

React.useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove);
    return () => document.body.removeEventListener("mousemove", handleMouseMove);
}, []);

return (
    <div className="lighthouse-bg" onMouseMove={handleMouseMove}>
        <div className="container-fluid lighthouse-welcome" id="welcome_page">
            <div className="row mb-3">               
                <div className="col-12 order-sm-1 mt-4">
                    <div className="circle-container">
                        <a href="#galleries_page">
                            <div className="circle-size circle-position navigation_circles deg210 circle_right">
                                <h3>Latest Project</h3>
                            </div>
                        </a>
                        <a href="#galleries_page">
                            <div className="circle-size circle-position navigation_circles deg240 circle_left">
                                <h3>Galleries</h3>
                            </div>
                        </a>
                        <a href="#about_page">
                            <div className="circle-size circle-position navigation_circles deg300 circle_right">
                                <h3>About</h3>
                            </div>
                        </a>
                        <a href="#contact_page">
                            <div className="circle-size circle-position navigation_circles deg330 circle_left">
                                <h3>Contact</h3>
                            </div>
                        </a>
                        <div className="circle-size circle-position deg270">
                            <picture>
                                <source media="(min-width:480px)" srcSet="/Logo/logo@2x.png" />
                                <img alt="logo image" src={BASE_URL + "Logo/logo.png"} width={200} className="home_icon" />
                            </picture>
                        </div>
                        <div className="circle-position d-none d-sm-inline">
                            <div className="circle-size">
                                <img alt="logo" src={BASE_URL + "Logo/light_house.svg"} />
                            </div>
                            <div className="triangle"></div>
                        </div>
                    </div>
                </div>
                 <div className="col-sm-12 order-sm-11">
                    <div className="circle-size"></div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Lighthouse;
