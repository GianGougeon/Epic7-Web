import "../styles/sass/style.scss";
import App from "next/app";
import { AuthProvider } from "../components/context/AuthContext";
import Header from "../components/header/Header";
// next js provider

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <AuthProvider>
                    <Header />
                    <Component disabled="true" {...pageProps} />
            </AuthProvider>
        );
    }
}

export default MyApp;
