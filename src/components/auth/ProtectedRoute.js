import { useAuth } from "../context/AuthContext";
import router from "next/router";
import Link from "next/link";

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return <div className="background"></div>;
    if (!user) {
        router.push("/login");
    } else {
        return children;
    }
};
