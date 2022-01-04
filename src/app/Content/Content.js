import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ProjectPage from '../../pages/ProjectPage';

const Content = ({currentActivePage}) => {
    return (
        <div>
            <HomePage currentActivePage={currentActivePage}/>
            <div className="container">
                <ProjectPage currentActivePage={currentActivePage}/>
                <AboutPage currentActivePage={currentActivePage}/>
            </div>
            
        </div>
    );
}

export default Content;