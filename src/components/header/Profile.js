import styles from "../../styles/sass/base/header/profile.module.scss";
import Router from "next/router";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { useOuterClick } from "../hooks/useOuterClick";
import { FaUserCircle } from "react-icons/fa";
import { useProfileContext } from "../context/ProfileContext";
const Profile = (props) => {
    const { setExpand, user, logout } = props;
    const { setCurrentSection } = useProfileContext();

    const innerRef = useOuterClick(() => {
        setExpand(false);
    });
    // Handle logout function
    const handleLogout = async () => {
        try {
            await logout();
            setExpand(false);
            Router.push("/");
        } catch (error) {
            console.error(error.message);
        }
    };

    // oculta el email, antes del @ y cambia el texto por ****
    const hideEmail = (email) => {
        if (!email) return;
        const emailArray = email.split("@");
        const emailHidden = emailArray[0].replace(/./g, "*");
        return `${emailHidden}@${emailArray[1]}`;
    };

    const setExpandFalse = (currentSection) => {
        setExpand(false);
        setCurrentSection(currentSection);
    };

    return (
        <div ref={innerRef} className={styles.card}>
            <div className={styles.cardContent}>
                <div>
                    {user ? (
                        user?.photoURL ? (
                            <>
                                <img
                                    alt="user-image"
                                    src={user?.photoURL}
                                ></img>
                            </>
                        ) : (
                            <FaUserCircle />
                        )
                    ) : (
                        <FaUserCircle />
                    )}
                    <div>
                        <span>{user?.displayName || "Usuario"}</span>
                        <span>{hideEmail(user?.email)}</span>
                    </div>
                </div>
                <div>
                    <ul>
                        <Link href={"/profile"}>
                            <li onClick={() => setExpandFalse("listPublished")}>
                                <CgProfile />
                                Mis publicaciones
                            </li>
                        </Link>
                        <Link href={"/profile"}>
                            <li onClick={() => setExpandFalse("info")}>
                                <BsFillGearFill />
                                Información
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <ul>
                        {user ? (
                            <li onClick={handleLogout}>
                                <AiOutlineLogout /> Cerrar Sesion
                            </li>
                        ) : (
                            <Link href={"/login"}>
                                <li>
                                    <AiOutlineLogin
                                        className={styles.AiOutlineLogin}
                                    />{" "}
                                    Iniciar Sesion
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
