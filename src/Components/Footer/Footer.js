import { Fragment } from "react";
import "./Footer.scss";
const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-content__items">
                        <h4>Redes Sociales</h4>
                        <ul className="list-conteiner">
                            <li className="list-conteiner__list">
                                <a className="list-conteiner__link" href="">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li className="list-conteiner__list" >
                                <a className="list-conteiner__link" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-content__items">
                        <h4>Medios Institucionales</h4>
                        <div className="footer__link">
                            <a className="footer__link__a" href="">
                                <i class="fas fa-check"></i>Pagina principal
                            </a>
                        </div>
                        <div className="footer__link">
                            <a className="footer__link__a" href="">
                                <i class="fas fa-check"></i>Aula Virtual
                            </a>
                        </div>
                    </div>
                    <div className="footer-content__items">
                        <h4>Ubicacion</h4>
                        <p>Villa el Salvador</p>
                    </div>
                </div>

                <div className="footer-name">
                    <p className="footer-name__item" >UNTELS - &copy; Universidad Nacional Tecnologica de Lima Sur</p>
                </div>
            </footer>
        </Fragment>
    );
};
// saa

export default Footer;
