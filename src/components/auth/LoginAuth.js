import { useState } from "react";
import { useAuth } from "../context/AuthContext";
// navegate next js
import Router from "next/router";
import Link from "next/link";
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            Router.push("/profile");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            Router.push("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
            await resetPassword(user.email);
            setError("We sent you an email. Check your inbox");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div style={{marginLeft: 200, marginTop: 100}}>
            {error && <p>Usuario o Contraseña invalidos</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        placeholder="youremail@company.tld"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        placeholder="*************"
                    />
                </div>

                <div>
                    <button type="submit">Sign In</button>
                    <a href="#!" onClick={handleResetPassword}>
                        Forgot Password?
                    </a>
                </div>
            </form>
            <button onClick={handleGoogleSignin}>Google login</button>
            <div>
                <p>Dont have an account?</p>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </div>
        </div>
    );
};
export default Login;
