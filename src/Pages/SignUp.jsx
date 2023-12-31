import { Link, useNavigate } from "react-router-dom";
import image from '../assets/sign-up.jpg'
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        // console.log(user)

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('password should at least 6 characters or longer')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password Should have at least one capital letter')
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            setRegisterError('Your password should have at least one special character')
            return;
        }

        // create user
        createUser(email, password)
        .then(result => {
          console.log(result.user);
          Swal.fire({
            title: "Congratulation!",
            text: "You Successfully Sign Up!",
            icon: "success"
          });
       setTimeout(() => {
        navigate("/login")
       }, 5000);
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            title: 'Failed',
            text: 'Something went wrong, please try again',
            icon: "warning"
          });
        });
      
    }
    return (
        <div>
            <div className="text-blue-500">
                <Navbar></Navbar>
            </div>
        <div className='bg-gray-50 flex items-center justify-center'>
            {/* login container */}
            <div className='bg-gray-100 flex max-w-3xl rounded-2xl shadow-lg'>
            {/* form */}
            <div className='lg:w-1/2 p-8'>
                <h2 className='font-bold text-2xl text-blue-500'>Sign Up</h2>
                <p className='text-sm mt-4'>if you already a member, easily log in</p>
                <form onSubmit={handleSignUp} className='flex flex-col gap-6 mt-10'>
                    <input className='p-2  rounded-xl border w-full' type="text" name="name" placeholder='Name' id="" />
                    <input className='p-2  rounded-xl border w-full' required type="email" name="email" placeholder='Email' id="" />
                    <input className='p-2 rounded-xl border w-full' required type="password" name="password" placeholder='password' id="" />
                    <input className='bg-blue-500 hover:bg-blue-700 rounded-xl py-2 w-full font-semibold text-white' type="submit" value="Sign Up" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
               
               <div className='my-6 space-y-4'>
                <hr className='border-gray-500'></hr>
                <p className='text-center'>Already Have An Account? <Link to={'/login'}><span className='font-bold text-blue-500'>Login</span></Link></p>
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

export default SignUp;