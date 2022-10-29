/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Select from "react-select";
const SelectSet = (prop) => {
    const { setSet, sets } = prop;

    //=============================[retorna las opciones]=============================
    const selectOptionsSet = () => {
        const set = sets.map((item) => ({
            value: item.name,
            setPiece: item.setPiece,
            label: (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <img
                            style={{ marginRight: "5px" }}
                            src={item.img}
                            height="30px"
                            width="30px"
                        />
                        {item.name}
                    </div>
                    <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
                        [Set de {item.setPiece} piezas]
                    </span>
                </div>
            ),
        }));
        // ordena alfabeticamente por nombre y por piezas
        const optionsNameSort = set.sort((a, b) => b.value - a.value);
        const optionsPieceSort = optionsNameSort.sort(
            (a, b) => b.setPiece - a.setPiece
        );
        return optionsPieceSort;
    };
    // on send, reset value
    
    const optionsSet = selectOptionsSet();
    // captura la opcion del set seleccionada
    const handleChange = (e) => {
        setSet({
            name: e.value,
            setPiece: e.setPiece,
        });
    };
    

    return (
        <>
            <Select
                options={optionsSet}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                ref={null}


                isRtl={false}
                isSearchable={true}
                onChange={(e) => handleChange(e)}
            />
        </>
    );
};

export default SelectSet;
