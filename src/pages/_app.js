import "../styles/sass/style.scss";
import App, { Container } from "next/app";
import { AppContextProvider } from "../components/context/AppContext";
import Header from "../components/header/Header";
// next js provider


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <AppContextProvider>
                <Header />
                <Component disabled="true"  {...pageProps} />
            </AppContextProvider>
        );
    }
}

export default MyApp;
