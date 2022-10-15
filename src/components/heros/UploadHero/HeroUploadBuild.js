/* eslint-disable react/jsx-key */
import React, { useMemo, useState, useEffect } from "react";
import { uploadFile } from "../../../firebase/config";
import { updateDoc, doc, setDoc, onSnapshot } from "firebase/firestore";
import { FaCloudUploadAlt } from "react-icons/fa";

import { sets, setStats } from "../../../data/dataProp";
import { useAuth } from "../../context/AuthContext";
import SelectSet from "./SelectSet";

// uuidv4 creates a unique ID for a specific file
import { uuid } from "uuidv4";
import SelectStats from "./SelectStats";
const HeroUploadBuild = (prop) => {
    const { heroDetail, heroIdPage, setUserDataBuild } = prop;
    const { user } = useAuth();
    const [file, setFile] = useState(null);
    // sets
    const [set1, setSet1] = useState({ setPiece: null });
    const [set2, setSet2] = useState({ setPiece: null });
    const [set3, setSet3] = useState({ setPiece: null });
    const [activeSelector, setActiveSelector] = useState({
        set2: false,
        set3: false,
    });
    const [collar, setCollar] = useState([]);
    const [anillo, setAnillo] = useState([]);
    const [botas, setBotas] = useState([]);
    const addNewCollection = (collection, data) => {
        data.forEach((item) => {
            setDoc(doc(db, collection, item.id), item);
        });
    };

    // Enviar formulario a firebase
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // imagen url
            const result =
                "https://assets.epicsevendb.com/_source/face/c2042_su.png";
            // const result = await uploadFile(
            //     file,
            //     heroDetail._id,
            //     `${heroDetail._id}-${uuid()}`
            // );
            const setData = {
                userInfo: {
                    id: user.uid,
                    email: user.email,
                    nickname: user.displayName,
                },
                heroInfo: {
                    id: heroDetail.id,
                    _id: heroDetail._id,
                    name: heroDetail.name,
                    buildImage: result,
                    previewImg: file,
                    sets: {
                        setName: set1,
                        setName2: set2,
                        setName3: set3,
                    },
                    statsPiece: {
                        collar,
                        anillo,
                        botas,
                    },
                },
                // upload date here, to firebase
                uploadDate: Date.now(),
            };
            console.log(setData);
            await setUserDataBuild(setData);
        } catch (err) {
            console.log(err);
        }
        setFile(null);
        setSet1({ setPiece: null });
        setSet2({ setPiece: null });
        setSet3({ setPiece: null });
        setCollar([]);
        setAnillo([]);
        setBotas([]);
    };
    // filtrar sets por valor de piesas: 4 o 2 piesas
    const setPiece = () => {
        const result = sets.filter((item) => item.setPiece === 2);
        return result;
    };
    // detectar el cambio de las opciones
    useEffect(() => {
        if (set1.setPiece === 4) {
            setActiveSelector({
                set2: true,
                set3: false,
            });
            setSet3({ setPiece: null });
        }
        if (set1.setPiece === 2) {
            setActiveSelector({
                set2: true,
                set3: false,
            });
        }
        if (set1.setPiece === 2 && set2.setPiece === 2) {
            setActiveSelector({
                set2: true,
                set3: true,
            });
        }
        if (set1.setPiece === 4 && set2.setPiece === 4 && set3.setPiece === 4) {
            setActiveSelector({
                set2: false,
                set3: false,
            });
        }
    }, [set1, set2]);

    console.log(collar, anillo, botas);
    return (
        <>
            <div className="Upload-Build">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <h3>Selecciona set</h3>
                            <SelectSet setSet={setSet1} sets={sets} />
                            {activeSelector.set2 ? (
                                <SelectSet setSet={setSet2} sets={setPiece()} />
                            ) : null}
                            {activeSelector.set3 ? (
                                <SelectSet setSet={setSet3} sets={setPiece()} />
                            ) : null}
                        </div>
                        <div>
                            <h3>Selecciona una estadística principal</h3>
                            <SelectStats
                                setCollar={setCollar}
                                type={setStats.collar}
                            />
                            <SelectStats
                                setCollar={setAnillo}
                                type={setStats.anillo}
                            />
                            <SelectStats
                                setCollar={setBotas}
                                type={setStats.botas}
                            />
                        </div>

                        <div>
                            <h3>Subir imagen</h3>
                            <div>
                                <input
                                    type="file"
                                    name="UploadFile"
                                    id="UploadFile"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <label htmlFor="UploadFile" className={file ? "active-file" : "noActive-file"}>
                                    <FaCloudUploadAlt />
                                    {file ? (
                                        <p className={file ? "active-file" : "noActive-file"}>Un archivo seleccionado</p>
                                    ) : <p className={file ? "active-file" : "noActive-file"}>Selecciona una imagen</p>}
                                </label>
                            </div>
                        </div>
                    </div>
                    <button>
                Enviar Información
                    </button>
                </form>
            </div>
        </>
    );
};

export default HeroUploadBuild;
