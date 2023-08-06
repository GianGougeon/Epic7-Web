/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import FilterText from "./FilterText";
import styles from "../../../styles/sass/components/hero/filter.module.scss";
import { gear, sets, element, rol, star } from "../../../data/dataProp";
import Heros from "./Heros";
const Filter = (prop) => {
    const { data } = prop;
    // Estado para almacenar las opciones seleccionadas
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedElements, setSelectedElements] = useState([]);
    const [searchHero, setSearchHero] = useState("");
    const [selectedRarity, setSelectedRarity] = useState([]);
    // Opciones de rareza
    const starNumber = [
        { value: 3, name: "Star-3" },
        { value: 4, name: "Star-4" },
        { value: 5, name: "Star-5" },
    ];
    // Función para manejar los cambios en los checkboxes de rol
    const handleRolChange = (event) => {
        const roleName = event.target.name;
        if (event.target.checked) {
            setSelectedRoles([...selectedRoles, roleName]);
        } else {
            setSelectedRoles(selectedRoles.filter((role) => role !== roleName));
        }
    };
    // Función para manejar los cambios en los checkboxes de rareza
    const handleRarityChange = (event) => {
        const rarityValue = parseInt(event.target.value); // Convertir el valor a número
        if (event.target.checked) {
            setSelectedRarity([...selectedRarity, rarityValue]);
        } else {
            setSelectedRarity(
                selectedRarity.filter((rarity) => rarity !== rarityValue)
            );
        }
    };

    // Función para manejar los cambios en los checkboxes de elemento
    const handleElementChange = (event) => {
        const elementName = event.target.name;
        if (event.target.checked) {
            setSelectedElements([...selectedElements, elementName]);
        } else {
            setSelectedElements(
                selectedElements.filter((elem) => elem !== elementName)
            );
        }
    };

    // Filtrar los personajes en función de las opciones seleccionadas
    const filteredCharacters = data.filter(
        (character) =>
            (selectedRoles.length === 0 ||
                selectedRoles.includes(character.role)) &&
            (selectedElements.length === 0 ||
                selectedElements.includes(character.attribute)) &&
            character.name.toLowerCase().includes(searchHero.toLowerCase()) &&
            (selectedRarity.length === 0 ||
                selectedRarity.includes(character.rarity))
    );
    return (
        <>
            <div className={styles.filter}>
                {/* Agregar el filtro de roles */}
                <div>
                    <ul>
                        {rol.map((role) => (
                            <li key={role.id} className={styles.test}>
                                <input
                                    type="checkbox"
                                    name={role.name}
                                    id={role.name}
                                    onChange={handleRolChange}
                                />
                                <label htmlFor={role.name}>
                                    <img src={role.img} alt={role.name} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    {/* Agregar el filtro de elementos */}
                    <ul>
                        {element.map((elem) => (
                            <li key={elem.id}>
                                <input
                                    type="checkbox"
                                    name={elem.name}
                                    id={elem.name}
                                    onChange={handleElementChange}
                                />
                                <label htmlFor={elem.name}>
                                    <img src={elem.img} alt={elem.name} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    {/* Agregar el filtro de rareza */}
                    <ul>
                        {starNumber.map((option) => (
                            <li key={option.value}>
                                <input
                                    type="checkbox"
                                    value={option.value}
                                    name={option.name}
                                    id={option.value}
                                    checked={selectedRarity.includes(
                                        option.value
                                    )}
                                    onChange={handleRarityChange}
                                />
                                <label
                                    htmlFor={option.value}
                                    star-value={option.value}
                                >
                                    <img src={star} alt="star" />
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <FilterText setSearchHero={setSearchHero} />
            </div>
            {/* Muestra los resultados filtrados */}
            <Heros data={filteredCharacters} />
        </>
    );
};

export default Filter;
