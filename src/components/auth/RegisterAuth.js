import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Router from "next/router";
import Link from "next/link";

import { FaUserAlt, FaLock, FaUserCircle } from "react-icons/fa";


import styles from "../../styles/sass/components/loginForm.module.scss";
import stylesBackground from "../../styles/sass/components/hero/heroCoverAnim.module.scss";

const Register = () => {
    const { signup } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(user.email, user.password);
            Router.push("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <div
                className={stylesBackground.background}
                style={{ height: "100vh" }}
            >
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className={`${styles.auth_form} ${styles.gradient_border}`}>
                {error && <p>Error en el registro</p>}
                <h1>Registro</h1>
                <FaUserCircle  className={styles.authProfile} style={{margin: "-15px auto"}}/>

                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email">
                            <FaUserAlt />
                        </label>
                        <input
                            type="email"
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            placeholder="Email"
                        />
                    </div>

                    <div>
                    <label htmlFor="password">
                            <FaLock />
                        </label>
                        <input
                            type="password"
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                            placeholder="Contraseña"
                        />
                    </div>
                    <button>Registrar</button>
                </form>
                <div>
                    <p>¿Ya tienes una cuenta?</p>
                    <li>
                        <Link href="/login">Iniciar sesion</Link>
                    </li>
                </div>
            </div>
        </>
    );
};
export default Register;
