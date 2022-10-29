import { findSet } from "../../ElementAndRoles";
import styles from '../../../styles/sass/components/hero/herosDetail.module.scss';
const HeroPreview = (prop) => {
    const { heroDetail, userDataPreview } = prop;
    const { heroInfo, userInfo, uploadDate } = userDataPreview;
    // Hero info
    const { buildImage, sets, statsPiece } = heroInfo;
    // User info
    const { nickname, photoURL } = userInfo;
    const imageUrl = () => {
        if (buildImage === null) {
            return "";
        } else {
            const url = URL.createObjectURL(buildImage);
            return url;
        }
    };
    // transforma timestamp en fecha dd/mm/yyyy
    const date = () => {
        const date = new Date(uploadDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div
            className={styles.detail_content}
            style={{ backgroundColor: "rgba(55, 56, 56, 0.6)" }}
        >
            <div>
                <div>
                    <div>
                        <img
                            src={photoURL || heroDetail.assets.icons.icon}
                            alt={nickname}
                        ></img>
                    </div>
                    <h2>{nickname}</h2>
                </div>
                <div>
                    {userDataPreview ? (
                        <>
                            <div>
                                <img src={findSet(sets?.setName?.name)} />
                                <p>{sets?.setName?.name}</p>
                            </div>
                            <div>
                                <img src={findSet(sets?.setName2?.name)} />
                                <p>{sets?.setName2?.name}</p>
                            </div>
                            <div>
                                <img src={findSet(sets?.setName3?.name)} />
                                <p>{sets?.setName3?.name}</p>
                            </div>
                            {/* Stats */}
                            <hr></hr>
                            <div>
                                <img
                                    src={statsPiece?.collar?.img}
                                    alt={statsPiece?.collar?.name}
                                ></img>
                                <p>{statsPiece?.collar?.name}</p>
                            </div>
                            <div>
                                <img
                                    src={statsPiece?.anillo?.img}
                                    alt={statsPiece?.anillo?.name}
                                ></img>
                                <p>{statsPiece?.anillo?.name}</p>
                            </div>
                            <div>
                                <img
                                    src={statsPiece?.botas?.img}
                                    alt={statsPiece?.botas?.name}
                                ></img>
                                <p>{statsPiece?.botas?.name}</p>
                            </div>
                        </>
                    ) : null}
                    <hr></hr>

                    <div>
                        <p>{date()}</p>
                    </div>
                </div>
            </div>
            <div>
                {userDataPreview ? <img src={imageUrl()} /> : null}
            </div>
        </div>
    );
};

export default HeroPreview;
