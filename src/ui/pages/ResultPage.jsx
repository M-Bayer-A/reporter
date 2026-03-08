import { useSelector } from "react-redux";
import { formSelector } from "../../application/states/form/formSelector";
import numberHelper from "../../helpers/numberHelper";

export default function ResultPage() {
  //
  const credentials = useSelector(formSelector.credentials);
  const sales = useSelector(formSelector.sales);
  const expenses = useSelector(formSelector.expenses);
  const advances = useSelector(formSelector.advances);
  const notes = useSelector(formSelector.notes);
  let sum = 0;

  expenses.forEach((a) => (sum += a.value));
  advances.forEach((a) => (sum += a.value));

  const info = [
    {
      label: "مبيعات الأمين:",
      value: numberHelper.parseToString(sales.alAlmin),
    },
    {
      label: "مبيعات الرشيد:",
      value: numberHelper.parseToString(sales.alRasheed),
    },
    {
      label: "صافي الصندوق:",
      value: numberHelper.parseToString(sales.cash),
    },
    {
      label: "مجمل النفقات:",
      value: numberHelper.parseToString(sum),
    },
    {
      label: "مرتجع المبيعات:",
      value: numberHelper.parseToString(notes.returns),
    },
  ];
  //
  return (
    <div
      dir="rtl"
      className="w-full md:w-100 flex flex-col gap-5 p-5 font-[Tajawal] list-inside"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold pb-2">
          التقرير {credentials.shift == "evening" ? " المسائي " : " الصباحي "}
          للمبيعات
        </h1>
        <h4>{credentials.date}</h4>
        <h4>{credentials.name}</h4>
      </div>
      <table className="w-full table-fixed">
        <tbody>
          {info.map((i) => (
            <tr>
              <td>
                <li>{i.label}</li>
              </td>
              <td>{i.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*  */}
      <div className="w-full flex flex-row border-2">
        <table className="w-full h-fit">
          <thead>
            <tr>
              <th className="border-b-2 p-1" colSpan={2}>
                مصاريف
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.label}>
                <td className="p-1">{e.name}</td>
                <td className="p-1">{numberHelper.parseToString(e.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-0 grow border" />
        <table className="w-full h-fit">
          <thead>
            <tr>
              <th className="border-b-2 p-1" colSpan={2}>
                سِلف
              </th>
            </tr>
          </thead>
          <tbody>
            {advances.map((e) => (
              <tr key={e.name}>
                <td className="p-1">{e.name}</td>
                <td className="p-1">{numberHelper.parseToString(e.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  */}
      <div className="flex flex-col gap-2">
        <li>الملاحظات:</li>
        <p className="w-full overflow-hidden text-ellipsis whitespace-pre-line">
          {notes.text}
        </p>
      </div>
    </div>
  );
}
