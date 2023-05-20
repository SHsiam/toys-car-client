import { Link, useLocation, useNavigate, } from "react-router-dom";
import car4 from '../../../assets/cars/car4.jpg'
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";



const Login = () => {
    const { signIn,signInWithGoogle,} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
        })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-slate-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                <h2 className="font-bold text-4xl">Unleash the Thrill of Speed with Our Toy Cars</h2>
                <img className="rounded" src={car4} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-200">
                <div className="card-body bg-slate-300 rounded">
                    <h1 className="text-3xl text-center font-bold">Login Now</h1>
                    <form onSubmit={handleLogin} >
                        <div className="form-control ">
                            <label className="label  ">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control font-bold  d-grid" size="lg">
                            <input className="btn  btn-outline-secondary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div >
            <button onClick={handleGoogleSignIn} className="btn font-bold btn-outline-secondary me-2">
            Google
            </button>
            </div>
                    <p className='my-4 text-center font-semibold'>New to Toy Cars? <Link className='font-bold text-decoration-none' to="/register">Register</Link> </p>
                  
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;