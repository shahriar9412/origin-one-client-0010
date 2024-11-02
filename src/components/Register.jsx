
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case character.')
            return;
        }

        createUser(username, photoURL, email, password)
            .then(() => {

            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-5xl text-pink-500 mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>

                    <input className="mb-4 w-full  py-2 px-4" type="text" name="username" placeholder="Your Name" id="" required />

                    <br />
                    <input className="mb-4 w-full  py-2 px-4" type="text" name="photo" placeholder="Photo URL" id="" required />


                    <br />
                    <input className="mb-4 w-full  py-2 px-4" type="email" name="email" placeholder="Email Address" id="" required />

                    <br />
                    <div className="mb-4 relative border">

                        <input
                            className="w-full py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="" required />

                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>

                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }

                        </span>
                    </div>

                    <br />
                    <input className="btn bg-pink-500 text-white hover:bg-yellow-500 mb-4 w-full" type="submit" value="Register" />

                </form>

                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }

                <p>Already have an account? Please <Link className="btn text-pink-500" to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Register;