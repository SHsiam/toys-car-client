
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from '../../pages/Share/Nav/NavMenu';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Share/Footer/Footer';

const Main = () => {
    return (
        <>
        <NavMenu></NavMenu>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;