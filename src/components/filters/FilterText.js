import React from "react";
import { IoCloseOutline } from "react-icons/io5";
const FilterText = (prop) => {
    const { searchHero, setSearchHero } = prop;
    return (
        <>
            <div className="filter-text">
                <input
                    type="text"
                    className="form-control"
                    onChange={(event) => {
                        setSearchHero(event.target.value);
                    }}
                    value={searchHero}
                    placeholder="Buscar"
                />
                <button
                    className="clear-text"
                    onClick={() => {
                        setSearchHero("");
                    }}
                >
                    <IoCloseOutline />
                </button>
            </div>
        </>
    );
};

export default FilterText;
