import React from "react";
import { useAuth } from "./../components/context/AuthContext";

const Index = () => {
    const { logout, user } = useAuth();

    console.log(user);
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <div style={{marginLeft: 200, marginTop: 100}}> 
            <div>
                {user === null ? "No user" : <p>welcome {user.displayName || user.email}</p>}
                

                <button onClick={handleLogout}>logout</button>
            </div>
        </div>
    );
};
export default Index;
