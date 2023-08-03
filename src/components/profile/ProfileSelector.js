import React from "react";

const ProfileSelector = ({ select, setCurrentSection, selectInfo, defaultChecked }) => {
    return (
        <>
            <input
                type="radio"
                name="profile"
                id={select}
                value={select}
                onClick={() => setCurrentSection(select)}
                defaultChecked={defaultChecked}
            />
            <label htmlFor={select}>{selectInfo}</label>
        </>
    );
};

export default ProfileSelector;
