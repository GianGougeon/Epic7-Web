import "../styles/sass/style.scss";
import App from "next/app";
import { AppContextProvider } from "../components/context/AppContext";
import { AuthProvider } from "../components/context/AuthContext";
import Header from "../components/header/Header";
// next js provider

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <AuthProvider>
                <AppContextProvider>
                    <Header />
                    <Component disabled="true" {...pageProps} />
                </AppContextProvider>
            </AuthProvider>
        );
    }
}

export default MyApp;
