import './Navigation.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './components/Item'

const Navigation = ({
    currentActivePage,
    setCurrentActivePage
}) => {
    return(
        <div>
            <ul className="nav mb-lg-2 justify-content-center container-fluid mainNav" id="nav">
                <Item 
                    onClick={() => setCurrentActivePage('WORK')}
                    active={currentActivePage === 'WORK'}
                    itemName="workWeb"
                >
                    WORK
                </Item>
                <Item 
                    onClick={() => setCurrentActivePage("WORK")}
                    active={currentActivePage === 'WORK'}
                    itemName="workMobile"
                    href="/work"
                    classNames="btn-group d-flex"
                    linkClass="dropdown-toggle"
                    others={
                        <ul class="dropdown-menu">
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
                    WORK
                </Item>
                <Item 
                    onClick={() => setCurrentActivePage("HOME")}
                    active={currentActivePage === 'HOME'}
                    itemName="home"
                >
                    HYH
                </Item>
                <Item 
                    onClick={() => setCurrentActivePage("ABOUT")}
                    active={currentActivePage === 'ABOUT'}
                    itemName="about"
                >
                    ABOUT
                </Item>
            </ul>
        </div>
    )
};

export default Navigation;