import React, { useState } from "react";
import "./CreateOrEditTemplate.css";
import { AiFillDelete } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { BiMinus, BiCheckbox, BiCircle } from "react-icons/bi";
import { MdAddCircle, MdRefresh, MdRadio } from "react-icons/md";
import { Label, Input } from "reactstrap";
import { EditTemplate } from "./EditTemplate";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

let testVar = "abc";

const initialHeader = [
  {
    id: 1,
    type: "Label",
    label: "Enter label here",
    text: "Enter your text here",
  },
  {
    id: 2,
    type: "SimpleText",
    text: "Enter your text here",
  },
];

const initialQuestion = [
  {
    id: 1,
    text: "Enter text here",
    type: "Check Box",
    options: [],
    isAnswered: false,
    Answer: "",
    isCommentsRequired: false,
    isAttachmentUploadRequired: false,
    isConsultationRequired: false,
    consultationAction: {
      text: "test field",
    },
  },
];

const newQuestionData = {
  id: 1,
  text: "Enter text here",
  type: "Check Box",
  options: [],
  isAnswered: false,
  Answer: "",
  isCommentsRequired: false,
  isAttachmentUploadRequired: false,
  isConsultationRequired: false,
  consultationAction: {
    text: "test field",
  },
};

export const CreateOrEditTemplate = () => {
  const [header, setHeader] = useState(initialHeader);
  const [question, setQuestion] = useState([]);
  const [newQuestion, setNewQuestion] = useState(newQuestionData);
  const [textValue, setTextValue] = useState("");
  const [mitigation, setMitigation] = useState(false);
  const [optionText, setOptionsText] = useState("Type your options");
  const [options, setOptions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null)
  //#region Headers Handler Start

  const handleLabelChange = (value, id, type) => {
    const values = [...header];
    let findIndex = values.findIndex((x) => x.id === id);
    if (type === "Label") {
      values[findIndex].label = value;
    } else if (type === "SimpleText") {
      values[findIndex].text = value;
    }

    setHeader(values);
  };

  const handleSimpleTextChange = (value, id) => {
    const values = [...header];
    let findIndex = values.findIndex((x) => x.id === id);
    values[findIndex].text = value;
    setHeader(values);
  };

  const handleDeleteHeader = (id) => {
    const values = [...header];
    let updatedValues = values.filter((item) => item.id != id);
    setHeader(updatedValues);
  };

  const handleAddLabel = () => {
    const values = [...header];
    values.push({
      id: values.length + 1,
      type: "Label",
      label: "Enter label here",
      text: "Enter your text here",
    });
    setHeader(values);
  };

  const handleAddSimpleText = () => {
    const values = [...header];
    values.push({
      id: values.length + 1,
      type: "SimpleText",
      text: "Enter your text here",
    });
    setHeader(values);
  };

  //#endregion Headers Handler End

  const handleNewQuestionTypeChange = (type) => {
    const value = { ...newQuestion };
    value.type = type.target.value;
    setNewQuestion(value);
    setOptions([]);
    setOptionsText("");
  };

  const handleNewQuestionTextChange = (text) => {
    const value = { ...newQuestion };
    value.text = text.target.value;
    setNewQuestion(value);
  };

  const handleNewQuestionSubmit = () => {
    const newQuestionState = { ...newQuestion };
    const questionState = [...question];
    newQuestionState.id = questionState.length + 1;
    if (newQuestionState.type === "Text Box") {
      newQuestionState.options = textValue;
    } else {
      newQuestionState.options = options;
    }
    questionState.push(newQuestionState);
    setQuestion(questionState);
    setNewQuestion(newQuestionData);
    setOptions([]);
    setOptionsText("");
    setTextValue("");
  };
  const handleRadioSubmit = () => {
    setOptions([...options, optionText]);
    setOptionsText("");
  };
  const handleDeleteQuestion = (id) => {
    const values = [...question];
    let updatedValues = values.filter((item) => item.id !== id);
    setQuestion(updatedValues);
  };
  const handleOption = (id) => {
    let values = [...options];
    let updatedValues = values.filter((item, index) => index !== id);
    setOptions(updatedValues);
  };
  const handleNewQuestionType = (e, index) => {
    const values = [...question];
    values[index].type = e.target.value;
    values[index].options=[]
    setQuestion(values);
  };
  const handleNewQuestionText = (e, index) => {
    const values = [...question];
    values[index].text = e.target.value;
    setQuestion(values);
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
          <img
            onClick={() => {
              handleAddSimpleText();
            }}
            height={40}
            width={40}
            alt="Question"
          />
          <img
            onClick={() => {
              handleAddSimpleText();
            }}
            height={40}
            width={40}
            alt="Attachment"
          />
        </div>
        <div className="infobox">
          {header.map((item) => {
            return item.type == "Label" ? (
              <div className="custom-field">
                <input
                  type="text"
                  className="custom-field-label"
                  value={item.label}
                  onChange={(e) =>
                    handleLabelChange(e.target.value, item.id, "Label")
                  }
                />
                <div className="custom-field" />
                <input
                  type="text"
                  className="custom-field-simpleText"
                  value={item.text}
                  onChange={(e) =>
                    handleLabelChange(e.target.value, item.id, "SimpleText")
                  }
                />

                <AiFillDelete
                  onClick={() => {
                    handleDeleteHeader(item.id);
                  }}
                />
              </div>
            ) : (
              <div className="custom-field">
                <input
                  type="text"
                  className="custom-field-simpleText"
                  value={item.text}
                  onChange={(e) =>
                    handleSimpleTextChange(e.target.value, item.id)
                  }
                />

                <AiFillDelete
                  onClick={() => {
                    handleDeleteHeader(item.id);
                  }}
                />
              </div>
            );
          })}

          <div className="custom-field">
            <h6 className="heading">Questions</h6>

            <div className="custom-field">
              <input
                type="text"
                value={newQuestion.text}
                className="custom-field-question"
                onChange={handleNewQuestionTextChange}
              />
              <select
                value={newQuestion.type}
                onChange={handleNewQuestionTypeChange}
              >
                <option value="Text Box">Text Box</option>
                <option value="Radio Button">Radio Button</option>
                <option value="Check Box">Check Box</option>
              </select>
              <MdAddCircle
                onClick={() => {
                  handleNewQuestionSubmit();
                }}
              />
              <div
                style={{ display: "flex", gap: "15px", padding: " 20px 0px" }}
              >
                {(newQuestion.type === "Check Box" ||
                  newQuestion.type === "Radio Button") && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {newQuestion.type === "Check Box" && <BiCheckbox />}
                      {newQuestion.type === "Radio Button" && <BiCircle />}
                      <input
                        type="text"
                        value={optionText}
                        className="custom-field-question"
                        onChange={(e) => setOptionsText(e.target.value)}
                      />

                      <MdAddCircle
                        onClick={() => {
                          optionText && handleRadioSubmit();
                        }}
                      />
                    </div>
                    {options.map((item, index) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0px 20px",
                        }}
                      >
                        <div>
                          <input
                            type={
                              newQuestion.type === "Radio Button"
                                ? "radio"
                                : "checkbox"
                            }
                            value={item}
                          />
                          {item}
                        </div>
                        <div>
                          <BiMinus onClick={() => handleOption(index)} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {newQuestion.type === "Text Box" && (
                  <div>
                    <div style={{ marginTop: "25px" }}>
                      <Input
                        onChange={(e) => setTextValue(e.target.value)}
                        type="textarea"
                        name="text"
                        value={textValue}
                        id="exampleText"
                      />
                      <Input
                        type="checkbox"
                        name="checkboxVal"
                        value={mitigation}
                        id="checkboxVal"
                        onChange={(e) => setMitigation(e.target.checked)}
                      />
                      <Label for="checkbox">Mitigation option</Label>
                    </div>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      id="CorrectiveActionRequired"
                      name="CorrectiveActionRequired"
                      value="CorrectiveActionRequired"
                    />
                    Corrective Action Required
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="MandatoryCommentsRequired"
                      name="MandatoryCommentsRequired"
                      value="MandatoryCommentsRequired"
                    />
                    Mandatory Comments Required
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="MandatoryAttachmentRequired"
                      name="MandatoryAttachmentRequired"
                      value="MandatoryAttachmentRequired"
                    />
                    Mandatory Attachment
                  </div>
                </div>
              </div>
            </div>

            <div>
              {question.map((item, index) => {
                return (
                  <div>
                    <input
                      type="text"
                      value={item.text}
                      className="custom-field-question"
                      onChange={(e) => handleNewQuestionText(e, index)}
                    />
                    <select
                      defaultValue={item.type}
                      onChange={(e) => handleNewQuestionType(e, index)}
                    >
                      <option value="Text Box">Text Box</option>
                      <option value="Radio Button">Radio Button</option>
                      <option value="Check Box">Check Box</option>
                    </select>
                    <MdRefresh />
                    <BsFillGearFill onClick={()=>setSelectedIndex(index)} />
                    <AiFillDelete
                      onClick={() => {
                        handleDeleteQuestion(item.id);
                      }}
                    />
                   {index===selectedIndex&& <EditTemplate
                      index={index}
                      item={item}
                      question={question}
                      setQuestion={setQuestion}   
                    />}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="custom-field">
            <h6 className="heading">Attachment</h6>
          </div>
        </div>
      </div>
      <div className="lastButtons">
        <button> Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};
