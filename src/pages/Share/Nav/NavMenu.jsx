import { Container, Nav, Navbar } from "react-bootstrap";
import { Link,} from "react-router-dom";
import logo from '../../../assets/cars/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const NavMenu = () => {
    const { user, logOut } = useContext(AuthContext);
    // const location = useLocation();
    console.log(user)
    const handleLogout = () => {
      logOut()
        .then(result => { console.log(result)})
        .catch(error => console.error(error));
    }
    return (
        <Navbar className="bg-slate-300" variant="light">
        <Container>
          <Navbar.Brand >
          <Link className='text-decoration-none text-dark' to='/'><img className="rounded w-20 h-20" src={logo}alt="" /><small className="font-bold">TOY CARS</small></Link>
            
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link className='text-decoration-none text-dark ' to='/'><small className="font-semibold">Home</small> </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark ' to='/alltoys'><small className="font-semibold">All Toys</small> </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark ' to='/mytoys'><small className="font-semibold">My Toys</small> </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='text-decoration-none text-dark ' to='/addtoys'><small className="font-semibold">Add Toys</small> </Link>
            </Nav.Link>
            <Nav.Link>
  
              <Link className='text-decoration-none text-dark' to='/blog'><small className="font-semibold">Blog</small></Link>
            </Nav.Link>
  
            <Nav.Link>
  
              {
                user ? <span className='text-primary'>
                  <div className="avatar">
                    <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 inline-block w-10 h-10 ">
                      <img title={user.displayName}
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <button onClick={handleLogout}>Logout</button></span> : <Link className='text-decoration-none text-dark' to='#'><small>Profile</small> </Link>
              }
  
            </Nav.Link>
            <Nav.Link>
             
              <Link className='text-decoration-none text-dark' to='/login'><small className="font-semibold">Login</small></Link>
              
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavMenu;