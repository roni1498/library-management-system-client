
import image from '../assets/login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '../Components/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('');

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password}
        console.log(user)

        setLoginError('');

        // login user
        login(email, password)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                title: "Good job!",
                text: "You login Successfully!",
                icon: "success"
              });
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error)
            
                setLoginError('An error occurred. Please try again.');
              
        })
    }


      // handle google sign in
      const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
         console.log(result.user)
         Swal.fire({
            title: "Good job!",
            text: "You login Successfully!",
            icon: "success"
          });
         navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
         console.log(error.message)
         
        })
     }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='bg-gray-50 flex items-center justify-center'>
                {/* login container */}
                <div className='bg-gray-100 flex max-w-3xl rounded-2xl shadow-lg'>
                {/* form */}
                <div className='lg:w-1/2 p-8'>
                    <h2 className='font-bold text-2xl text-blue-500'>Login</h2>
                    <p className='text-sm mt-4'>if you already a member, easily log in</p>
                    <form onSubmit={handleLogin} className='flex flex-col gap-6 mt-10'>
                        <input className='p-2  rounded-xl border w-full' type="email" name="email" placeholder='Email' id="" />
                        <input className='p-2 rounded-xl border w-full' type="password" name="password" placeholder='password' id="" />
                        <input className='bg-blue-500 hover:bg-blue-700 rounded-xl py-2 w-full font-semibold text-white' type="submit" value="Login" />
                    </form>
                    <div className='my-4 grid grid-cols-3 items-center text-gray-500'>
                        <hr className='border-gray-500'></hr>
                        <p className='text-center'>OR</p>
                        <hr className='border-gray-500'></hr>
                    </div>
                    <button onClick={handleGoogleSignIn} className='bg-white hover:bg-gray-400 text-gray-600 rounded-xl py-2 w-full font-semibold flex items-center justify-center'><FcGoogle className='text-2xl'></FcGoogle> Login with Google</button>
                    {
                    loginError && <p className="text-red-600 mt-6">{loginError}</p>
                }
                   <div className='my-4 space-y-4'>
                   <p className='text-sm'><a href="">Forget password?</a></p>
                    <hr className='border-gray-500'></hr>
                    <p className='text-center'>Do not Have An Account? <Link to={'/signUp'}><span className='font-bold text-blue-500'>Create Account</span></Link></p>
                   </div>
                </div>
                {/* image */}
                <div className='w-1/2 p-5 hidden lg:block'>
                    <img className='rounded-2xl h-full w-full object-cover' src={image} alt="" />
                </div>
                </div>

            </div>
        </div>
    );
};

export default Login;