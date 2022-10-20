import React from "react";
import { useAuth } from "./../components/context/AuthContext";

const Index = () => {
    const { logout, user } = useAuth();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50vh",
            }}
        >
            <div>
                {user === null ? (
                    "No user"
                ) : (
                    <p>welcome {user.displayName || user.email}</p>
                )}
            </div>
        </div>
    );
};
export default Index;
