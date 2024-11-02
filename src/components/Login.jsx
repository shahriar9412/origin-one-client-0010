import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";


const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col">

                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-pink-500">Login now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">

                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn text-white hover:bg-yellow-500 bg-pink-500">Login</button>
                            </div>

                        </form>

                        <p> New to this site? Please <Link to="/register">
                            <button className="btn text-pink-500">Register</button>
                        </Link> </p>

                        <div className="flex justify-between">
                        <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                        <p><button onClick={handleGithubSignIn} className="btn btn-ghost">Github</button></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;