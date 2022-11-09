import React from "react";
import TitlePage from "../../components/TitlePage";

const custumer = [
  {
    id: 1,
    name: "Enterprise",
    responsible: "Pedro",
    contact: "123456",
    situation:"active"
  },
  {
    id: 2,
    name: "Enterprise2",
    responsible: "Luiz",
    contact: "123456",
    situation:"active"
  }
];
export default function CustumerList() {
  return (
    <>
      <TitlePage title="Custumer List" />
      <table className="table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </>
  );
}
