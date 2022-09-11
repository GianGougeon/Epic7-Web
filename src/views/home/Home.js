import React from "react";
import Filter from "../../components/Filter";
import Heros from "../../components/Heros";

const Home = ({ Epic7Api }) => {

    return (
        <>
            <Filter Epic7Api={Epic7Api} />
            <Heros Epic7Api={Epic7Api} />
        </>
    );
};

export default Home;
