import { useAppContext } from "../src/components/context/AppContext";
import HomePage from "../src/views/home/Home";

export const Home = () => {
    const { epic7Api, loader } = useAppContext();

    return (
        <>
            <div className={loader ? "background" : "background background--full"}></div>
            <HomePage Epic7Api={epic7Api}/>
        </>
    );
};

export default Home;