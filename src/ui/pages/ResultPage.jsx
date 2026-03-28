import { useSelector } from "react-redux";
import { formSelector } from "../../application/states/form/formSelector";
import numberHelper from "../../helpers/numberHelper";
import SingleColTable from "../components/resultPage/SingleColTable";
import Info from "../components/resultPage/Info";
import { useRef } from "react";
import { toPng } from "html-to-image";
import CustomButton from "../components/shared/CustomButton";
import { customIcons, getIcon } from "../../helpers/iconHelper";
import CustomIconButton from "../components/shared/CustomIconButton";
import { useNavigate } from "react-router";

export default function ResultPage() {
  //
  const ref = useRef();
  const navigate = useNavigate();
  //
  const credentials = useSelector(formSelector.credentials);
  const sales = useSelector(formSelector.sales);
  const expenses = useSelector(formSelector.expenses);
  const advances = useSelector(formSelector.advances);
  const notes = useSelector(formSelector.notes);
  //
  const expensesSum = expenses.reduce(
    (acc, current) => acc + numberHelper.parseToNumber(current.value),
    0
  );
  const advancesSum = advances.reduce(
    (acc, current) => acc + numberHelper.parseToNumber(current.value),
    0
  );
  const innerSum =
    numberHelper.parseToNumber(sales.alAlmin) +
    numberHelper.parseToNumber(sales.alRasheed) -
    numberHelper.parseToNumber(notes.returns);

  const outerSum =
    numberHelper.parseToNumber(sales.cash) + expensesSum + advancesSum;
  //
  const info = [
    {
      label: "مجمل المبيعات :",
      value: numberHelper.parseToString(innerSum),
      Details: [
        {
          label: "مبيعات الأمين :",
          value: numberHelper.parseToString(sales.alAlmin),
        },
        {
          label: "مبيعات الرشيد :",
          value: numberHelper.parseToString(sales.alRasheed),
        },
        {
          label: "مرتجع المبيعات :",
          value: numberHelper.parseToString(notes.returns),
        },
      ],
    },
    {
      label: "مجمل دخل الصندوق :",
      value: numberHelper.parseToString(outerSum),
      Details: [
        {
          label: "صافي النقد :",
          value: numberHelper.parseToString(sales.cash),
        },
        {
          label: "مجموع المصاريف :",
          value: numberHelper.parseToString(expensesSum),
        },
        {
          label: "مجموع السلف :",
          value: numberHelper.parseToString(advancesSum),
        },
      ],
    },
    {
      label: "قيمة الخطأ :",
      value: numberHelper.parseToString(outerSum - innerSum),
    },
  ];
  //
  const handleDownload = async () => {
    const dataUrl = await toPng(ref.current);

    const link = document.createElement("a");
    link.download = "page.png";
    link.href = dataUrl;
    link.click();
  };
  //
  return (
    <div className="w-full md:w-120 flex flex-col py-10">
      <div className="w-full flex flex-row justify-around items-center px-5">
        <CustomIconButton
          className={"h-10"}
          icon={getIcon(customIcons.download)}
          onClick={handleDownload}
        />
        <img className="h-15" src={getIcon(customIcons.cashlogLogo)} />

        <CustomIconButton
          className={"h-10"}
          icon={getIcon(customIcons.edit)}
          onClick={() => navigate("/form")}
        />
      </div>

      <div
        ref={ref}
        dir="rtl"
        className="w-full flex flex-col px-5 gap-5 bg-white font-[Tajawal] list-inside"
      >
        <hr />
        <div className="text-center">
          <h1 className="text-2xl font-bold pb-2">
            التقرير {credentials.shift == "evening" ? " المسائي " : " الصباحي "}
            للمبيعات
          </h1>
          <h4>{credentials.date}</h4>
          <h4>{credentials.name}</h4>
        </div>
        {info.map((i) => (
          <div>
            <Info className={"text-xl"} label={i.label} value={i.value} />
            {!i.Details ? (
              <></>
            ) : (
              <div className="w-full flex flex-row p-0.5 gap-4">
                <div className="w-0 grow border" />
                <div className=" w-full flex flex-col">
                  {i.Details.map((d) => (
                    <Info label={d.label} value={d.value} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="w-full flex flex-row border-2 rounded-2xl">
          <SingleColTable label={"مصاريف"} details={expenses} />
          <div className="w-0 grow border" />
          <SingleColTable label={"سِلف"} details={advances} />
        </div>
        <hr />
      </div>
    </div>
  );
}
