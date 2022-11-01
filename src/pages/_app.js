import "../styles/sass/style.scss";
import App from "next/app";
import { AuthProvider } from "../components/context/AuthContext";
import Header from "../components/header/Header";
import { FetchStorageDataAuthProvider } from "../components/context/FetchStorageDataContext";
// next js provider

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <FetchStorageDataAuthProvider>
                <AuthProvider>
                    <Header />
                    <Component disabled="true" {...pageProps} />
                </AuthProvider>
            </FetchStorageDataAuthProvider>
        );
    }
}

export default MyApp;
