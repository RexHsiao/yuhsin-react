import './WorkPage.scss'
import { useParams } from 'react-router-dom';
import project_images from '../../images/projects'

const WorkPage = () => {
    const routeParams = useParams();
    const work = routeParams.work;

    let workData = null

    const filteredWork = project_images.filter(i => i.id === work)
    if (filteredWork.length) {
        workData = filteredWork[0]

    } else {

    }
    return (
        <div className="container">
            <div className="projectTitle d-flex justify-content-between flex-wrap">
                <div className="workTitle col-10">
                    <h1>{workData.project_name}</h1>
                    <h2><em>{workData.subtitle}</em></h2>
                </div>
                <div className="workDetail1">
                    <p>{workData.year}</p>
                    <p>{workData.type}</p>
                </div>
            </div>
            <div class={`workImg ${workData.image_layout}`}>
                {workData.images.map((image, idx) => (
                    <>
                    <div key={idx} id={`workImg-${idx}`}>
                        <img src={image.image || image} alt={workData.project_name} class={`workImgs ${image.image ? 'img_description' : ''}`} />
                    </div>
                    {image.description} {image.size}
                    </>
                ))}
            </div>
            <div class="workDetail2">
                <p>{workData.materials.join(', ')}</p>
                <p>{workData.size}</p>
                <p>{workData.description}</p>
            </div>
        </div>
    )
};

export default WorkPage;