import { useAuth } from "../../components/context/AuthContext";
import React from "react";

const Profile = () => {
    const { logout, user } = useAuth();
    // transform en formato dd/MM/yyyy
    const firebaseDate = () => {
        const date = new Date(user.metadata.creationTime);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        // transforma la hora de creacion en formato AM/PM
        const time = () => {
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            const hour = hours % 12 ? hours % 12 : 12;
            return `${hour.toString().padStart(2)}:${minutes
                .toString()
                .padStart(2, "0")} ${ampm}`;
        };
        return [{ date: `${day}/${month}/${year}`, time: time() }];
    };
    // calcula el numero total de dias y horas que hay entre la hora de la cracion de la cuenta y la actual
    const elapsedTime = () => {
        const actualDate = new Date();
        const userDate = new Date(user.metadata.creationTime);
        const diffMs = actualDate - userDate;
        const diffDays = Math.floor(diffMs / 86400000);
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
        return `${diffDays} días ${diffHrs} horas`;
    };

    

    return (
        <>
            <div className="background"></div>
            <div>
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
            </div>
        </>
    );
};

export default Profile;
