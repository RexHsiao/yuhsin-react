import { useState, useEffect, useMemo } from 'react'
import Thumbnail from '../../components/Thumbnail'
import project_images from '../../images/projects'
import { Link } from 'react-router-dom';
import './ProjectPage.scss'


const ProjectPage = ({
    currentActivePage
}) => {
    const [activeId, setActiveId] = useState(0);
    const [projects, setProjects] = useState(project_images);
    const list = useMemo(() => (
        ['All', 'Spatial Designs', 'Composite Creations', 'Visual Arts']
    ), [])

    useEffect(() => {
        if (activeId > 0) {
            setProjects(project_images.filter(item => item.category === list[activeId]))
        } else {
            setProjects(project_images)
        }
    }, [activeId, list])

    useEffect(() => {
        setActiveId(0)
    }, [currentActivePage])

    const workSelection = (index) => {
        if (activeId !== index) {
            setActiveId(index)
        }
    }
    return (
        <div>
            <ul className="nav secNav">
                {list.map((item, idx) => (
                    <li 
                        key={idx} 
                        className={`nav-item ${activeId === idx ? "active" : ""}`} 
                        onClick={() => workSelection(idx)}
                    >
                        {item}
                    </li>
                ))}
                <h1 id="workMobileTitle">All</h1>
            </ul>
            <div className="cards-container">
                <div className="d-flex flex-wrap cards">
                    {projects.sort((a, b) => a.year > b.year ? -1 : 1).map((item, idx) => (
                        <Link to={`/works/${item.id}`}>
                            <Thumbnail 
                                projectName={item.project_name ? item.project_name : ''}
                                img={
                                    item.images?.length 
                                    ? item.images[0]?.image 
                                    ? item.images[0]?.image 
                                    : item.images[0]
                                    ? item.images[0]
                                    : '' 
                                    : ''}
                                year={item.year ? item.year : ''}
                                key={idx}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ProjectPage;