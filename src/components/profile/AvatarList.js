import React from "react";
import RenderIfVisible from "react-render-if-visible";

export const AvatarList = ({ filterAvatar }) => {
    return (
        <div>
            <div>
                {filterAvatar.map((image) => (
                    <RenderIfVisible
                        key={image.id}
                        defaultHeight={false}
                        stayRendered={true}
                    >
                        <label htmlFor={image.id} key={image.id}>
                            <img src={image.url} alt={image.id}></img>
                        </label>
                        <input
                            type="radio"
                            name="image"
                            id={image.id}
                            value={image.url}
                            onChange={(e) => setAvatarSelected(e.target.value)}
                        />
                    </RenderIfVisible>
                ))}
            </div>
        </div>
    );
};
