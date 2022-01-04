import './Page.scss'

const Page = ({active, children}) => (
    <div className={`page ${ active && 'page--active'}`}>
        {children}
    </div>
);

export default Page;