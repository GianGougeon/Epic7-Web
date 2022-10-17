import { useState } from "react";
import { useAuth } from "../context/AuthContext";
// navegate next js
import Router from "next/router";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
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
            // Router.push("/");
            history.back();
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
        <>
            <div>
                <div className="background"></div>
            </div>
            <div className="auth-form">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            placeholder="Contraseña"
                        />
                    </div>

                    {error && <p>Usuario o Contraseña invalidos</p>}
                    <div>
                        <button type="submit">Iniciar Sesion</button>
                        {/* <a href="#!" onClick={handleResetPassword}>
                            Forgot Password?
                        </a> */}
                    </div>
                </form>
                <div className="separador">
                    <hr />
                    <span>o</span>
                </div>
                <button onClick={handleGoogleSignin}>
                    <FcGoogle />
                    Continuar con Google
                </button>
                <div>
                    <p>¿No tienes una cuenta?</p>
                    <li>
                        <Link href="/register">Registrarse</Link>
                    </li>
                </div>
            </div>
        </>
    );
};
export default Login;
