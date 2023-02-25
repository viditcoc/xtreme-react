import React, { useState, useEffect, useRef } from "react";

function LoadingOverlay(){
    var xtrattay = ['', 'x', 'xt', 'xtr', 'xtre', 'xtrem', 'xtreme'];
    var desattay = ['', 'n', 'gn', 'ign', 'sign', 'esign', 'design'];
    let [xtArrString, setXtArrString] = useState("");
    let [deArrString, setDeArrString] = useState("");

    const [isStarted1, setIsStarted1] = useState(false);
    const [isStarted2, setIsStarted2] = useState(false);


    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const intervalIdRef1 = useRef(null);
    const intervalIdRef2 = useRef(null);


    let [running, setRunning] = useState("running");
    let [fadeOut, setfadeOut] = useState("");
    let [dNone, setdNone] = useState("");
    
    let [runOnce, setRunOnce] = useState(localStorage.getItem('runOnce') === 'true');
     

    useEffect(() => {
        localStorage.setItem('runOnce', runOnce);
      }, [runOnce]);

    useEffect(() => {

        if(runOnce){
            setdNone("d-none");
            
            return;
        }
         // initiate xtreme on dom ready 2 after secs
        setTimeout(() => {
            setIsStarted1(true);
        },2000);

        if (!isStarted1) {
            return;
        }

        intervalIdRef1.current  = setInterval(() => {
            setCount1(count1 => count1 + 1);                      
        }, 150);
 
        return () => clearInterval(intervalIdRef1.current);
    }, [isStarted1]);

    useEffect(() => {
        // start animate design
         if (!isStarted2) {
            return;
        }
        intervalIdRef2.current  = setInterval(() => {
            setCount2(count2 => count2 + 1);                      
        }, 150);

        return () => clearInterval(intervalIdRef2.current);
    }, [isStarted2]);
      

    useEffect(() => {
         
        // animating xtreme
        if(count1==xtrattay.length-1){
             
            clearInterval(intervalIdRef1.current);             
            setTimeout(() => {
                setIsStarted2(true);
            },1000)
               
        }
        setXtArrString(xtrattay[count1])
        
    },[count1]);

    useEffect(() => {
         
        // animating design
        if(count2==desattay.length-1){
             
            clearInterval(intervalIdRef2.current);
            
            setTimeout(() => {
                setRunning("");
                    setTimeout(() => {
                        setfadeOut("fadeOut");
                        setRunOnce(true);
                    },2000);
            },2000);
        }
        setDeArrString(desattay[count2])
        
    },[count2]);


    
    
    let [ovh, setOvh] = useState("ovh");
    

    // loading

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        function handleLoad(){
            setLoading(false);
            
        }
   

        window.addEventListener('load', handleLoad);

        

        return(()=>{
            window.removeEventListener('load', handleLoad);
        })

    },[]);

    return(
        <>
        
         <div className={`intro ${fadeOut} ${dNone}`}>          
            <div className={`wkar ${running}`}>
                <div className="cntt">
                    
                    <span className="t1">{xtArrString}</span>
                    <span className="t2">{deArrString}</span>
                </div>
                <div className="subtt">
                  ENHANCING DESIGN
                </div>
            </div>
            
        </div>
        </>
    )

}
export default LoadingOverlay;
