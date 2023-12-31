import React,{useState} from 'react'

export default function About(props) {
    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     border:'5px solid white'
    
    // })
    let mystyle={
        color: props.mode === 'dark' ? 'white' :'#3a2b72',
        backgroundColor: props.mode === 'dark' ?  '#3a2b72':'white'
        
    }

    // const [btn, setBtn] = useState("Light mode Enable")
    // const ToogleStyle=()=>{
    //     if(mystyle.color==='white'){
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white'  
    //         })
    //         setBtn("Dark mode enable")
    //     }
    //     else{
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtn("Light mode Enable")
    //     }
    // }

    return (

        <div className="container my-4 " style={mystyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle} >
                <div className="accordion-item my-3" style={mystyle} >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-3"  style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-3"  style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
{/* 
            <div className="container my-4">
                <button className="btn btn-primary" onClick={ToogleStyle}>{btn}</button>
            </div> */}
        </div>
    )
}
