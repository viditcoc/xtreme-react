import React, { useState, useEffect } from 'react';
import { Hostname } from './config';
// core version + navigation, pagination modules:
  import { Swiper, SwiperSlide } from 'swiper/react';

  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import "swiper/css/autoplay";
  import SwiperCore, { Autoplay, Pagination,  Navigation } from "swiper";
    

function SwiperComp() {

    const [Banners, fetchBanners] = useState([])


    const getBanners = () => {
        // fetch(Hostname+"/banners")
        fetch("data1/json/banners.json")
          .then((res) => res.json())
          .then((res) => {
             
            // console.log(res)
             

            fetchBanners(res)
          })
      }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        getBanners();
        SwiperCore.use([Autoplay]);
        
    }, [])

    

    

  
  return (
    <>         
        <Swiper
        direction={"vertical"}
 
        autoplay={{
            delay: 2000,
            disableOnInteraction: false  
        }}
        
          
        initialSlide={1}
        pagination={{
         clickable: true,
       }}
       navigation={true} 
        
      //  onSlideChange={() => console.log('slide change')}
      //  onSwiper={(swiper) => console.log(swiper)}
       speed= {1000}
    
        modules={[Autoplay,Pagination,Navigation]}       
        className="xtremeSwiper"
        >

        {Banners.map((item, i) => {
            return <SwiperSlide key={i} style={{backgroundImage: encodeURI("url(data1/images/"+item.banner_name+")")}} className="vidit">
                <div className="banner_cont_bg " style={{backgroundColor: "#"+item.bgcode}}></div>

                <div className="banner_cont">
                    <div className="bread">Work / {item.workname}</div>             
                    <div className="title">{item.bannerTitle}</div>
                    <div className="title type">{item.prodtype}</div>
                    <div className="para">{item.bannerText}&nbsp;&nbsp;<img src="data1/img/arrow.png" style={{width:'21px'}} alt="Arrow" /></div>
                </div>

                <img className="bannr"  src={"data1/images/"+item.banner_name} alt=""/>
            </SwiperSlide>
        })}
        
        
        </Swiper>
    </>
  )
}

export default SwiperComp