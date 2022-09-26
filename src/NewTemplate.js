import React, { useState } from "react";
import "./NewTemplate.css";
import Text from "./Icons/t1.png";
import Text1 from "./Icons/t2.png";
import Text2 from "./Icons/t3.png";
import Text3 from "./Icons/t4.png";

export const NewTemplate = () => {
  const [intro, setIntro] = useState("Introduction to uniliver");
  const [desc, setDesc] = useState(
    "Introduction to uniliver Introduction to uniliverIntroduction to uniliverIntroduction Introduction to uniliver Introduction to uniliverIntroduction to uniliverIntroductionIntroduction to uniliver Introduction to uniliverIntroduction to uniliverIntroductionIntroduction to uniliver Introduction to uniliverIntroduction to uniliverIntroductionto uniliver Introduction to uniliver"
  );
  const [Question, setQuestion] = useState("Type Your Question");
  const [edit, setEdit] = useState(false);
  return (
    <div className="container body">
      <div className="main">
      <h2 className="heading">New Template</h2>
      <div className="box">
        <div className="iconbox">
          <img
            onClick={() => setEdit(!edit)}
            src={Text}
            height={50}
            width={50}
            alt="text"
          />
          <img src={Text1} height={50} width={50} alt="text" />
          <img src={Text2} height={50} width={50} alt="text" />
          <img src={Text3} height={50} width={50} alt="text" />
        </div>
        <div className="infobox">
          <h6 className="heading">Introduction</h6>
          <p className="text">{intro}</p>
          {edit && (
            <input
              type="text"
              className="custom-field"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          )}
          <h6 className="heading">Description</h6>
          <p className="text">{desc}</p>
          {edit && (
            <input
              type="text"
              className="custom-field"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          )}

          <div className="question">
            <div className="col-lg-9">
              <h6 className="heading">Question</h6>
              <p className="text">Type your Question</p>
              {edit && (
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
                class="form-select selectCustom"
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
