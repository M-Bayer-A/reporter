import CustomTextInput from "../shared/CustomTextInput";
import CustomDatePicker from "../shared/CustomDatePicker";
import CustomSelect from "../shared/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { formSelector } from "../../../application/states/form/formSelector";
import {
  setCredentialsDate,
  setCredentialsName,
  setCredentialsShift,
} from "../../../application/states/form/formSlice";
import dateHelper from "../../../helpers/dateHelper";

export default function CredentialsInputs() {
  //
  const dispatch = useDispatch();
  const { name, shift, date } = useSelector(formSelector.credentials);
  const options = [
    { value: "morning", label: "صباحي" },
    { value: "evening", label: "مسائي" },
  ];
  //
  const handleOnChangeName = (value) => dispatch(setCredentialsName(value));
  const handleOnChangeShift = (value) => dispatch(setCredentialsShift(value));
  const handleOnChangeDate = (value) =>
    dispatch(setCredentialsDate(dateHelper.parseToString(value)));
  //
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <label>الاسم</label>
        <CustomTextInput
          placeholder={"مثل: محمد باير العلي"}
          value={name}
          onChange={handleOnChangeName}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>الفترة</label>
        <CustomSelect
          placeholder={"صباحي / مسائي"}
          options={options}
          value={shift}
          onChange={handleOnChangeShift}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>التاريخ</label>
        <CustomDatePicker
          className={"w-full"}
          value={dateHelper.parseToDate(date)}
          onChange={handleOnChangeDate}
        />
      </div>
    </>
  );
}
