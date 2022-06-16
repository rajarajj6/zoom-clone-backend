import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="hero">
                <div className="group">
                    <h1>In this together.<br />Keeping you connected<br />wherever you are.</h1>
                    <div className="button-group">
                        <a href="https://zoom.us/signup" className="sign">Sign up for Free</a>
                        <a href="https://zoom.us/docs/en-us/covid19.html">Helpful Resources</a>
                    </div>
                    <img src="videocall.svg" />
                </div>
            </div>
            <section className="cards">
                <h2>One Consistent Enterprise Experience.</h2>
                <div className="flex-container">
                    <div className="flex-element">
                        <a href="https://zoom.us/meetings"><img src="meetings.png" alt="video" /></a>
                        <p className="card-title">Meetings</p>
                        <p className="card-description">Online Meetings, Training &<br />Technical Support</p>
                        <div className="text-group">
                            <a>Watch Video</a>
                            <a>|</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                    <div className="flex-element">
                        <a href="https://zoom.us/webinar"><img src="webinar.png" alt="webinar" /></a>
                        <p className="card-title">Video Webinar</p>
                        <p className="card-description">Marketing Events & Town Hall<br />Meetings</p>
                        <div className="text-group">
                            <a>Watch Video</a>
                            <a>|</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                    <div className="flex-element">
                        <a href="https://zoom.us/zoomrooms"><img src="conference.png" alt="conference" /></a>
                        <p className="card-title">Conference Rooms</p>
                        <p className="card-description">Build Collaboration-Enabled<br />Conference Rooms</p>
                        <div className="text-group">
                            <a>Watch Video</a>
                            <a>|</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                    <div className="flex-element">
                        <a href="https://zoom.us/docs/en-us/phonesystem.html"><img src="phone.png" alt="phone" /></a>
                        <p className="card-title">Phone System</p>
                        <p className="card-description">The Next Generation Enterprise<br />Phone System</p>
                        <div className="text-group">
                            <a>Watch Video</a>
                            <a>|</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                    <div className="flex-element">
                        <a href="https://zoom.us/feature/messaging"><img src="chat.png" alt="chat" /></a>
                        <p className="card-title">Chat</p>
                        <p className="card-description">Cross-Platform Messaging & File<br />Sharing</p>
                        <div className="text-group">
                            <a>Watch Video</a>
                            <a>|</a>
                            <a>Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards ratings">
                <h2>Zoom is Ranked #1 in Customer Reviews</h2>
                <div className="flex-container">
                    <div className="flex-element">
                        <img src="Gartner.png" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                        <p>4.7 out of 5</p>
                        <a>Learn More <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div className="flex-element">
                        <img src="trustradiusLogo.png" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                        <p>8.7 out of 10</p>
                        <a>Learn More <i className="fas fa-chevron-right"></i></a>
                    </div>
                    <div className="flex-element">
                        <img src="g2crowd.png" />
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                        <p>4.5 out of 5</p>
                        <a>Learn More <i className="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;