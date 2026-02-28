import { useState } from "react";
import CustomButton from "../shared/customButton";
import CustomTextInput from "../shared/CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import { formSelector } from "../../../application/states/form/formSelector";
import {
  addExpense,
  deleteExpense,
} from "../../../application/states/form/formSlice";
import numberHelper from "../../../helpers/numberHelper";

export default function ExpensesInputs() {
  const [inputs, setInputs] = useState({ label: "", value: "" });
  const dispatch = useDispatch();
  const expenses = useSelector(formSelector.expenses);
  //
  const handleAdd = () => {
    dispatch(addExpense(inputs));
    setInputs({ label: "", value: "" });
  };
  const handleDelete = (id) => dispatch(deleteExpense(id));
  //
  const isAddButtonDisable = () => {
    const isLabelEmpty = inputs.label == null || inputs.label == "";
    const isValueEmpty = inputs.value == null || inputs.value == "";
    return isLabelEmpty || isValueEmpty;
  };
  //
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="font-bold">المصاريف</h1>
        {/*  */}
        <div className="w-full flex flex-col gap-2.5">
          {expenses.map((e) => (
            <div key={e.id} className="w-full flex flex-row items-center gap-2">
              <button onClick={() => handleDelete(e.id)}>❌</button>
              <label>{e.label}</label>
              <p className="grow text-left">
                {numberHelper.parseToString(e.value)}
              </p>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="w-full flex flex-row gap-2">
          <CustomTextInput
            className={"w-full"}
            placeholder={"العنوان"}
            value={inputs.label}
            onChange={(value) => setInputs({ ...inputs, label: value })}
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
