/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import FilterText from "./FilterText";
import styles from "../../../styles/sass/components/hero/filter.module.scss";
import { gear, sets, element, rol } from "../../../data/dataProp";
const Filter = (prop) => {
    const { data } = prop;
    // Estado para almacenar las opciones seleccionadas
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedElements, setSelectedElements] = useState([]);
    const [searchHero, setSearchHero] = useState("");
    // Estado para la rareza seleccionada (por defecto, todas las rarezas)
    const [selectedRarity, setSelectedRarity] = useState([]);
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
        <div>
            <ul>
                {rol.map((role) => (
                    <li key={role.id}>
                        <input
                            type="checkbox"
                            name={role.name}
                            id={role.name}
                            onChange={handleRolChange}
                        />
                        <img src={role.img} alt={role.name} />
                        <label htmlFor={role.name}>{role.name}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {element.map((elem) => (
                    <li key={elem.id}>
                        <input
                            type="checkbox"
                            name={elem.name}
                            id={elem.name}
                            onChange={handleElementChange}
                        />
                        <img src={elem.img} alt={elem.name} />

                        <label htmlFor={elem.name}>{elem.name}</label>
                    </li>
                ))}
            </ul>
            {/* Agregar el filtro de rareza */}
            <div>
                <h3>Rareza:</h3>
                <label>
                    <input
                        type="checkbox"
                        value="3"
                        checked={selectedRarity.includes(3)}
                        onChange={handleRarityChange}
                    />
                    3 estrellas
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="4"
                        checked={selectedRarity.includes(4)}
                        onChange={handleRarityChange}
                    />
                    4 estrellas
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="5"
                        checked={selectedRarity.includes(5)}
                        onChange={handleRarityChange}
                    />
                    5 estrellas
                </label>
            </div>
            <FilterText setSearchHero={setSearchHero} />
            {/* Muestra los resultados filtrados */}
            <div>
                <h3>Resultados filtrados de personajes:</h3>
                <ul>
                    {filteredCharacters.map((character) => (
                        <li key={character._id}>{character.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Filter;
