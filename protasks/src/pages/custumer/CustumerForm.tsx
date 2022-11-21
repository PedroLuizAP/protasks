import React from 'react'
import { Button } from 'react-bootstrap';
import TitlePage from '../../components/TitlePage';
import { useNavigate, useParams } from 'react-router-dom';

const CustumerForm:React.FC = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <>
      <TitlePage title={"Custumer Detail " + (id !== undefined ? id : "")} >
        <Button variant='outline-secondary' onClick={() => navigate(-1)}>
          <i className='fas fa-arrow-left me-2' />
          Return
        </Button>
      </TitlePage>
      <div>

      </div>
    </>
  )
}

export default CustumerForm;
