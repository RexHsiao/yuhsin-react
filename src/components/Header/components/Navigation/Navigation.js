import './Navigation.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => (
    <div>
        <ul className="nav mb-lg-2 justify-content-center container-fluid mainNav" id="nav">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="../works.html">WORK</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="../index.html">HYH</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../about.html">ABOUT</a>
            </li>
        </ul>
    </div>
);

export default Navigation;