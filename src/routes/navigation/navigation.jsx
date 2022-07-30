import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
        // in react mush have a parent 
        <>
            <div className="navigation">
                {/* <h1>I am the navigation bar</h1> */}
                {/* <<div>Logo</div>> */}
                <Link className='logo-container' to='/'><CrwnLogo /></Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation