import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../NewTemplate.css";

export const SelectModalCheckBox = ({ isCheckbox, setIsCheckBox }) => {
  const [noOfCheckBox, setNoOfCheckBox] = useState([]);
  const handleSave=()=>{
        console.log("checkbox",noOfCheckBox)
        setIsCheckBox(false)
}
  const handleCheckBox = (e, id) => {
    let text = e.target.value;
    const values = [...noOfCheckBox];
    values[id] = text;
    setNoOfCheckBox(values);
  };
  const handleSelect = (e) => {
    let num = parseInt(e.target.value);
    setNoOfCheckBox(Array(num).fill(""));
  };
  const handleCancel = () => {
    setIsCheckBox(false);
    setNoOfCheckBox([])
  }
  return (
    <Modal
      style={{
        minWidth: "600px",
      }}
      isOpen={isCheckbox}
    >
      <ModalHeader toggle={handleCancel}> Configure Check Box 
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
            {noOfCheckBox.map((item, index) => (
              <div className="col-5">
                {" "}
                <h5 style={{ marginTop: "25px" }}>CheckBox {index + 1}</h5>
                <div style={{ marginTop: "25px" }}>
                  <select
                    className="form-select selectCustom"
                    aria-label="Default select example"
                    onChange={(e) => handleCheckBox(e, index)}
                  >
                    <option value="Walls" selected>
                      Walls
                    </option>
                    <option value="Comfort">Comfort</option>
                    <option value="Hellman's">Hellman's</option>
                    <option value="lifebuoy">lifebuoy</option>
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
