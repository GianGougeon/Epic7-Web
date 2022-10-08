import React from "react";
import Filter from "../../components/filters/Filter";
import Heros from "../../components/Heros";

const Home = ({ Epic7Api }) => {

    return (
        <>
            <Filter Epic7Api={Epic7Api} />
        </>
    );
};

export default Home;
