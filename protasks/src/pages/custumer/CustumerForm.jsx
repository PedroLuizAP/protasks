import React from 'react'
import { Button } from 'react-bootstrap';
import TitlePage from './../../components/TitlePage';
import { useHistory, useParams } from 'react-router-dom';

export default function CustumerForm() {
  let history = useHistory();
  let {id} = useParams();
  return (
    <>
    <TitlePage title={"Custumer Detail " + (id !== undefined ? id : "")} >
      <Button variant='outline-secondary' onClick={() => history.goBack()}>
        <i className='fas fa-arrow-left me-2'/>
        Return
      </Button>
    </TitlePage>
    <div>

    </div>
  </>
  )
}
