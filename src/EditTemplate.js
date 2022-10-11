import React,{useState} from "react";
import { BiMinus, BiCheckbox, BiCircle } from "react-icons/bi";
import { MdAddCircle } from "react-icons/md";
import { Label, Input } from "reactstrap";

export const EditTemplate = (props) => {
  const {  item, index ,question ,setQuestion } =
    props;
  const [editedOption, setEditedOption] = useState("");

    const handleAddNewOption = (index) => {
        const values = [...question];
        values[index].options.push(editedOption);
        setQuestion(values);
        setEditedOption("");
      };
      const handleDeleteOption = (itemIndex, index) => {
        const values = [...question];
        let val = values[itemIndex].options.filter((i, id) => id !== index);
        values[itemIndex].options=val
        setQuestion(values);
      };
  return (
    <div style={{ display: "flex", gap: "15px", padding: " 20px 0px" }}>
      {(item.type === "Check Box" || item.type === "Radio Button") && (
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {item.type === "Check Box" && <BiCheckbox />}
            {item.type === "Radio Button" && <BiCircle />}
            <input
              type="text"
              value={editedOption}
              className="custom-field-question"
              onChange={(e) => setEditedOption(e.target.value)}
            />

            <MdAddCircle
              onClick={() => {
                editedOption && handleAddNewOption(index);
              }}
            />
          </div>
          {item.options.map((item, id) => (
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
                  type={item.type === "Radio Button" ? "radio" : "checkbox"}
                  value={item}
                />
                {item}
              </div>
              <div>
                <BiMinus
                onClick={() =>
                    handleDeleteOption(index,id)
                }
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {item.type === "Text Box" && (
        <div>
          <div style={{ marginTop: "25px" }}>
            <Input
              //   onChange={(e) => setTextValue(e.target.value)}
              type="textarea"
              name="text"
              //   value={textValue}
              id="exampleText"
            />
            <Input
              type="checkbox"
              name="checkboxVal"
              //   value={mitigation}
              id="checkboxVal"
              //   onChange={(e) => setMitigation(e.target.checked)}
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
  );
};
