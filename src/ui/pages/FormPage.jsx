import CradentialsInputs from "../components/formPage/CredentialsInputs";
import SalesInputs from "../components/formPage/SalesInputs";
import CustomButton from "../components/shared/customButton";
import CustomProgressBar from "../components/shared/CustomProgressBar";
import ExpensesInputs from "../components/formPage/ExpensesInputs";
import { useDispatch, useSelector } from "react-redux";
import { formSelector } from "../../application/states/form/formSelector";
import {
  moveToNextStep,
  moveToPreviousStep,
} from "../../application/states/form/formSlice";
import AdvancesInputs from "../components/formPage/AdvancesInputs";
import NotesInputs from "../components/formPage/NotesInputs";
import { useNavigate } from "react-router";

export default function FormPage() {
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const step = useSelector(formSelector.step);
  const steps = [
    CradentialsInputs,
    SalesInputs,
    ExpensesInputs,
    AdvancesInputs,
    NotesInputs,
  ];
  const CurrentStepInputs = steps[step - 1];
  //
  const handleNextButton = () => {
    if (step == 5) {
      navigate("/result");
    } else {
      dispatch(moveToNextStep());
    }
  };
  const handlePreviousButton = () => {
    if (step != 1) {
      dispatch(moveToPreviousStep());
    }
  };
  //
  return (
    <div className="w-full md:w-100 flex flex-col gap-5 p-5">
      <div className="w-full flex flex-col items-center gap-2.5 text-2xl font-bold font-[Tajawal]">
        <label>التقدم</label>
        <CustomProgressBar value={step} max={5} className={"w-full"} />
      </div>
      <div
        dir="rtl"
        className="w-full flex flex-col gap-5 p-5
            border-3 rounded-2xl  font-[Cairo]"
      >
        <CurrentStepInputs />
      </div>
      <div className="w-full flex flex-row gap-2 font-bold font-[Tajawal]">
        <CustomButton
          className={"w-full bg-white text-black "}
          title={"السابق"}
          onClick={handlePreviousButton}
        />
        <CustomButton
          className={"w-full bg-black text-white"}
          title={step != 5 ? "التالي" : "إنهاء"}
          onClick={handleNextButton}
        />
      </div>
    </div>
  );
}
