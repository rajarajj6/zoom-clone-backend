import React from 'react';
import './Join.css';

function Join() {
    return (
        <div class="container">
            <div class="forms-container">
                <div class="sign up">
                    <form action="" class="sign-up-form">
                        <h4>Join Meeting</h4>
                        <div class="input-field">
                            <h6>Meeting ID or Personal Link Name</h6>
                            <input type="text" placeholder="Enter Meeting ID or Personal Link Name" />
                        </div>

                        <div class="input-field">
                            <p>By clicking "join", you agree to our
                                <a href="https://explore.zoom.us/en/terms/">Terms of Services</a>
                                and<a href="https://explore.zoom.us/en/privacy/">Privacy Statement</a>
                            </p>
                        </div>
                        <div class="input-field">
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </div>
                        <div class="input-field">
                            <a href="https://zoom.us/meeting/rooms">join a meeting from an H.323/SIP room system</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Join;
