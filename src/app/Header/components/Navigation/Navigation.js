import './Navigation.scss';
import Item from './components/Item'
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    return(
        <div>
            <ul className="nav mainNav" id="nav">
                <Item 
                    onClick={() => {}}
                    active={location.pathname.substring(0,6) === '/works'}
                    itemName="workWeb"
                >
                    <Link to="/works">
                        WORK
                    </Link>
                </Item>
                <Item 
                    active={location.pathname === '/works'}
                    itemName="workMobile"
                    href="/work"
                    classNames="btn-group d-flex"
                    linkClass="dropdown-toggle"
                    others={
                        <ul className="dropdown-menu">
                            <Item 
                                href="#"
                                value="1"
                                classNames="cate"
                                linkClass="dropdown-item">
                                All
                            </Item>
                            <Item 
                                href="#"
                                value="2"
                                classNames="cate"
                                linkClass="dropdown-item">
                                Spatial Designs
                            </Item>
                            <Item 
                                href="#"
                                value="3"
                                classNames="cate"
                                linkClass="dropdown-item">
                                Composite Creations
                            </Item>
                            <Item 
                                href="#"
                                value="4"
                                classNames="cate"
                                linkClass="dropdown-item">
                                Visual Arts
                            </Item>
                        </ul>
                    }
                >
                    <Link to="/works">
                        WORK
                    </Link>
                </Item>
                <Item 
                    active={location.pathname === '/'}
                    itemName="home"
                >
                    <Link to="/">HYH</Link>
                </Item>
                <Item
                    active={location.pathname === '/about'}
                    itemName="about"
                >
                    <Link to="/about">ABOUT</Link>
                </Item>
            </ul>
        </div>
    )
};

export default Navigation;