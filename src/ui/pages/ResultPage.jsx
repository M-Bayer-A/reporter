import { useSelector } from "react-redux";
import { formSelector } from "../../application/states/form/formSelector";
import numberHelper from "../../helpers/numberHelper";
import SingleColTable from "../components/resultPage/SingleColTable";
import Info from "../components/resultPage/Info";

export default function ResultPage() {
  //
  const credentials = useSelector(formSelector.credentials);
  const sales = useSelector(formSelector.sales);
  const expenses = useSelector(formSelector.expenses);
  const advances = useSelector(formSelector.advances);
  const notes = useSelector(formSelector.notes);
  //
  const expensesSum = expenses.reduce(
    (acc, current) => acc + numberHelper.parseToNumber(current.value),
    0,
  );
  const advancesSum = advances.reduce(
    (acc, current) => acc + numberHelper.parseToNumber(current.value),
    0,
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
  return (
    <div
      dir="rtl"
      className="w-full md:w-100 flex flex-col gap-5 p-5 font-[Tajawal] list-inside"
    >
      <hr />
      <div className="text-center">
        <h1 className="text-2xl font-bold pb-2">
          التقرير {credentials.shift == "evening" ? " المسائي " : " الصباحي "}
          للمبيعات
        </h1>
        <h4>{credentials.date}</h4>
        <h4>باير</h4>
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
    </div>
  );
}
