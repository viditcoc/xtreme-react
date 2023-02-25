 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swiper from "./Swiper";
import Workdata from "./Workdata";
import LoadingOverlay from './loading';

function Homepage() {
  return (
    <>
    <LoadingOverlay/>
    <Swiper/>
    <Container fluid="md">
      <Row>
        <Col className='we-are mt-5'>
              
            <h2>WE ARE A <span style={{color:'#949494'}}>BRANDING &amp;</span></h2>
            <h2><span style={{color:'#949494'}}>PACKAGING</span> COMPANY</h2>
            <div style={{height:'40px'}}></div>
            
        </Col>
      </Row>
    </Container>
    <Workdata/>
    </>
  )
}

export default Homepage