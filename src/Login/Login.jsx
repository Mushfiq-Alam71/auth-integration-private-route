import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // sign in user firebase
        signInUser(email, password)
            .then(result => {
                console.log(result)
                e.target.reset();
                navigate('/');
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error))
    }


    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="text-center text-2xl font-bold">Login</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="p-5"><p>New to this Website? Please <Link to="/register"><button className="btn-link">Register</button></Link></p></div>
                    <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;