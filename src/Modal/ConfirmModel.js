import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export const ConfirmModal = ({isOpen,setOpen,text,id,handleRemove,handleDescRemove}) => {
    const handleClick=()=>{
        if(text==="text"){
            handleRemove();
        }
        if(text==="desc"){
            handleDescRemove(id)
        }
    }
  return (
    <Modal isOpen={isOpen} >
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
       are you sure you want to remove
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleClick}>
          Remove
        </Button>{" "}
        <Button color="secondary" onClick={()=>setOpen(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
