import { useAuth } from "../../components/context/AuthContext";
import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import ListPublished from "./ListPublished";
import Info from "./Info";
const Profile = () => {
    const [currentSection, setCurrentSection] = useState("info");
    const { user, updateProfileUser } = useAuth();

    return (
        <>
            <div className="profile-details">
                <div>
                    <input
                        type="radio"
                        name="profile"
                        id="info"
                        value="info"
                        onClick={() => setCurrentSection("info")}
                        defaultChecked={true}
                    />
                    <label htmlFor="info">Información</label>
                    <input
                        type="radio"
                        name="profile"
                        id="listPublished"
                        value="listPublished"
                        onClick={() => setCurrentSection("listPublished")}
                    />
                    <label htmlFor="listPublished">
                        Lista de builds publicadas
                    </label>
                </div>

                {currentSection === "info" && (
                    <Info user={user} updateProfileUser={updateProfileUser} />
                )}
                {currentSection === "listPublished" && <ListPublished />}
            </div>

            {/* <div>
                <div className="profile-details">
                    <div>
                        <div>
                            <h1>Perfil</h1>
                        </div>
                        <div className="star"></div>
                    </div>
                </div>
                <div className="profile-content">
                    <div>
                        <div>
                            <div></div>
                            <h2>{user.displayName}</h2>
                        </div>
                        <div>
                            <div>
                                <p>Creación: Hace {elapsedTime()}</p>
                                <span>Fecha: {firebaseDate()[0].date}</span>
                                <span>Hora: {firebaseDate()[0].time}</span>
                            </div>
                        </div>
                    </div>
                    <div>contenido</div>
                </div>
            </div> */}
        </>
    );
};

export default Profile;
