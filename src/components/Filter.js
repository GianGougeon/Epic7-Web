import React from "react";
import FilterRole from "./filters/FilterRole";
import FilterElement from "./filters/FilterElement";
import FilterStars from "./filters/FilterStars";

export const Filter = ({ Epic7Api }) => {
    return (
        <>
            <div className="filters container">
                <FilterElement Epic7Api={Epic7Api} />
                <FilterRole Epic7Api={Epic7Api} />
                <FilterStars Epic7Api={Epic7Api} />
            </div>
        </>
    );
};
export default Filter;
