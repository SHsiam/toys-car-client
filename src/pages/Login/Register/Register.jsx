
import { Link, useLocation, useNavigate } from 'react-router-dom';
import car4 from '../../../assets/cars/car4.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';




const Register = () => {
    const { createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
    
        setError('')

        if (!email || email === '') {
            setError('Email cannot be blank!')
            return
        }else if(!password || password === " "){
            setError('Password cannot be blank!')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        console.log(name,photo,email,password);
       createUser(email, password)
            .then(result => {
                const createUser =result.user;
                console.log(createUser);
                updateUserData(result.user, photo,name);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
 
    }

    const updateUserData = (user, photo,name) => {
        updateProfile(user, {
            displayName:name,
            photoURL: photo
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                setError(error.message);
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
                    <h1 className="text-3xl text-center font-bold">Register Now</h1>
                    <form onSubmit={handleRegister}  >
                    <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control font-bold  d-grid" size='lg'>
                            <input className="btn btn-outline-secondary" type="submit" value="Register" />
                        </div>
                    </form>
                    <div >
            <button  className="btn font-bold btn-outline-secondary me-2">
            Google
            </button>
            </div>
                    <p className='my-4 text-center font-semibold'>Already Have an Account? <Link className='font-bold text-decoration-none' to="/login">Login</Link> </p>
                  
                </div>
                <p className='text-error'>{error}</p>
            </div>
        </div>
    </div>
    );
};

export default Register;