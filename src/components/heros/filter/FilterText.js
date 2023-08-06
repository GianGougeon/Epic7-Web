import React from "react";
import styles from "../../../styles/sass/components/hero/filter.module.scss";
import { BiSearch } from "react-icons/bi";
const FilterText = (prop) => {
    const { searchHero, setSearchHero } = prop;
    return (
        <>
            <form className={styles.filter_text}>
                <input
                    id="searchHero"
                    type="search"
                    onChange={(event) => {
                        setSearchHero(event.target.value);
                    }}
                    value={searchHero}
                    placeholder="Buscar"
                />
                <label htmlFor="searchHero">
                    <BiSearch className={styles.search_icon} />
                </label>
            </form>
        </>
    );
};

export default FilterText;
