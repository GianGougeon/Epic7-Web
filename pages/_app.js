import "../src/sass/style.scss";
import App, { Container } from "next/app";
import { AppContextProvider } from "../src/components/context/AppContext";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <AppContextProvider>
                <Component disabled="true"  {...pageProps} />
            </AppContextProvider>
        );
    }
}

export default MyApp;
