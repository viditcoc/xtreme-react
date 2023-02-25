import React, { useState, useEffect } from 'react';
import { Hostname } from './config';
 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Modal from 'react-bootstrap/Modal';

function Workdata() {
    const [showDetailModal, setDetailModal] = useState(false);
    const [detailStack, setdetailStack] = useState({});

    const [Work, fetchWork] = useState([]);
    const [details, fetchDetails] = useState([]);

    const handleClose = () => setDetailModal(false);

    const getWorkData=()=>{
        // fetch(Hostname+"/work")
        fetch("data1/json/work.json")
        .then((res)=> res.json())
        .then((res) => {
            // console.log(res)
            fetchWork(res)
        })  
    }

    const fetchWorkDetail=(id)=>{
        if(id!=null){
            // fetch(Hostname+"/work/"+id)
            fetch("data1/json/work.json")
            .then((res)=> res.json())
            .then((res) => {

                // fetchDetails(res.data);
                let resp = res.filter(d=>{
                    return d.id == id
                })[0];
                
                // console.log(resp)
                setDetailModal(true);
                let obj = {
                    id: resp.id,
                    product_type: resp.product_type,
                    tag_line: resp.tag_line,
                    client: resp.client,
                    big_image: resp.big_image
                }
                setdetailStack(detailStack => ({
                    ...detailStack,
                    ...obj
                }))
                
            }) 
        } 
    }

    useEffect(()=>{
        getWorkData(); 
        fetchWorkDetail(); 
    }, []);

  return (
     <>
     <div className='text-center mb-5'>
     <h3 className="Our-work">OUR WORK</h3>
            <hr className="work-title-hr"></hr>
            <h4 style={{letterSpacing:'3px',    fontWeight: 500}}>A SELECTION OF RECENT PROJECTS</h4>
            </div>
    <div className="DR-brand">
    <div id="faq-result">
        
        <Row>
        {Work.map((item,i)=>{
            return  (      
            <Col className=' col-md-5_custm' key={i} data-image-id={item.image_id} id={item.id}  onClick={()=>fetchWorkDetail(item.id)}>
            
                
                {/* <div className="col-md-5_custm " style={{padding: 0}} key={i} data-image-id={item.image_id} id={item.id}> */}
                    <a data-target="#dcRR" data-toggle="modal" style={{backgroundImage:"url(data1/images/"+encodeURI(item.thumb_image)+")"}}>
                        {/* <img className="img-responsive" style={{width:0,height:0,opacity: 0}} data-image-id="1" src={`data1/images/${item.thumb_image}`} alt="" onError={(e) => console.log("Image path: ", e.target.src)}/> */}
                    <div className="secontainer">
                        <div style={{width: '100%'}}>
                        <div className="se1">PACKAGING   : BAD MONKEY BEER          </div>
                        
                        <div className="se3">CLIENT: SINQ BEVERAGES </div>
                        </div>
                    </div>
                    </a>
                {/* </div> */}
                </Col>
              
              )
        })}
        </Row>

        </div>
    </div>

    <Modal id="dcRR" show={showDetailModal} onHide={handleClose}>
    
        <a className="close-btn-2" onClick={handleClose}  style={{cursor:'pointer'}}> 
            <span className="fa fa-times-circle" style={{color: '#B3B3B3'}} >&times;</span>
        </a>
         

            <Modal.Body>
                <div className="row" data-id={detailStack.id} >
                    <div className="col-md-12 color-black">
                        <h2 id="Loading55" style={{position: 'absolute',top: '222px',fontSize: '25px'}}></h2>
                        <h2 id="jkhjhhg">
                        
                        <span className="product-type">{detailStack.product_type}  </span> <span className="tag-line">    {detailStack.tag_line}      </span> 
                        <div className="" style={{marginTop: '13px'}}>
                        <span className="clients-title">CLIENT:</span> <span className="brand-name">{detailStack.client}</span></div>
                        
                        </h2>
                    </div>
                    <div className="col-md-12">
                        <div className="image">
                         
                            <img src={"data1/images/big/"+detailStack.big_image} className="img-responsive" style={{margin: '0px auto'}} onError={(e) => console.log("Image path: ", e.target.src)}/>
                        </div>
                    </div>
                    <div className="col-md-12 close-container">
                        
                    
                    </div>
                </div>
            </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Workdata