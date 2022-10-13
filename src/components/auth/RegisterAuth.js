import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Router from "next/router";
import Link from "next/link";
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
            <div>
                <div className="background"></div>
            </div>
            <div className="auth-form">
                {error && <p>Error en el registro</p>}
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                            placeholder="Email"
                        />
                    </div>

                    <div>
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
