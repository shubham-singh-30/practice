import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../NewTemplate.css";

export const SelectModal = ({
  isSelect,
  setIsSelect,
  setQuestion,
  question,
  index,
  setIndex
}) => {
  const [ques, setQues] = useState("");
  const [option, setOption] = useState("");
  let selected = question[index];

  // to save question ands option 
  //index is used to edit the question 
  const handleSave = () => {
    console.log("question", ques);
    console.log("option", option);
    if(index!==null){
      if (ques || option) {
      let a = [...question];
      a[index].option = option;
      a[index].question = ques;
      setQuestion(a)
      setIsSelect(false);
      setIndex(null)
      return
      }
    }
    else if (ques || option) {
      let a = question;
      a.push({ option: option, question: ques });
      setQuestion(a);
      setIsSelect(false);
      return
    }
   
  };

  let text1 = "Your favourite uniliver Products";
  let text2 = "How often do you use buy Unilever Products";
  let text3 = "Rate Unilever Products";
  const handleCancel = () => {
    setOption("");
    setQues("");
    setIsSelect(false);
  }
  return (
    <Modal
      style={{
        minWidth: "600px",
      }}
      isOpen={isSelect}
    >
      <ModalHeader toggle={handleCancel}> Connection Question
   
      </ModalHeader>
      <ModalBody style={{ minHeight: "400px" }}>
        <h5>Select Question</h5>
        <div style={{ marginTop: "25px" }}>
          <select
            className="form-select selectCustom"
            aria-label="Default select example"
            onChange={(e) => setQues(e.target.value)}
          >
            <option value="" selected>
              Select
            </option>
            <option selected={selected?.question === text1} value={text1}>
              {text1}
            </option>
            <option selected={selected?.question === text2} value={text2}>
              {text2}
            </option>
            <option selected={selected?.question === text3} value={text3}>
              {text3}
            </option>
          </select>
          <h5 style={{ marginTop: "25px" }}>Select Option</h5>
          <div style={{ marginTop: "25px" }}>
            <select
              className="form-select selectCustom"
              aria-label="Default select example"
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="" selected>
                Select
              </option>
              <option value="TextBox" selected={selected?.option === "TextBox"}>
                TextBox
              </option>
              <option
                value="Radio Button"
                selected={selected?.option === "Radio Button"}
              >
                Radio Button
              </option>
              <option
                value="CheckBox"
                selected={selected?.option === "CheckBox"}
              >
                CheckBox
              </option>
            </select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="secondary"
          onClick={handleCancel}
        >
          Cancel
        </Button>{" "}
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};
