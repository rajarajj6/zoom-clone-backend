import React from 'react'

function Signin() {
    return (
        <div class="container">
            <div class="forms-container">
                <div class="signin">
                    <form action="" class="sign-in-form">
                        <div class="input-field">
                            <h4>Email address</h4>
                            <input type="text" placeholder="Email Address" />
                        </div>
                        <div class="input-field">
                            <h4>Password
                                <a href="#">Forget password?</a></h4>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div class="input-field">
                            <p>By signing in, I agree to the
                                <a href="https://explore.zoom.us/en/privacy/">Zoom Privacy Statement</a>
                                and<a href="https://explore.zoom.us/en/terms/">Terms of Service</a>
                            </p>
                        </div>
                        <div class="input-field">
                            <button type="submit" class="btn btn-primary">Sign In</button>
                        </div>
                        <div class="input-field">
                            <input type="checkbox" /> Stay signed in
                        </div>
                        <p class="social-text">Or sign in with</p>
                        <div class="social-media">
                            <a href="https://zoom.us/web/sso/login?en=signin" class="social-icon"><i class="fa-solid fa-key"></i></a>
                            <a href="https://appleid.apple.com/" class="social-icon"><i class="fa-brands fa-apple"></i></a>
                            <a href="https://accounts.google.com/" class="social-icon"><i class="fa-brands fa-google"></i></a>
                            <a href="https://www.facebook.com/login?en" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <div class="input-field">
                            <p>Zoom is protected by reCAPTCHA and their
                                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                                and<a href="https://policies.google.com/terms">Terms of Service</a> apply
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signin;
