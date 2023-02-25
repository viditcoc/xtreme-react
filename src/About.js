 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 


export default function About() {
  return (
    <>
    <Container fluid="md">
      <Row>
        <Col className='we-are mt-5'>
            <h2>ABOUT</h2>
            <h4 style={{letterSpacing:'1px',color:'#949494',    textTransform: 'uppercase'}}>
                <span style={{fontSize:'25px'}}>O</span>ur expertise, distilled into one page
            </h4>
        </Col>
        <div className="clearfix"></div>
        <div className=""><img src="data1/img/about-banner.jpg" alt="" className="img-responsive "/></div>
        <p className="text-center color-black mt40 " style={{fontSize: '1.3em'}}>
			Since 2005 we’ve been working with one clear purpose. <br/>
To add value to businesses through effective design.
<br/><br/>

Working with clients through a clear design process to clarify their purpose, objectives and market difference – their brand – and to ensure the effective communication of this through all touch points.
<br/><br/>
We are thinkers, designers, concept developers, illustrators, <br/>
copywriters, visualisers and makers. We are communicators.
<br/><br/>
In order to do this, we work with our clients and not for them. This ensures we understand them and their business and are able to produce work that not only fulfills the agreed brief but captures a true sense of their brand. In a world that is increasingly saturated with faceless design, marketing and PR, working in this way ensures we produce work for our clients that is as effective as possible. But don’t just take our word for it, we’re happy to put you in touch with some of our existing clients if you’d like to hear their thoughts.
<br/><br/>
Look through our recent work and when you’re ready talk to us
<br/><br/>
+91-9958-007676  or mail at: <span style={{fontFamily: 'open sans',  fontSize: '14px',  fontWeight: 600}}>xtremeadvertising@gmail.com</span>




		</p>
     </Row>
    </Container>
    
    </>
  )
}

