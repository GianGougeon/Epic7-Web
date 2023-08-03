import styles from "../../styles/sass/base/header/header.module.scss";
export const MobileBtn = () => {
    return (
        <>
            <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
            <label className={styles.menuIcon} htmlFor="menu-btn">
                <span className={styles.navicon} />
            </label>
        </>
    );
};
