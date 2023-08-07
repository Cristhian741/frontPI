import { Link } from "react-router-dom"
import { RiArrowDownCircleLine } from "react-icons/ri";

import logof from '../../public/opelEjm1/RetD.png'
import linkedin from '../../public/opelEjm1/linkedin-line.png'
import instagram from '../../public/opelEjm1/instagram-line.png'
import gitlab from '../../public/opelEjm1/gitlab-line.png'
import github from '../../public/opelEjm1/github-line.png'



export default function Footer() {
  return (
        <>
            <footer className="footer__container">
                <div className="data__footer">
                     <h3 className='titulo__footer'>
                        Retro Drive
                    </h3>

                    <div className="social__">
                        <a href="" className="social__item">
                            <img src={github } alt="" />
                        </a>

                        <a href="" className="social__item">
                            <img src={ gitlab} alt="" />
                        </a>

                        <a href="" className="social__item">
                            <img src={ instagram} alt="" />
                        </a>

                        <a href="" className="social__item">
                            <img src={ linkedin} alt="" />
                        </a>

                    </div>
                </div>
                    

                <div className="links__container">
                    <Link to="/" className="linknormal">
                        About
                    </Link>               

                
                    <Link to="/verificaciontecnica" className="linknormal">
                        Verificacion Tecnica
                    </Link>
              
                    <Link to="/contact" className="linknormal">
                        Contact
                    </Link>
                
                <   Link to="/administracion" className="linknormal">
                        Administracion
                    </Link>
                </div>

                <a href="#" class="footer__logo">
                        <img src={logof} className="logo" alt="" />
                </a>
                
                
            </footer>
                    
        </>
        
     
  )
}
