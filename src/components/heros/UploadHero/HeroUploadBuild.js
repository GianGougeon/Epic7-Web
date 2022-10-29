/* eslint-disable react/jsx-key */
import React, { useMemo, useState, useEffect } from "react";
import { uploadFile } from "../../../firebase/config";
// firebase
import { updateDoc, doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { FaCloudUploadAlt } from "react-icons/fa";

import { sets, setStats } from "../../../data/dataProp";
import { useAuth } from "../../context/AuthContext";
import SelectSet from "./SelectSet";

// uuidv4 creates a unique ID for a specific file
import { uuid } from "uuidv4";
import SelectStats from "./SelectStats";

import ReactLoading from "react-loading";
import styles from "../../../styles/sass/components/hero/heroUpload.module.scss";
const HeroUploadBuild = (prop) => {
    const { user } = useAuth();
    const { heroDetail, heroIdPage, setUserDataPreview } = prop;
    // loader
    const [loader, setLoader] = useState({
        uploadLoader: false,
        uploadhidden: true,
    });
    // image
    const [file, setFile] = useState(null);
    // sets
    const [set1, setSet1] = useState({ setPiece: null });
    const [set2, setSet2] = useState({ setPiece: null });
    const [set3, setSet3] = useState({ setPiece: null });
    const [activeSelector, setActiveSelector] = useState({
        set2: false,
        set3: false,
    });
    // stats
    const [collar, setCollar] = useState({});
    const [anillo, setAnillo] = useState({});
    const [botas, setBotas] = useState({});

    const setData = (imageToFirebase) => {
        const setData = {
            userInfo: {
                id: user.uid,
                email: user.email,
                nickname: user.displayName,
                photoURL: user.photoURL,
            },
            heroInfo: {
                id: heroDetail.id,
                _id: heroDetail._id,
                name: heroDetail.name,
                buildImage: imageToFirebase,
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
            uploadDate: Date.now(),
        };
        return setData;
    };
    // Enviar formulario a firebase
    const handleSubmit = async (e) => {
        setUserDataPreview("");
        setLoader({ ...loader, uploadLoader: true });
        e.preventDefault();
        try {
            // imagen url
            const result = await uploadFile(
                file,
                heroDetail._id,
                `${heroDetail._id}-${uuid()}`
            );
            await setDoc(
                doc(db, "pendingBuilds", `${heroDetail._id}-${uuid()}`),
                setData(result)
            );
            setLoader({
                uploadLoader: false,
                uploadhidden: false,
            });
        } catch (err) {
            console.log(err);
        }
        setFile("");
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
    }, [set1, set2, set3.setPiece]);
    // !uploadLoader
    //  uploadhidden
    // test
    //  !uploadLoader
    //  !uploadhidden

    return (
        <>
            {!loader.uploadLoader ? (
                <>
                    {loader.uploadhidden ? (
                        <>
                            <div className={styles.Upload_Build}>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div>
                                        <div>
                                            <h3>Selecciona set</h3>
                                            <SelectSet
                                                setSet={setSet1}
                                                sets={sets}
                                            />
                                            {activeSelector.set2 ? (
                                                <SelectSet
                                                    setSet={setSet2}
                                                    sets={setPiece()}
                                                />
                                            ) : null}
                                            {activeSelector.set3 ? (
                                                <SelectSet
                                                    setSet={setSet3}
                                                    sets={setPiece()}
                                                />
                                            ) : null}
                                        </div>
                                        <div>
                                            <h3>
                                                Selecciona una estadística
                                                principal
                                            </h3>
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
                                                    accept="image/*"
                                                    name="UploadFile"
                                                    id="UploadFile"
                                                    onChange={(e) =>
                                                        setFile(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="UploadFile"
                                                    className={
                                                        file
                                                            ? styles.active_file
                                                            : styles.noActive_file
                                                    }
                                                >
                                                    <FaCloudUploadAlt />
                                                    {file ? (
                                                        <p
                                                            className={
                                                                file
                                                                    ? styles.active_file
                                                                    : styles.noActive_file
                                                            }
                                                        >
                                                            Un archivo
                                                            seleccionado
                                                        </p>
                                                    ) : (
                                                        <p
                                                            className={
                                                                file
                                                                    ? styles.active_file
                                                                    : styles.noActive_file
                                                            }
                                                        >
                                                            Selecciona una
                                                            imagen
                                                        </p>
                                                    )}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className={styles.btn_preview}
                                            onClick={() =>
                                                setUserDataPreview(
                                                    setData(file)
                                                )
                                            }
                                        >
                                            Vista Previa
                                        </button>
                                        <button
                                            type="button"
                                            className={styles.btn_preview}
                                            onClick={() =>
                                                setUserDataPreview("")
                                            }
                                        >
                                            Limpiar
                                        </button>
                                    </div>
                                    <button>Enviar</button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div
                            className={`${styles.Upload_Build} ${styles.done}`}
                        >
                            <span>Gracias, su build queda en revisión.</span>
                        </div>
                    )}
                </>
            ) : (
                <div className={`${styles.Upload_Build} ${styles.uploading}`}>
                    <ReactLoading type="bars" color="#eee" />
                </div>
            )}
        </>
    );
};

export default HeroUploadBuild;
