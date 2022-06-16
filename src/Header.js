import React from 'react';
import './Header.css';



function Header() {
    return (
        <header className="navigation">
            <nav className="topnav">
                <p>Request a demo</p>
                <p>1.888.799.9666</p>
                <p>Support</p>
            </nav>
            <nav className="bottomnav">
                <div className="bottomnav-left">
                    <img src='ZoomLogo.png' alt="zoomlogo" />
                    <p id="solutions">Solutions<i className="fas fa-caret-down"></i>
                        <div className="dropdown-solutions">
                            <div className="drop-col">
                                <h2>Products</h2>
                                <div className="drop-item">
                                    <h3>Meetings & Chat</h3>
                                    <p>HD video, audio, collaboration & chat</p>
                                </div>
                                <div className="drop-item">
                                    <h3>Rooms and Workspaces</h3>
                                    <p>Power up your conference rooms with video</p>
                                </div>
                                <div className="drop-item">
                                    <h3>Phone System</h3>
                                    <p>Enterprise cloud phone system</p>
                                </div>
                                <div className="drop-item">
                                    <h3>Video Webinars</h3>
                                    <p>Full-featured, easy-to-use, engaging webinars</p>
                                </div>
                                <div className="drop-item">
                                    <h3>App Marketplace</h3>
                                    <p>Integrations and bots to use with Zoom</p>
                                </div>
                            </div>
                            <div className="drop-col">
                                <h2>Industries</h2>
                                <div className="drop-item">
                                    <h3>Education</h3>
                                    <p>Expand traditional classrooms in the cloud</p>
                                </div>
                                <div className="drop-item">
                                    <h3>Finance</h3>
                                    <p>Improve customer experiences & communications</p>
                                </div>
                                <div className="drop-item">
                                    <h3>Government</h3>
                                    <p>Increase productivity & engagement for all<br />agencies</p>
                                </div>
                                <div className="drop-item">
                                    <h3>Healthcare</h3>
                                    <p>Enabling HIPAA-compliant telehealth technology & workflows</p>
                                </div>
                            </div>
                        </div>
                    </p>
                    <p>Plans & Pricing</p>
                    <p>Contact Sales</p>
                </div>
                <div className="bottomnav-right">
                    <p onclick='Join()'>JOIN</p>
                    <p className="hostdrop">HOST<i className="fas fa-caret-down"></i>
                        <div className="host-dropdown">
                            <div className="links">
                                <div className="linkdrop">
                                    <p className="dropp">With Video Off</p>
                                </div>
                                <div className="linkdrop">
                                    <p className="dropp">With Video On</p>
                                </div>
                                <div className="linkdrop">
                                    <p className="dropp">Screen Share Only</p>
                                </div>
                            </div>
                        </div>
                    </p>
                    <p onclick="Signin()">Sign in</p>
                    <button type="button" onClick={"SignUp()"}>SIGN UP, IT'S FREE</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;
