import logo from '../../public/opelEjm1/RetD.png'
import menu from '../../public/opelEjm1/menu.png'
import close from '../../public/opelEjm1/flag.png'
import search1 from '../../public/opelEjm1/search1.png'
import InputBuscador from './InputBuscador'

const Header = () => {

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


    return (
        <>
            <header class="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                        <img src={logo} className="logo" alt="" />
                    </a>

                    <form action="" className="buscador_nav">
                        <input type="text" className='input_nav' />
                        <a href="" className="lupa_nav">
                            <img src={search1} className="lupa" alt="" />
                        </a>
                    </form>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            
                            <li class="nav__item">
                                <a href="" className="nav__link">Iniciar Sesión</a>
                            </li>
                            <li class="nav__item">
                                <a href="" className="nav__link">Crear Cuenta</a>
                            </li>
                        </ul>


                        <div class="nav__close" id="nav-close">
                            <img src={close} className='closeImg' alt="" />
                        </div>

                    </div>

                    <div class="nav__toggle" id="nav-toggle">
                        <img src={menu} className='menuImg' alt="" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header