import './Page.scss'

const Page = ({active, children}) => (
    <div className='page'>
        {children}
    </div>
);

export default Page;