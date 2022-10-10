import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import "../NewTemplate.css";

export const TextModal = ({ isTextModal, setIsTextModal }) => {
  const [textValue, setTextValue] = useState("");
  // to save text value
  const handleSave = () => {
    console.log("textValue", textValue);
    setIsTextModal(false);
  };
  const handleCancel = () => {
    setTextValue("");
    setIsTextModal(false);
  }
  return (
    <Modal
      style={{
        minWidth: "600px",
      }}
      isOpen={isTextModal}
    >
      <ModalHeader toggle={handleCancel} >
         Configure Text Box 
         
         </ModalHeader>
      <ModalBody style={{ minHeight: "400px" }}>
        <Input type="checkbox" name="checkboxVal" id="checkboxVal" />
        <Label for="checkbox">Mitigation option</Label>

        <div style={{ marginTop: "25px" }}>
          <Label for="exampleText">Text box</Label>
          <Input
            onChange={(e) => setTextValue(e.target.value)}
            type="textarea"
            name="text"
            id="exampleText"
          />
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
