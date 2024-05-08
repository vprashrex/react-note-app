import github from "./assets/icons8-github.svg";
import linkedin from "./assets/icons8-linkedin.svg";

export const Footer = () => {
    return(
        <div className="footer" style={{width:"100%",position:"relative",fontFamily:"Roboto",}}>
            <h1 style={{color:"black"}}>Made By Prashant Vasudevan</h1>
            <div className="col1-3-social" style={{}}>
                <ul class="wrapper">
                    <li class="icon ">
                        <span><a href="https://github.com/vprashrex/"><img src={github} alt="facebook" /></a></span>
                    </li>
                    <li class="icon">
                      <span><a href="https://www.linkedin.com/in/prashant-vasudevan-941696226/"><img src={linkedin} alt="twitter" /></a></span>
                    </li>
  
                    
                </ul>

            </div>
        </div>
    )
   
}