import React, { useState } from "react";
import "./CreateOrEditTemplate.css";
import { AiFillDelete } from "react-icons/ai";


const headers = [
    {
        id: 1,
        type: "Label",
        text: "Enter your label here",
    },
    {
        id: 2,
        type: "SimpleText",
        text: "Enter your text here",
    },
];

export const CreateOrEditTemplate = () => {
    const [text, setText] = useState(headers);

    const handleChange = (value, id) => {
        const values = [...text];
        let findIndex = text.findIndex((x) => x.id === id);
        values[findIndex].text = value;
        setText(values);
    };

    const handleDeleteHeader = (id) => {
        const values = [...text];
        let updatedValues = values.filter(item => item.id != id);
        setText(updatedValues);
    };

    const handleAddLabel = () => {
        const values = [...text];
        values.push({
            id: values.length + 1,
            type: "Label",
            text: "Enter label here",
        });
        setText(values);
    };

    const handleAddSimpleText = () => {
        const values = [...text];
        values.push({
            id: values.length + 1,
            type: "SimpleText",
            text: "Enter SimpleText here",
        });
        setText(values);
    };

    return (
        <div>
            <div className="box">

                <div className="iconbox">
                    <img
                        onClick={() => {
                            handleAddLabel();
                        }}
                        height={50}
                        width={50}
                        alt="Label"
                    />
                    <img
                        onClick={() => {
                            handleAddSimpleText();
                        }}
                        height={40}
                        width={40}
                        alt="SimpleText"
                    />
                </div>
                <div className="infobox">

                    {text
                        .map((item) => {
                            return item.type == "Label" ?
                                <div className="custom-field">

                                    <input
                                        type="text"
                                        className="custom-field-label"
                                        value={item.text}
                                        onChange={(e) => handleChange(e.target.value, item.id)}
                                    />
                                    <AiFillDelete onClick={() => {
                                        handleDeleteHeader(item.id);
                                    }} />
                                </div>
                                :
                                <div className="custom-field">

                                    <input
                                        type="text"
                                        className="custom-field-simpleText"
                                        value={item.text}
                                        onChange={(e) => handleChange(e.target.value, item.id)}
                                    />
                                    <AiFillDelete onClick={() => {
                                        handleDeleteHeader(item.id);
                                    }} />

                                </div>
                        }
                        )
                    }







                </div>
            </div>
            <div className="lastButtons">
                <button > Cancel</button>
                <button >Save</button>
            </div>
        </div>
    );
};