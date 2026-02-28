import { useState } from "react";
import CustomButton from "../shared/customButton";
import CustomTextInput from "../shared/CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import { formSelector } from "../../../application/states/form/formSelector";
import {
  addAdvance,
  deleteAdvance,
} from "../../../application/states/form/formSlice";
import numberHelper from "../../../helpers/numberHelper";

export default function AdvancesInputs() {
  const [inputs, setInputs] = useState({ name: "", value: "" });
  const dispatch = useDispatch();
  const advances = useSelector(formSelector.advances);
  //
  const handleAdd = () => {
    dispatch(addAdvance(inputs));
    setInputs({ name: "", value: "" });
  };
  const handleDelete = (id) => dispatch(deleteAdvance(id));
  //
  const isAddButtonDisable = () => {
    const isNameEmpty = inputs.name == null || inputs.name == "";
    const isValueEmpty = inputs.value == null || inputs.value == "";
    return isNameEmpty || isValueEmpty;
  };
  //
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-bold">السِلف</h1>

        {/*  */}
        <div className="w-full flex flex-col gap-2.5">
          {advances.map((a) => (
            <div key={a.id} className="w-full flex flex-row items-center gap-2">
              <button onClick={() => handleDelete(a.id)}>❌</button>
              <label>{a.name}</label>
              <p className="grow text-left">
                {numberHelper.parseToString(a.value)}
              </p>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="w-full flex flex-row gap-2">
          <CustomTextInput
            className={"w-full"}
            placeholder={"الاسم"}
            value={inputs.name}
            onChange={(value) => setInputs({ ...inputs, name: value })}
          />
          <CustomTextInput
            type="number"
            className={"w-full"}
            placeholder={"القيمة"}
            value={inputs.value}
            onChange={(value) => setInputs({ ...inputs, value: value })}
          />
        </div>
        <CustomButton
          className={
            "w-40 bg-green-300 border-2 border-green-950 text-green-950"
          }
          title={"إضافة"}
          onClick={handleAdd}
          disabled={isAddButtonDisable()}
        />
      </div>
    </>
  );
}
