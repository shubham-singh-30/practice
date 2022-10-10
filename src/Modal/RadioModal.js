import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../NewTemplate.css";

export const RadioModal = ({ isRadioModal, setIsRadioModal }) => {
  const [noRadioBox, setNoOfRadioBox] =useState([]);
  const handleSave=()=>{
    console.log("radiobox",noRadioBox)
    setIsRadioModal(false)
}
  // to handle radio button selection change
  const handleRadio = (e, id) => {
    let text = e.target.value;
    const values = [...noRadioBox];
    values[id] = text;
    setNoOfRadioBox(values);
  };
  // to add number of radio button
  const handleSelect = (e) => {
    let num = parseInt(e.target.value);
    setNoOfRadioBox(Array(num).fill(""));
  };
  const handleCancel = () => {
    setIsRadioModal(false);
    setNoOfRadioBox([])
  }
  return (
    <Modal
      style={{
        minWidth: "600px",
      }}
      isOpen={isRadioModal}
    >
      <ModalHeader toggle={handleCancel} > Configure Check Box
       </ModalHeader>
      <ModalBody style={{ minHeight: "400px" }}>
        <h5>Np. of options</h5>
        <div style={{ marginTop: "25px" }}>
          <select
            className="form-select selectCustom"
            aria-label="Default select example"
            onChange={handleSelect}
          >
            <option selected>select</option>
            <option value="1">1</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
          </select>
          <div
            className="container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {noRadioBox.map((item, index) => (
              <div className="col-5">
                {" "}
                <h5 style={{ marginTop: "25px" }}>Radio Button {index + 1}</h5>
                <div style={{ marginTop: "25px" }}>
                  <select
                    className="form-select selectCustom"
                    aria-label="Default select example"
                    onChange={(e) => handleRadio(e, index)}
                  >
                    
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleCancel}>
          Cancel
        </Button>{" "}
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};
