import './Thumbnail.scss';

const Thumbnail = ({projectName, img, year}) => (
    <div className="card spatial">
        <div className="card-img">
            <img src={img} alt={projectName} className="card-img-pic" />
        </div>
        <div className="card-name">
            <h2>{projectName} | {year}</h2>
        </div>
    </div>
);

export default Thumbnail;