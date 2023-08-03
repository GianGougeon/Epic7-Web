import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import styles from "../../styles/sass/base/header/header.module.scss";

export const Expand = ({ expand, setExpand, user }) => {

    return (
        <div onClick={() => setExpand(!expand)}>
            {user?.photoURL ? (
                <img src={user?.photoURL} onClick={() => setExpand(!expand)} />
            ) : (
                <FaUserCircle onClick={() => setExpand(!expand)} />
            )}
            {expand ? (
                <IoMdArrowDropdown className={styles.arrowExpand} />
            ) : (
                <IoMdArrowDropleft className={styles.arrowExpand} />
            )}
        </div>
    );
};
