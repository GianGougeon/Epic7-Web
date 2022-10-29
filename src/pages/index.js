import React from "react";
import { useAuth } from "./../components/context/AuthContext";
import styles from "../styles/sass/components/index.module.scss";
import Marquee from "react-fast-marquee";
import Link from "next/link";
const Index = () => {
    const { logout, user } = useAuth();

    return (
        <section className={styles.index}>
            <div>
                <h1>Bienvenido!</h1>
                <p>
                    Esta es una App donde podras publicar y ver builds en el
                    mundo de Epic Seven.
                </p>
                <div>
                    <Link href="/heros">
                        <button>Heroes</button>
                    </Link>
                    <Link href="/profile">
                        <button>Perfil</button>
                    </Link>
                </div>
            </div>

            <div>
                <h2>Publicado recientemente:</h2>
                <Marquee
                    className={styles.marque}
                    direction="right"
                    speed={30}
                    gradientWidth={100}
                    gradientColor={[0, 0, 0]}
                    pauseOnHover
                >
                    <div className={styles.image_wrapper}>
                        <img
                            src="https://e7rta-builds.s3.us-east-2.amazonaws.com/Apocalypse%20Ravi/d22188701feb4985907441183b4d54a7.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.image_wrapper}>
                        <img
                            src="https://media.discordapp.net/attachments/847087824473423902/975544541744594944/unknown.png?width=1214&height=683"
                            alt=""
                        />
                    </div>
                    <div className={styles.image_wrapper}>
                        <img
                            src="https://images-ext-1.discordapp.net/external/hjx2Z9Pqz-ZRZgM1mLYOl0gngHH750srbRNfP3S3Kew/https/i.imgur.com/CmFgOtO.jpg?width=1226&height=683"
                            alt=""
                        />
                    </div>
                    <div className={styles.image_wrapper}>
                        <img
                            src="https://e7rta-builds.s3.us-east-2.amazonaws.com/Apocalypse%20Ravi/d22188701feb4985907441183b4d54a7.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.image_wrapper}>
                        <img
                            src="https://media.discordapp.net/attachments/847087824473423902/975544541744594944/unknown.png?width=1214&height=683"
                            alt=""
                        />
                    </div>
                </Marquee>
            </div>
        </section>
    );
};
export default Index;
