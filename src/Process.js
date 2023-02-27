import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
 
 
 


export default function Services() {
  return (
    <Container fluid="md" className="static-pages process">
      <Row>
        <Col className='we-are mt-5'>
        <h2>PROCESS</h2>
            <h4 style={{letterSpacing:'1px',color:'#949494',    textTransform: 'uppercase'}}>
                <span style={{fontSize:'25px'}}>A</span> CLEAR PROCESS WHICH DELIVERS RESULTS
            </h4>
        </Col>
        <div className="clearfix"></div>
        <div className=""><img src="data1/img/process-banner.jpg" alt="" className="img-responsive banner "/></div>
        <h3 className="text-center color-black mt-5 " style={{letterSpacing:0}}> 
		<span style={{fontSize:'29px'}}>D</span>esign is more than what you see, <br/>
        <span style={{fontSize:'29px'}}>D</span>esign is a process and a way of thinking.

	</h3>
        <p className=" color-black mt40 text-justify "  style={{fontSize: '1.3em'}}>
        Put simply, to design something is to plan, create and implement. Producing effective design adds one step to this, to measure outcomes and look for room to improve. These four things form our design process and are how we consistently deliver truly effective design solutions.



		</p>
     </Row>

     <Row className="mt-5 justify-content-around content">
         

 
    <Col className="col-sm-3 col-12 text-center ">
        <span className="services-icon"><img src="data1/img/Process-icon4.png" alt="" className=""/></span>
        <h3 className="ls4 mb25 ">PLAN</h3>
        <p>
        We begin every project at the beginning, by working with you to understand your business, its marketplace and its offering. From here, we’ll identify how design can have the greatest impact on your business and define a design brief accordingly.
        </p>
    </Col>
    <Col className="col-sm-3 col-12 text-center">
        <span className="services-icon"><img src="data1/img/Process-icon3.png" alt="" className=""/></span>
        <h3 className="ls4 mb25">CREATE</h3>
        <p>
        Once a brief is agreed, we work to identify the most effective solution available to meet its requirements. This is the most exciting part of every project and typically includes regular meetings and updates to ensure we arrive at a solution that everyone believes in.


        </p>
    </Col>
    <Col className="col-sm-3 col-12 text-center">
        <span className="services-icon"><img src="data1/img/Process-icon2.png" alt="" className=""/></span>
        <h3 className="ls4 mb25">IMPLEMENT</h3>
        <p>
        With a solution agreed, we make it happen. Constantly reviewing and refining our thoughts, and often collaborating with printers, digital developers and other suppliers, we ensure that the outcomes of our work are delivered on time and to the standard required.


        </p>
    </Col>
     
    <Col className="col-sm-3 col-12 text-center ">
        <span className="services-icon"><img src="data1/img/Process-icon1.png" alt="" className=""/></span>
        <h3 className="ls4 mb25 ">MEASURE</h3>
        <p>
        Once the work is implemented the project isn’t over for us. Wherever possible, we measure the results of our work to ensure it’s met all of the goals set-out in the brief. If a project can be strengthened further we look to start this process again, with new objectives.


        </p>
    </Col>
    
   
     </Row>
    </Container>
  )
}
