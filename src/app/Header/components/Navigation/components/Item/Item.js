import './Item.scss';

const Item = ({
    itemName, 
    classNames,
    linkClass, 
    value, 
    active,
    children,
    others
}) => {
    return (
        <li 
            className={`nav-item ${classNames} ${active && 'nav-item-active'}`} 
            value={value} 
            id={itemName}>
            <div className={`nav-link ${linkClass}`}>
                {children}
            </div>
            {others}
        </li>
    )
};

export default Item;