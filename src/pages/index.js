import { useAppContext } from "../components/context/AppContext";
import Filter from "../components/Filter";
import Heros from "../components/Heros";
import Loader from "../components/Loader";

export const Home = () => {
    const { epic7Api, loader } = useAppContext();

    return (
        <>
            <div className="background background--full"></div>
            {loader ? (
                <Loader />
            ) : (
                <>
                    <Filter Epic7Api={epic7Api} />
                    <Heros Epic7Api={epic7Api} />
                </>
            )}
        </>
    );
};

export default Home;
