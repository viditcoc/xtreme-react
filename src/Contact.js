import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 

export default function Services() {
  return (
    <Container fluid="md" className="static-pages process">
      <Row>
        <Col className='we-are mt-5'>
        <h2>CONTACT US</h2>
            <h4 style={{letterSpacing:'1px',color:'#949494',    textTransform: 'uppercase'}}>
                <span style={{fontSize:'25px'}}>A</span> CLEAR PROCESS WHICH DELIVERS RESULTS
            </h4>
        </Col>
        <div className="clearfix"></div>
        <div className="">
            <div className='mt-2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.1637436216!2d76.81306943179119!3d28.647279935102492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1659191362772!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" ></iframe>
		    </div>	
        </div>
 
     </Row>

     <Row>
        <Col className="col-sm-6 color-black">
        <h5 className="text-left color-black mt-5 text-uppercase"> 
            <span style={{fontSize:'25px'}}>N</span>ew project enquiries


        </h5>
        <div className="text-left color-black mt40 mb0 text-uppercase" style={{fontWeight: 500}}> 
            have a informal chat about a new project


        </div>
        <span style={{fontFamily: 'open sans',  fontSize: '14px',  fontWeight: 600}}>xtremeadvertising@gmail.com</span>
        </Col>
        <Col className="col-sm-6 color-black">
	<h4 className="text-left color-black mt40 "> 
		&nbsp;


	</h4>
	<div className="text-left color-black mt40 mb0 text-uppercase" style={{fontWeight: 500}}> 
    DESIGN OFFICE
	
	</div>
	<span style={{fontFamily: 'open sans',  fontSize: '14px',  fontWeight: 600}}>Delhi, India</span>

 
	</Col>
     </Row>

     <Row>
        <Col>
            <h5 className="text-left color-black mt40 mb-0" style={{ fontWeight: 400}}> 
                <span style={{fontSize:'20px'}}>R</span>akesh  <span style={{fontSize:'20px'}}>R</span>oshan <br/>	
            </h5>
            <span style={{fontFamily: 'open sans',  fontSize: '14px',  fontWeight: 600}}>+91-9958-007676</span></Col>
     </Row>

      
    </Container>
  )
}
