import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 border-bottom pb-3 border-light logo">KMarket Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                India
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="#">000-000-0000</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="#">info@company.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a className="text-decoration-none" href="#">Luxury</a></li>
                            <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                            <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                            <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
                            <li><a className="text-decoration-none" href="#">Popular Dress</a></li>
                            <li><a className="text-decoration-none" href="#">Gym Accessories</a></li>
                            <li><a className="text-decoration-none" href="#">Sport Shoes</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <NavLink to="/" activeClassName="active" exact className="text-decoration-none">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="active" exact className="text-decoration-none">
                                    About Us
                                </NavLink>
                            </li>
                            <li><a className="text-decoration-none" href="#">Shop Locations</a></li>
                            <li><a className="text-decoration-none" href="#">FAQs</a></li>
                            <li>
                                <NavLink to="/contact" activeClassName="active" exact className="text-decoration-none">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="#">
                                    <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="#">
                                    <i className="fab fa-instagram fa-lg fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="#">
                                    <i className="fab fa-twitter fa-lg fa-fw"></i>
                                </a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="#">
                                    <i className="fab fa-linkedin fa-lg fa-fw"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" for="subscribeEmail">Email address</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control bg-dark border-light" id="subscribeEmail"
                                placeholder="Email address" />
                            <div className="input-group-text btn-success text-light">Subscribe</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright &copy; 2023 Company Name
                                | Designed by <a rel="sponsored" href="#" target="_blank">KMarket</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;