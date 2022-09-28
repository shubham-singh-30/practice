import React, { useState } from "react";
import "./NewTemplate.css";
import Text from "./Icons/t1.png";
import Text1 from "./Icons/t2.png";
import Text2 from "./Icons/t3.png";
import Text3 from "./Icons/t4.png";
const headers = [
  {
    id: 1,
    type: "Label",
    text: "Enter your label here",
  },
  {
    id: 2,
    type: "SimpleText",
    text: "Enter your Simple text here",
  },
];
export const NewTemplate = () => {
  const [text, setText] = useState(headers);
  const [isLabel, setIsLabel] = useState(false);
  const [isDesc, setIsDesc] = useState(false);
  const [isQues, setIsQues] = useState(false);

  const [Question, setQuestion] = useState("Type Your Question");
  const handleAdd = (type, textVal) => {
    const values = [...text];
    values.push({
      id: values.length + 1,
      type: type,
      text: textVal,
    });
    setText(values);
  };
  const handleChange = (value, id) => {
    const values = [...text];
    let findIndex = text.findIndex((x) => x.id === id);
    values[findIndex].text = value;
    setText(values);
  };
  const handleRemove = (id) => {
    let filteredArray = text.filter((x) => x.id !== id);
    setText(filteredArray);
  };

  return (
    <div className="container body">
      <div className="main">
        <h2 className="heading">New Template</h2>
        <div className="box">
          <div className="iconbox">
            <img
              onClick={() => handleAdd("Label", "Enter your label here")}
              src={Text}
              height={50}
              width={50}
              alt="text"
            />
            <img
              src={Text1}
              onClick={() => handleAdd("SimpleText", "Enter Your Simple Text")}
              height={50}
              width={50}
              alt="text"
            />
            <img src={Text2} height={50} width={50} alt="text" />
            <img src={Text3} height={50} width={50} alt="text" />
          </div>
          <div className="infobox">
            <h6 className="heading" onClick={()=>setIsLabel(!isLabel)}>Label</h6>
            {text
              .filter((x) => x.type === "Label")
              .map((item) => (
                <p className="text">{item.text}</p>
              ))}
            {isLabel &&
              text
                .filter((x, index) => x.type === "Label")
                .map((item) => (
                  <>
                    <input
                      type="text"
                      className="custom-field"
                      value={item.text}
                      onChange={(e) => handleChange(e.target.value, item.id)}
                    />
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </>
                ))}
            <h6 className="heading" onClick={()=>setIsDesc(!isDesc)}>Description</h6>
            {text
              .filter((x) => x.type === "SimpleText")
              .map((item) => (
                <p className="text">{item.text}</p>
              ))}
            {isDesc &&
              text
                .filter((x) => x.type === "SimpleText")
                .map((item) => (
                  <>
                    <input
                      type="text"
                      className="custom-field"
                      value={item.text}
                      onChange={(e) => handleChange(e.target.value, item.id)}
                    />
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </>
                ))}

            <div className="question">
              <div className="col-lg-9">
                <h6 className="heading" onClick={()=>setIsQues(!isQues)}>Question</h6>
                <p className="text">Type your Question</p>
                {isQues && (
                  <input
                    type="text"
                    className="custom-field"
                    value={Question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                )}
              </div>
              <div className="col-lg-3 " style={{ marginTop: "25px" }}>
                <select
                  className="form-select selectCustom"
                  aria-label="Default select example"
                >
                  <option selected>select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="lastButtons">
          <button className="firstButton"> Cancel</button>
          <button className="secondButton">Save</button>
        </div>
      </div>
    </div>
  );
};
