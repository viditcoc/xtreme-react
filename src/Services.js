import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 

export default function Services() {
  return (
    <Container fluid="md" className="static-pages">
      <Row>
        <Col className='we-are mt-5'>
        <h2>SERVICES</h2>
            <h4 style={{letterSpacing:'1px',color:'#949494',    textTransform: 'uppercase'}}>
                <span style={{fontSize:'25px'}}>W</span>HERE WE ADD VALUE FOR OUR CLIENTS
            </h4>
        </Col>
        <div className="clearfix"></div>
        <div className=""><img src="data1/img/services-banner.jpg" alt="" className="img-responsive banner "/></div>
        <p className="text-center color-black mt40 "  style={{fontSize: '1.3em'}}>
			At xtreme design we not only believe in design, we believe in it’s <br/> potential to change perceptions and improve businesses.<br/>
        <br/><br/>
        Our role is to deliver design solutions to meet our clients objectives. Whilst many <br/>
        clients engage us for design consultancy and brand development, many continue to work <br/>with us on clear deliverables such as printed collateral and digital marketing.

		</p>
     </Row>

     <Row className="mt-5">
         

 
    <Col className="col-sm-4 text-center ">
        <span className="services-icon"><img src="data1/img/services1.png" alt="" className=""/></span>
        <h3 className="ls4 mb25 ">positioning</h3>
        <p>
            You know what makes<br/> your business special.
            <br/><br/>
            We will work with you to <br/>understand your business, <br/>clarify your brand and identify a position in your market.<br/><br/>
            Knowing your position is <br/>essential to delivering<br/> work that reflects your <br/>business.
        </p>
    </Col>
    <Col className="col-sm-4 text-center">
        <span className="services-icon"><img src="data1/img/services2.png" alt="" className=""/></span>
        <h3 className="ls4 mb25">strategy</h3>
        <p>
            You know where you <br/>want your business to go, <br/>its goals and targets.<br/><br/>
            We will help you define<br/> these clearly and show <br/>you how design can help <br/>you take your business<br/> there.
            A clear strategy ensures <br/>you use design effectively<br/> to achieve you goals.
        </p>
    </Col>
    <Col className="col-sm-4 text-center">
        <span className="services-icon"><img src="data1/img/services3.png" alt="" className=""/></span>
        <h3 className="ls4 mb25">communication</h3>
        <p>
            You know that you need to<br/> engage your customers with <br/>your business.<br/><br/>
            From visual identities to user<br/> experiences, we design <br/>effective solutions for all<br/> brand touch points.
            <br/><br/>
            Effective communication<br/> builds your brand and your<br/> business.
        </p>
    </Col>
    <div className="clearfix"></div>
    <Col className="col-sm-4 text-center ">
        <span className="services-icon"><img src="data1/img/services4.png" alt="" className=""/></span>
        <h3 className="ls4 mb25 ">BRAND</h3>
        <p>
            Product Packaging<br/>
            Brand Identity<br/>
            Brand Development<br/>
            Design Strategy
        </p>
    </Col>
    <Col className="col-sm-4 text-center ">
        <span className="services-icon"><img src="data1/img/services5.png" alt="" className=""/></span>
        <h3 className="ls4 mb25 ">PRINT</h3>
        <p>Business Collateral<br/>
            Brochures<br/>
            merchandising<br/>
            Brand Promotion
        </p>
    </Col>
    <Col className="col-md-4 text-center ">
        <span className="services-icon"><img src="data1/img/services6.png" alt="" className=""/></span>
        <h3 className="ls4 mb25 ">DIGITAL</h3>
        <p>
            Responsive Websites<br/>
            Smartphone Apps<br/>
            Email Marketing<br/>
            Digital Strategy
        </p>
    </Col>
   
     </Row>
    </Container>
  )
}
