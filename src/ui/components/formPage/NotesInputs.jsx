import { useDispatch, useSelector } from "react-redux";
import CustomTextArea from "../shared/CustomTextArea";
import CustomTextInput from "../shared/CustomTextInput";
import { formSelector } from "../../../application/states/form/formSelector";
import {
  setNotesReturns,
  setNotesText,
} from "../../../application/states/form/formSlice";

export default function NotesInputs() {
  const dispatch = useDispatch();
  const notes = useSelector(formSelector.notes);
  //
  const handleNoteInput = (value) => dispatch(setNotesText(value));
  const handleReturnsInput = (value) => dispatch(setNotesReturns(value));
  //
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <label>مرتجع المبيعات </label>
        <CustomTextInput
          type="number"
          value={notes.returns}
          onChange={handleReturnsInput}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>الفترة</label>
        <CustomTextArea
          className={"h-25"}
          value={notes.text}
          onChange={handleNoteInput}
        />
      </div>
    </>
  );
}
