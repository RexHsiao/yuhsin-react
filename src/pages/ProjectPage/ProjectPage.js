import Thumbnail from '../../components/Thumbnail'
import Page from '../../components/Page'
import './ProjectPage.scss'


const ProjectPage = ({
    currentActivePage
}) => (
    <Page 
        active={currentActivePage === 'WORK'}>
        <ul class="nav mb-lg-2 justify-content-center container-fluid secNav">
            <h1 id="workMobileTitle">All</h1>
            <li class="nav-item cate active" value="1" onclick="workSelection(this.value)">All</li>
            <li class="nav-item cate" value="2" onclick="workSelection(this.value)">Spatial Designs</li>
            <li class="nav-item cate" value="3" onclick="workSelection(this.value)">Composite Creations</li>
            <li class="nav-item cate" value="4" onclick="workSelection(this.value)">Visual Arts</li>
        </ul>
        <div className="d-flex flex-wrap cards">
            <Thumbnail 
                projectName={'Planet Formula'}
                img={'../images/planet_formula/Entrance_1.jpg'}
                year={'2020'}
            />
            <Thumbnail 
                projectName={'Architecture x Pottery'}
                img={'../images/pottery21/pottery21_02.jpg'}
                year={'2019'}
            />
        </div>
        
    </Page>
);

export default ProjectPage;