import React from "react";
import useWindowWidth from "./useWindowWidth";

const Nav = () => {
    const width = useWindowWidth(920);

    return (
        <>
            {width ? 
            <>
                <div className="nav-container">
                    <div className="nav-container-2">
                        <div className="nav-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16">
                                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <div className="nav-logo-container">
                                <img alt="RFS Logo" src="/static/media/logoSmall.png" className="nav-logo"></img>
                            </div>
                            RFS Web Design
                        </div>
                        <div className="nav-english">
                            English
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </>
             : 
             
             <div className="nav-container">
                <div className="nav-container-2">
                    <div className="nav-title" onClick={() => {
                        window.location.reload();
                    }}>
                        <div className="nav-logo-container">
                            <img alt="RFS Logo" src="/static/media/logoSmall.png" className="nav-logo"></img>
                        </div>
                        RFS Web Design
                    </div>
                    <div className="center-container">
                        <div className="center-container-item" onClick={() => {
                            window.location.href = "#home";
                        }}>
                            Home
                        </div>
                        <div className="center-container-item" onClick={() => {
                            window.location.href = "#projects";
                        }}>
                            Projects
                        </div>
                        <div className="center-container-item" onClick={() => {
                            window.location.href = "#about";
                        }}>
                            About
                        </div>
                        <div className="center-container-item" onClick={() => {
                            window.location.href = "#contact";
                        }}>
                            Contact
                        </div>
                    </div>
                    <div className="nav-english">
                        English
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                        </svg>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Nav;