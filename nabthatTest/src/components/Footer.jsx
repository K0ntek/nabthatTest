import React, {useState} from 'react'
import '../stylesheet/footer.scss'
import { IoIosArrowForward, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Footer = ({setText, setOption, toggleData}) => {

  const reset = () =>{
    setText([])
    setOption(3)
  }

  const [active, setActive] = useState("panel");

  const togglePanel = () =>{
    active === "panel" ? setActive("panel activePanel") : setActive("panel")
  }

  return (
    <div className=' footerWrapper'>
      <div className=' footer'>

        <div className="footerGrid">
            <div className=' footerLogo'>
              <div className="logoBorder"></div>
              <h2>CSS</h2>
              <h2>IS</h2>
              <h2>AWESOME</h2>
            </div>
        </div>

        <div className="footerGrid">
              <div className=' brandLogo'>
                  <div className="brandBorder"></div>
                    <h2>nabthat</h2>
                  <div className="brandBorder"></div>
              </div>
        </div>

        <div className="footerGrid">
            <div className="footerButton">
                <button onClick={togglePanel}>POKAŻ {active === "panel" ? <IoIosArrowUp style={{position: 'relative', top: '2px'}}/> : <IoIosArrowDown style={{position: 'relative', top: '2px'}}/>} </button>
            </div>
        </div>

        </div>

        <div className={active}>
              <div onClick={()=>reset()}>
                <p> <IoIosArrowForward style={{ position:'relative', top:'2px'}}/> ZRESETUJ USTAWIENIA</p>
              </div>

              <div onClick={()=>toggleData()}>
                <p> <IoIosArrowForward style={{ position:'relative', top:'2px'}}/> POKAŻ DANE OSOBOWE</p>
              </div>
            </div>

    </div>
  )
}

export default Footer