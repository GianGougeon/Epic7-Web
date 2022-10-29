import { useAppContext } from "../../components/context/AppContext";
import Filter from "../../components/filters/Filter";
import Heros from "../../components/heros/Heros";
import Loader from "../../components/Loader";
import styles from "../../styles/sass/components/hero/heros.module.scss";
export const Home = () => {
    const { epic7Api, loader } = useAppContext();

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <section
                    className={`${styles.heros_section} container2`}
                    style={{ marginTop: 80 }}
                >
                    <div>
                        <h1>Heroes</h1>
                    </div>
                    <Filter Epic7Api={epic7Api} />
                    <Heros Epic7Api={epic7Api} />
                </section>
            )}
        </>
    );
};

export default Home;
