import React, { useState, useEffect } from 'react';
import { Hostname } from './includes/config';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
 


export default function Clients() {
  const [client, setClients] = useState([]);

  const getClientsData = ()=>{
    // fetch(Hostname+"/clients")
    fetch("data1/json/clients.json")
    .then((res)=> res.json())
    .then((res)=>{
      // console.log(res.data)
      setClients(res);
    })
  }

  useEffect(()=>{
    getClientsData();
  },[])

    

  return (
    <Container fluid="md" className="static-pages client-rrd">
      <Row>
        <Col className='we-are mt-5'>
        <h2>CLIENTS</h2>
             
        </Col>
        <div className="clearfix"></div>
 
      </Row>

      <Row>

      {client.map((item,i)=>{
        return(
          <Col key={i} className="col-sm-3 col-xs-6 pdnonemob mb10mob">
            <img className="logos" src={"data1/client-img/"+item.client_image} />
          </Col>
        )
      })}
        
      </Row>
      
    </Container>
  )
}
