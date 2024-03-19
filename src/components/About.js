
// import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // )
    // const [btntext,setBtnText]=useState("Enable Dark Mode")
    //  const toggleStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'


    //         })
    //         setBtnText("enable light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border:'1px solid white'

    //         })
    //         setBtnText("enable Dark Mode")
    //     }
    // }
    let myStyle={
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
        // borderColor: props.mode ==='dark'?'white':'#042743'
    }

    return (
        <div className='container'style={{ color: props.mode ==='dark'?'white':'#042743'}}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This text analyze your text with the help use can analyze your text with the following funationality
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>Free TO use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                                This text is free use there is no need to pay anything to use this is full of free of cost no one can pay even penny for this website
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This website can work in any web browser like firefox, google, mozile fire foz, opera mini this website is full of browser compatible any browser is full of attachment
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-2">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}

        </div>
    )
}
