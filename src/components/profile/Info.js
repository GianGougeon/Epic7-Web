import React, { useState, useEffect } from "react";
import ReactImageFallback from "react-image-fallback";

const Info = (prop) => {
    const { user, updateProfileUser } = prop;
    const [imageSelector, setImageSelector] = useState("");
    const [changeNickname, setChangeNickname] = useState("");
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
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();
        // caracteres minimos para el nickname
        if (changeNickname.length < 3 || changeNickname.length > 15) {
            alert("El nickname debe tener entre 3 y 15 caracteres");
        }
        // chequear que la imagen sea una url valida
        if (imageSelector === undefined) {
            alert("Debes seleccionar una imagen");
        }
        // si todo esta bien, actualizar el perfil
        if (
            changeNickname.length >= 3 &&
            changeNickname.length <= 15 &&
            imageSelector !== undefined
        ) {
            try {
                await updateProfileUser(changeNickname, imageSelector);
                console.log("nickname updated");
                alert("Perfil actualizado");
                // limpiar
                setChangeNickname("");
                setImageSelector("");
            } catch (error) {
                console.log(error);
            }
        }
        // solo actualizar el el perfil una vez a la semana
    };

    return (
        <div className="info">
            <h2>Editar Información</h2>
            <div>
                <div>
                    <div className="preview">
                        <p>Preview:</p>
                        <div>
                            <ReactImageFallback
                                src={imageSelector || user.photoURL} 
                                fallbackImage=""
                            ></ReactImageFallback>
                        </div>
                    </div>
                    <div>
                        <h2>Selecciona una imagen</h2>
                        <div>
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    onClick={() => setImageSelector(image.url)}
                                >
                                    <img src={image.url} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Informacion de cuenta</h2>
                    <div>
                        <h3>Cambiar Nick</h3>
                        <label htmlFor="name">
                            <span>Nuevo:</span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={(e) =>
                                    setChangeNickname(e.target.value)
                                }
                            />
                        </label>
                    </div>
                </div>
            </div>
            <button
                className="info-save btn-upload"
                onClick={(e) => handleSubmit(e)}
            >
                Guardar
            </button>
        </div>
    );
};

export default Info;
