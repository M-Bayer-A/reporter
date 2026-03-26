export default function CustomTable({ className }) {
  const colums = [{ key: "", label: "", colSpan: 1 }];
  return (
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
  );
}
