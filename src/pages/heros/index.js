import { useAppContext } from "../../components/context/AppContext";
import Filter from "../../components/filters/Filter";
import Heros from "../../components/heros/Heros";
import Loader from "../../components/Loader";
import Header from "../../components/header/Header";

export const Home = () => {
    const { epic7Api, loader } = useAppContext();

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <div style={{ marginTop: 80 }}>
                    <Filter Epic7Api={epic7Api} />
                    <Heros Epic7Api={epic7Api} />
                </div>
            )}
        </>
    );
};

export default Home;
