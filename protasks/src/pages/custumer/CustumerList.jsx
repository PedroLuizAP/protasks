import React from "react";
import TitlePage from "../../components/TitlePage";

const custumer = [
  {
    id: 1,
    name: "Enterprise",
    responsible: "Pedro",
    contact: "123456",
    situation: "active",
  },
  {
    id: 2,
    name: "Enterprise2",
    responsible: "Luiz",
    contact: "123456",
    situation: "active",
  },
];
export default function CustumerList() {
  return (
    <>
      <TitlePage title="Custumer List" />
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {custumer.map((c) => {
            <tr key={c.id}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div>
                  
                </div>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
