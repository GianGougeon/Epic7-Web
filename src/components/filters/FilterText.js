import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "../../styles/sass/components/hero/filter.module.scss";
const FilterText = (prop) => {
    const { searchHero, setSearchHero } = prop;
    return (
        <>
            <div className={styles.filter_text}>
                <input
                    type="text"
                    onChange={(event) => {
                        setSearchHero(event.target.value);
                    }}
                    value={searchHero}
                    placeholder="Buscar"
                />
                <button
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
