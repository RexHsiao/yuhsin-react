import 'bootstrap/dist/css/bootstrap.min.css'

const Item = ({
    currentActivePage,
    itemName, 
    classNames,
    linkClass, 
    value, 
    active, 
    href, 
    children, 
    onClick,
    others}) => (
    <li 
        className={`nav-item ${classNames} ${active && 'nav-item-active'}`} 
        value={value} 
        id={itemName}>
        <a 
            className={`nav-link ${linkClass}`} 
            aria-current="page" 
            href={href}
            onClick={(event) => {
                event.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
        {others}
    </li>
);

export default Item;