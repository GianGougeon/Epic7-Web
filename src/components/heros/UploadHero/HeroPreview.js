import { findSet } from "../../ElementAndRoles";
const HeroPreview = ({userDataBuild}) => {
    const imageUrl = () => {
        if (userDataBuild?.heroInfo?.previewImg === null) {
            return "";
        } else {
            const url = URL.createObjectURL(
                userDataBuild?.heroInfo?.previewImg
            );
            return url;
        }
    };
    return (
        <div className="detail-content">
            <div>
                <div>
                    <div></div>
                    <h2>{userDataBuild?.userInfo?.nickname}</h2>
                </div>
                <div>
                    {userDataBuild ? (
                        <>
                            <div>
                                <img
                                    src={findSet(
                                        userDataBuild?.heroInfo?.sets?.setName
                                            ?.name
                                    )}
                                />
                                <p>
                                    {
                                        userDataBuild?.heroInfo?.sets?.setName
                                            ?.name
                                    }
                                </p>
                            </div>
                            <div>
                                <img
                                    src={findSet(
                                        userDataBuild?.heroInfo?.sets?.setName2
                                            ?.name
                                    )}
                                />
                                <p>
                                    {
                                        userDataBuild?.heroInfo?.sets?.setName2
                                            ?.name
                                    }
                                </p>
                            </div>
                            <div>
                                <img
                                    src={findSet(
                                        userDataBuild?.heroInfo?.sets?.setName3
                                            ?.name
                                    )}
                                />
                                <p>
                                    {
                                        userDataBuild?.heroInfo?.sets?.setName3
                                            ?.name
                                    }
                                </p>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            <div>{userDataBuild ? <img src={imageUrl()} /> : <div></div>}</div>
        </div>
    );
};

export default HeroPreview;
