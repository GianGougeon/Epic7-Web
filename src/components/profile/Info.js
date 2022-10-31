import React, { useState, useEffect } from "react";
import ReactImageFallback from "react-image-fallback";
// styles
import styles from "./../../styles/sass/components/profile/info.module.scss";
const Info = (prop) => {
    const { user, updateProfileUser, showHero } = prop;
    const [imageSelector, setImageSelector] = useState("");
    const [changeNickname, setChangeNickname] = useState("");

    // extact assets.icons.icon and id

    

    const images = [
        {
            id: 1,
            url: "https://64.media.tumblr.com/b07bc95fa5344600392fb1bb612a638d/fbaa5aea86699bf3-ee/s250x400/626411d4ce3254e1f6f75789ae6ef92fde869ebf.png",
        },
        {
            id: 2,
            url: "https://64.media.tumblr.com/4079fd17aebd9f395cbc5596a989aadb/4991574067cedf7a-e9/s250x400/5a654a7d45ae627de24d36ff1b4ce850774382fb.png",
        },
        {
            id: 3,
            url: "https://64.media.tumblr.com/b5d25b0b1c54de87d7c8c73f13a70b61/b7d396af235a6da1-92/s250x400/aa6f9c43e033a7f047fad6cd70011fb449eba4a7.png",
        },
        {
            id: 4,
            url: "https://64.media.tumblr.com/070999177c1bb910fd623fd9ebed0474/1452d092177ec38a-6a/s250x400/62c0ff39b37463e6a4b0e3aa2465600d897e12c3.png",
        },
        {
            id: 5,
            url: "https://64.media.tumblr.com/0cdefd90fad7fa36cfdc85a7b17c71e2/6e119495c6a13ede-94/s250x400/87019f1cf7021782fa12719ad3ca7aeac0d1fc40.png",
        },
        {
            id: 6,
            url: "https://64.media.tumblr.com/22cfad0cd39ab79b85ecd7cfcea177be/a9d4f5886771cb4b-26/s250x400/d1a222ce0aef10d07bfe297adde3179d2b5a4110.png",
        },
        {
            id: 7,
            url: "https://64.media.tumblr.com/fed2a8dd7571a5d7783f806c2062b79d/tumblr_r1h2wc2Zzo1rpwm80o1_250.png",
        },
    ];
    const handleSubmit = async (e) => {
        // e.preventDefault();
        // // caracteres minimos para el nickname
        // if (changeNickname.length < 3 || changeNickname.length > 15) {
        //     alert("El nickname debe tener entre 3 y 15 caracteres");
        // }
        // // chequear que la imagen sea una url valida
        // if (imageSelector === undefined) {
        //     alert("Debes seleccionar una imagen");
        // }
        // // si todo esta bien, actualizar el perfil
        // if (
        //     changeNickname.length >= 3 &&
        //     changeNickname.length <= 15 &&
        //     imageSelector !== undefined
        // ) {
        //     try {
        //         await updateProfileUser(changeNickname, imageSelector);
        //         console.log("nickname updated");
        //         alert("Perfil actualizado");
        //         // limpiar
        //         setChangeNickname("");
        //         setImageSelector("");
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // // solo actualizar el el perfil una vez a la semana
    };

    // checkear que el nombre de usuario no exista aun - si ya existe, pedir que lo cambies
    const updateNicknameOnChange = async (e) => {
        e.preventDefault();
        setChangeNickname(e.target.value);
        const { value } = e.target;
        // si el formato del nombre esta mal, no buscar en la base de datos
        // longitud mayor o igual que 3 caracteres y longitud menor o igual que 15 caracteres
        if (value.length < 3 || value.length > 15) {
            return null;
        }
    };

    return (
        <div className={styles.info}>
            <form onSubmit={handleSubmit}>
                <div className={styles.title}>
                    <h1>Información General</h1>
                </div>
                <div className={styles.edit}>
                    <h2>Editar Información</h2>
                    <div>
                        <label htmlFor="nickname">
                            <span>Nickname</span>
                            <input
                                type="text"
                                name="nickname"
                                id="nickname"
                                onChange={(e) =>
                                    setChangeNickname(e.target.value)
                                }
                            ></input>
                        </label>
                    </div>
                </div>
                <button>Guardar</button>
            </form>
        </div>
    );
};

export default Info;
