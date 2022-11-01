import React, { useState, useEffect } from "react";
import ReactImageFallback from "react-image-fallback";
// styles
import styles from "./../../styles/sass/components/profile/avatar.module.scss";
import ReactLoading from "react-loading";
import RenderIfVisible from "react-render-if-visible";

const Avatar = (prop) => {
    const { user, updateProfileUserImage, data } = prop;
    const [searchAvatar, setSearchAvatar] = useState("");
    const [avatarSelected, setAvatarSelected] = useState("");
    const [loader, setLoader] = useState({
        subiendo: true,
        mensaje: true,
    });

    // ordenar por alfabético y extraer el id y icono
    const avatar = () => {
        const avatarListSorted = data.sort((a, b) => {
            if (a.rarity === b.rarity) {
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }
            return b.rarity - a.rarity;
        });
        const avatar = avatarListSorted.map((item) => {
            return {
                id: item._id,
                name: item.name,
                url: item.assets.icons.icon,
            };
        });
        return avatar;
    };

    // filtrar por nombre del buscador serachAvatar
    const filterAvatar = avatar().filter((item) => {
        return item.name.toLowerCase().includes(searchAvatar.toLowerCase());
    });

    // update avatar
    const updateAvatar = async () => {
        setLoader({
            subiendo: false,
            mensaje: true,
        });
        try {
            await updateProfileUserImage(avatarSelected);
            setLoader({
                subiendo: false,
                mensaje: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.avatar}>
            <div>
                <div className={styles.title}>
                    <h1>Cambiar avatar</h1>
                </div>
                <div className={styles.imagePreview}>
                    {/* Preview */}
                    <div>
                        <h2>Preview:</h2>
                        <div>
                            <ReactImageFallback
                                src={avatarSelected}
                                alt="preview"
                            ></ReactImageFallback>
                        </div>
                    </div>
                    <div>
                        <h2>Cambiar avatar</h2>
                        <div>
                            <input
                                type="search"
                                placeholder="Buscar..."
                                onChange={(e) =>
                                    setSearchAvatar(e.target.value)
                                }
                                value={searchAvatar}
                                className={styles.search}
                            />
                        </div>
                        <div>
                            {filterAvatar.map((image) => (
                                <RenderIfVisible
                                    key={image.id}
                                    defaultHeight={false}
                                    stayRendered={true}
                                >
                                    <label htmlFor={image.id} key={image.id}>
                                        <img
                                            src={image.url}
                                            alt={image.id}
                                        ></img>
                                    </label>
                                    <input
                                        type="radio"
                                        name="image"
                                        id={image.id}
                                        value={image.url}
                                        onChange={(e) =>
                                            setAvatarSelected(e.target.value)
                                        }
                                    />
                                </RenderIfVisible>
                            ))}
                        </div>
                    </div>
                </div>
                {loader.subiendo ? (
                    <button onClick={updateAvatar}>Guardar</button>
                ) : loader.mensaje ? (
                    <ReactLoading
                        type="spin"
                        className={styles.updateAvatarLoader}
                    />
                ) : (
                    <p className={styles.gc}>Guardado Correctamente</p>
                )}
            </div>
        </div>
    );
};

export default Avatar;
