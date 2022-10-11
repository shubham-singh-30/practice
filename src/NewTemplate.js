import React, { useState } from "react";
import "./NewTemplate.css";
import Text from "./Icons/t0.png";
import Text1 from "./Icons/t1.png";
import Text2 from "./Icons/t2.png";
import Text3 from "./Icons/t3.png";
import { ConfirmModal } from "./Modal/ConfirmModel";
import { SelectModal } from "./Modal/SelectModal";
import { SelectModalCheckBox } from "./Modal/SelectModalCheckBox";
import { RadioModal } from "./Modal/RadioModal";
import { TextModal } from "./Modal/TextModal";
import GearIcon from "./Icons/GearIcon";
import TrashIcon from "./Icons/TrashIcon";
import ArrowClockIcon from "./Icons/ArrowClockIcon";
import AddIcon from "./Icons/AddIcon";
const headers = [
  {
    id: 1,
    label: "Enter your label here",
    text: "Enter your text here",
  },
];
export const NewTemplate = () => {
  const [text, setText] = useState(headers);
  const [description, setDescription] = useState([]);
  // const [isQues, setIsQues] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [func, setFunc] = useState("");
  const [id, setId] = useState(null);
  const [question, setQuestion] = useState([]);
  const [isSelect, setIsSelect] = useState(false);
  const [isCheckbox, setIsCheckBox] = useState(false);
  const [isRadioModal, setIsRadioModal] = useState(false);
  const [isTextModal, setIsTextModal] = useState(false);
  const [index,setIndex] = useState(null)
  const handleDesc = () => {
    const values = [...description];
    values.push({
      id: values.length + 1,
      type: "SimpleText",
      text: "Enter your simple text here",
    });
    setDescription(values);
    console.log("desc entering");
  };

  const handleChange = (value, id, field) => {
    const values = [...text];
    let findIndex = text.findIndex((x) => x.id === id);
    values[findIndex][field] = value;
    setText(values);
    console.log("text:", text);
  };

  const handleDescChange = (value, id) => {
    const values = [...description];
    let findIndex = values.findIndex((x) => x.id === id);
    values[findIndex].text = value;
    setDescription(values);
    console.log("desc change");
  };
  //=============================================================//
  const handleDescRemove = (id) => {
    let filteredArray = description.filter((x) => x.id !== id);
    setDescription(filteredArray);
    setFunc(null);
    setIsModal(false);
    setId(null);
    console.log("removing desc model");
  };
  const handleRemove = () => {
    setText([]);
    setFunc(null);
    setIsModal(false);
    console.log("removing model");
  };
  const handleRemoveModal = () => {
    setIsModal(true);
    setFunc("text");
    console.log("opening remove model");
  };
  //======================================================//
  const handleDescModal = (id) => {
    setIsModal(true);
    setFunc("desc");
    setId(id);
    console.log("desc remove model");
  };

  const handleTextCombined = () => {
    let values = [...text];
    values.push({
      id: text.length + 1,
      label: "Enter your label here",
      text: "Enter your text here",
    });
    setText(values);
    console.log("displaying text boxs");
  };
  const handleSelect = (e) => {
    let val = parseInt(e.target.value);
    switch (val) {
      case 1:
        setIsCheckBox(true);
        return;
      case 2:
        setIsRadioModal(true);
        return;
      case 3:
        setIsTextModal(true);
        return;
      default:
        return;
    }
  };
// to delete the question from listc
const handleDelete=(id)=>{
  let value= [...question]
  setQuestion(value.filter((i,index)=>index!==id))
}
// to edit the question and modal by pressing gear icon
const handleEdit=(id)=>{
  setIndex(id)
  console.log("id",id)
  setIsSelect(true)
}
  return (
    <div className="container body">
      <div className="main">
        <h2 className="heading">New Template</h2>
        <div className="box">
          {isModal && (
            <ConfirmModal
              setOpen={setIsModal}
              isOpen={isModal}
              text={func}
              handleDescRemove={handleDescRemove}
              handleRemove={handleRemove}
              id={id}
            />
          )}
          <SelectModal
           isSelect={isSelect}
           index={index}
           setIsSelect={setIsSelect} 
           question={question}
            setQuestion={setQuestion} 
            setIndex={setIndex}
            />
          <SelectModalCheckBox
            isCheckbox={isCheckbox}
            setIsCheckBox={setIsCheckBox}
          />
          <RadioModal
            isRadioModal={isRadioModal}
            setIsRadioModal={setIsRadioModal}
          />
          <TextModal
            isTextModal={isTextModal}
            setIsTextModal={setIsTextModal}
          />
          <div className="iconbox">
            <img
              onClick={() => {
                text.length === 0 && handleTextCombined();
              }}
              src={Text}
              height={50}
              width={50}
              alt="text"
            />
            <img
              src={Text1}
              onClick={() => handleDesc()}
              height={50}
              width={50}
              alt="text"
            />
            <img src={Text2} height={50} width={50} alt="text" />
            <img src={Text3} height={50} width={50} alt="text" />
          </div>

          {/*==================================================================== */}
          <div className="infobox">
            {text.map((item) => (
              <>
                <p className="text">{item.label}</p>
                <p className="text">{item.text}</p>
                <input
                  type="text"
                  className="custom-field"
                  value={item.label}
                  onChange={(e) =>
                    handleChange(e.target.value, item.id, "label")
                  }
                />
                <input
                  type="text"
                  className="custom-field"
                  value={item.text}
                  onChange={(e) =>
                    handleChange(e.target.value, item.id, "text")
                  }
                />
                <button onClick={() => handleRemoveModal()}>Remove</button>
              </>
            ))}
            {/**======================================================================== */}
            {description.map((item) => (
              <>
                <p className="text">{item.text}</p>

                <input
                  type="text"
                  className="custom-field"
                  value={item.text}
                  onChange={(e) => handleDescChange(e.target.value, item.id)}
                />
                <button onClick={() => handleDescModal(item.id)}>Remove</button>
              </>
            ))}
            <div className="question">
              <div className="col-lg-8">
                <h6 className="heading">Question</h6>
                <p className="text">Type your Question</p>
              </div>
              <div className="col-lg-3 selectDiv">
                <select
                  className="form-select selectCustom"
                  aria-label="Default select example"
                  onChange={handleSelect}
                >
                  <option selected>select </option>
                  <option value="1">CheckBox</option>
                  <option value="2">RadioButton</option>
                  <option value="3">TextBox</option>
                </select>
              </div>
              <AddIcon
              height={20} width={20}
              style={{marginBottom: "16px" }}
                onClick={() => setIsSelect(true)}
            />
            </div>
                   {/**======================================================================== */}
           {question.map((item,
            index)=> <div className="question" style={{marginTop:'10px'}}>
              <div className="col-lg-8">
                <p className="text">{item.question}</p>
              </div>
              <div className="col-lg-3 ">
              <p className="text">{item.option}</p>
              </div>
              <div className="col-lg-3 selectDiv">
                <ArrowClockIcon/>
                <GearIcon onClick={()=>handleEdit(index)}/>
                <TrashIcon onClick={()=>handleDelete(index)}/>
              </div>
            </div>)}
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
