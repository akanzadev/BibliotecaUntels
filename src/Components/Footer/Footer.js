import { Fragment } from "react";

import "./Footer.css";
const Footer = () => {
    return ( 
        <Fragment>
            <section className="seccion-contacto">
                <div className="contact-container">
                    <div classNameName="contactinfo">
                            <h2>Contact Info</h2>
                                <ul className="info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>2912 Madrid Road
                                            Los angele, CA 90017
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open-text"></i>
                                        <span>loremIpsum@gmail.com
                                        </span>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone-volume"></i>
                                        <span>832-432-234
                                        </span>
                                    </li>
                                </ul>
                                <ul className="sci">
                                    <li><a href=""><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a href=""><i className="fab fa-twitter-square"></i></a></li>
                                    <li><a href=""><i className="fab fa-instagram-square"></i></a></li>
                                    <li><a href=""><i className="fab fa-pinterest-square"></i></a></li>
                                    <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                    </div>
                        
                        <div className="cardForm">
                            <h2>Send Message</h2>
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" name="" id="" required/>
                                    <span>First Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="" id="" required/>
                                    <span>Last Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="" id="" required/>
                                    <span>Email Adress</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="number" name="" id="" required/>
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea name="" id="" cols="30" rows="10" required></textarea>
                                    <span>Write your messaege hear...</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="Send" name="" id="" required/>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </section>
        </Fragment>
     );
}
 
export default Footer;