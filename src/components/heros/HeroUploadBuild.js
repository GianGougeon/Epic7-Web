/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { uploadFile } from "../../firebase/config";
import { RiImageAddFill } from "react-icons/ri";
import {BiDownArrowAlt} from 'react-icons/bi'
import { sets } from "./../../data/dataProp";
const HeroUploadBuild = () => {
    // uuidv4 creates a unique ID for a specific file

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);

        setFile(null);
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const result = await uploadFile(file);
    //         console.log(result);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div className="Upload-Build">
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Seleciona un set:
                        <BiDownArrowAlt />
                        </label>
                        <input list="set" />
                        <datalist id="set">
                            {sets.map((set) => (
                                <option value={set.name}></option>
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <label>Seleciona un set:</label>
                        <input list="set2" />
                        <datalist id="set2">
                            {sets.map((set) => (
                                <option value={set.name}></option>
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <label>Seleciona un set:</label>
                        <input list="set3" />
                        <datalist id="set3">
                            {sets.map((set) => (
                                <option value={set.name}></option>
                            ))}
                        </datalist>
                    </div>
                </div>
                <div>
                    <input
                        type="file"
                        name="UploadFile"
                        id="UploadFile"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="UploadFile">
                        <RiImageAddFill className={file ? "active-file" : ""} />
                    </label>
                    <button>Upload</button>
                </div>
            </form>
        </div>
    );
};

export default HeroUploadBuild;
