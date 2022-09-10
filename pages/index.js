import Head from "next/head";
import { useEffect } from "react";
import Filters from "../src/components/Filters";
import { useAppContext } from "../src/components/context/AppContext";
import Heros from "../src/components/Heros";
import HomePage from "../src/views/home/Home";

export const Home = () => {
    const { epic7Api } = useAppContext();

    return (
        <>
            <div className="background"></div>
            <HomePage Epic7Api={epic7Api}/>
        </>
    );
};

export default Home;
