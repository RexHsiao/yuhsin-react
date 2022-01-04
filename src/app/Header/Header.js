import Logo from './components/Logo';
import Navigation from './components/Navigation';

const Header = ({
    currentActivePage,
    setCurrentActivePage
}) => (
    <div>
        <Logo />
        <Navigation 
            currentActivePage={currentActivePage}
            setCurrentActivePage={setCurrentActivePage}
        />
    </div>
);

export default Header;