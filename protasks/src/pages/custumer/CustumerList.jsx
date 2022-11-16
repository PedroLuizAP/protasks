import React from "react";
import TitlePage from "../../components/TitlePage";
import {InputGroup, Form, Button} from "react-bootstrap";
import {useState} from "react";
import {useHistory} from "react-router-dom";


const custumers = [
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
  {
    id: 3,
    name: "Enterprise23",
    responsible: "Luiz3",
    contact: "1234563",
    situation: "acti3e",
  },
];
export default function CustumerList() {
  const history = useHistory();
  const [findTherm, setFindTherm] = useState("");
  const handleInputChange = (e) =>{
    setFindTherm(e.target.value)
  };

  const filterCustumers = custumers.filter((custumer) =>{
    return (Object.values(custumer).join(" ").toUpperCase().includes(findTherm.toUpperCase()));
  });

  const newCustumer = () =>{
    history.push("/custumer/detail");
  };

  return (
    <>
      <TitlePage title="Custumer List" >
        <Button variant="outline-secondary" onClick={newCustumer}>
          <i className="fas fa-plus me-2"/>
          New Custumer
        </Button>
      </TitlePage>

      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text >
          Find:
        </InputGroup.Text>
        <Form.Control placeholder="Find by name" onChange={handleInputChange}/>
      </InputGroup>

      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Responsible</th>
            <th scope="col">Contact</th>
            <th scope="col">Situation</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {filterCustumers.map((custumer) => (
            <tr key={custumer.id}>
              <td>{custumer.id}</td>
              <td>{custumer.name}</td>
              <td>{custumer.responsible}</td>
              <td>{custumer.contact}</td>
              <td>{custumer.situation}</td>
              <td>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => history.push( `/custurmer/detail/${custumer.id}`)}>
                    <i className="fas fa-user-edit me-2" />
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="fas fa-user-times me-2" />
                    Inactivate
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
