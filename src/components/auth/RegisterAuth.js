import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
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
        <div style={{marginLeft: 200, marginTop: 100}}>
            {error && <Alert message={error} />}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                        placeholder="youremail@company.tld"
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                        placeholder="*************"
                    />
                </div>

                <button>Register</button>
            </form>
            <div>
               <p> Already have an Account?</p>
                <li>
                    <Link href="/login">Login</Link>
                </li>
            </div>
        </div>
    );
};
export default Register;
