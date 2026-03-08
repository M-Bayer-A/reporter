import { useDispatch, useSelector } from "react-redux";
import CustomTextInput from "../shared/CustomTextInput";
import { formSelector } from "../../../application/states/form/formSelector";
import {
  setSalesAlAmin,
  setSalesAlRasheed,
  setSalesCash,
} from "../../../application/states/form/formSlice";

export default function SalesInputs() {
  //
  const dispatch = useDispatch();
  const { alAlmin, alRasheed, cash } = useSelector(formSelector.sales);
  //
  const handleAlAminInput = (value) => dispatch(setSalesAlAmin({ value }));
  const handleAlRasheedInput = (value) =>
    dispatch(setSalesAlRasheed({ value }));
  const handleCashInput = (value) => dispatch(setSalesCash({ value }));
  //
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <label>مبيعات الأمين</label>
        <CustomTextInput
          type="number"
          value={alAlmin}
          onChange={handleAlAminInput}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>مبيعات الرشيد</label>
        <CustomTextInput
          type="number"
          value={alRasheed}
          onChange={handleAlRasheedInput}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label>صافي الصندوق</label>
        <CustomTextInput
          type="number"
          value={cash}
          onChange={handleCashInput}
        />
      </div>
    </>
  );
}
