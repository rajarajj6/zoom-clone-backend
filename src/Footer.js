import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="https://blog.zoom.us/">Zoom Blog</a></li>
                            <li><a href="https://explore.zoom.us/en/customer/all/?">Customers</a></li>
                            <li><a href="https://explore.zoom.us/en/team/">Our Team</a></li>
                            <li><a href="https://careers.zoom.us/home">Careers</a></li>
                            <li><a href="https://marketplace.zoom.us/">Integrations</a></li>
                            <li><a href="https://partner.zoom.us/">Partners</a></li>
                            <li><a href="https://investors.zoom.us/">Investors</a></li>
                            <li><a href="https://explore.zoom.us/en/press/">Press</a></li>
                            <li><a href="https://explore.zoom.us/docs/en-us/zoom-esg-framework.html">ESG Responsibility</a></li>
                            <li><a href="https://explore.zoom.us/en/media-kit/">Media Kit</a></li>
                            <li><a href="https://learn-zoom.us/show-me">How to Videos</a></li>
                            <li><a href="https://developers.zoom.us/">Developer Platform</a></li>

                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Download</h4>
                        <ul>
                            <li><a href="https://zoom.us/download#client_4meeting">Meetings Client</a></li>
                            <li><a href="https://zoom.us/download#room_client">Zoom Rooms Client</a></li>
                            <li><a href="https://zoom.us/download#chrome_ext">Browser Extension</a></li>
                            <li><a href="https://zoom.us/download#outlook_plugin">Outlook Plug-in</a></li>
                            <li><a href="https://zoom.us/download#lync_plugin">Lync Plug-in</a></li>
                            <li><a href="https://zoom.us/download#mobile_app">Android App</a></li>
                            <li><a href="https://explore.zoom.us/en/virtual-backgrounds/">Zoom Virtual Backgrounds</a></li>

                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Sales</h4>
                        <ul>
                            <li><a href="https://zoom.us/tel:1.888.799.9666">1.888.799.9666</a></li>
                            <li><a href="https://explore.zoom.us/en/contactsales/">Contact Sales</a></li>
                            <li><a href="https://zoom.us/pricing">Plans & Pricing</a></li>
                            <li><a href="https://explore.zoom.us/docs/en-us/livedemo.html">Request a Demo</a></li>
                            <li><a href="https://explore.zoom.us/docs/en-us/events.html">Webinars and Events</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="https://zoom.us/test">Test Zoom</a></li>
                            <li><a href="https://zoom.us/signin">Account</a></li>
                            <li><a href="https://support.zoom.us/hc/en-us">Support Center</a></li>
                            <li><a href="https://learn-zoom.us/live-training">Live Training</a></li>
                            <li><a href="https://zoom.us/feed">Feedback</a></li>
                            <li><a href="https://explore.zoom.us/docs/en-us/contact.html">Contact Us</a></li>
                            <li><a href="https://explore.zoom.us/en/accessibility/">Accessibility</a></li>
                            <li><a href="https://devsupport.zoom.us/hc/en-us">Developer Support</a></li>
                            <li><a href="https://explore.zoom.us/en/trust/legal-compliance/">Privacy, Security, Legal Policies, and Modern Slavery Act Transparency
                                Statement</a></li>

                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Language</h4>
                        <ul>
                            <select>
                                <option value="en-US">English</option>
                                <option value="es">Spanish</option>
                                <option value="pt-BR">Portuguese</option>
                                <option value="hi-IN">Hindi</option>
                            </select>
                        </ul>

                        <h4>Currency</h4>
                        <ul>
                            <select>
                                <option value="USD">US Dollars $</option>
                                <option value="INR">Indian Rupee ₹</option>
                            </select>
                        </ul>

                        <div class="footer-social">
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <h4>Copyright &copy;2022 Zoom Video Communications,Inc.All rights reserved.
                            <li><a href="https://explore.zoom.us/en/terms/">Terms </a> |</li>
                            <li><a href="https://explore.zoom.us/en/privacy/">Privacy</a> |</li>
                            <li><a href="https://explore.zoom.us/en/trust/">Trust Center</a> |</li>
                            <li><a href="https://explore.zoom.us/en/community-standards/">Community Standards</a> |</li>
                            <li><a href="https://explore.zoom.us/en/trust/legal-compliance/">Legal & Compliance</a> |</li>
                            <li><a href="#">Do Not Sell My Personal Information</a> |</li>
                            <li><a href="#">Cookies Settings</a></li>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
