import flecha from '../assets/return.png'
import opelA from '../../public/opelEjm1/opelA.jpg'
import opelB from '../../public/opelEjm1/opelB.jpg'
import opelC from '../../public/opelEjm1/opelC.jpg'
import opelD from '../../public/opelEjm1/opelD.jpg'
import opelE from '../../public/opelEjm1/opelE.jpg'
import '../scss/stylesComponent/_detalleProducto.scss'

const DetalleProducto = () => {
    return (
        <>
            <div className="header__producto">
                <div className="data__container">
                    <h1 className="titulo__producto">
                        Opel 1970
                    </h1>

                    <h3 className="subtitulo__producto">
                        Modelo alemán 1970 turbodiesel
                    </h3>
                </div>

                
                
                <a href="#home" className="return">
                    <img src={flecha} className='return' alt="" />
                </a>            
            </div>

            <section className="section__producto">
            <div id="carouselExample" class="carousel slide" className='carousel'>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={opelA} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={opelB} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={opelC} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <article className="descripcion__producto">
                <h2 className="subtitulo">
                    Modelo alemán 1970 turbodiesel
                </h2>
                <h3 className="subtitulo2">
                    descuento del 100%
                </h3>
                <h1 className="precio">
                        $10.000.000
                </h1>
                <button className="boton">Comprar</button>
                <a className="medios__pago">Ver Medios de Pago</a>
                <p className="texto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis alias iusto quo optio eaque tenetur architecto quas expedita a fuga nobis officia distinctio atque qui ratione quos ipsa tempore adipisci voluptatem nulla sit ab, voluptate illum! Est eaque odio voluptates maiores eius harum? Sed cupiditate cum sunt exercitationem ut. Provident, quam! Magni quaerat culpa repudiandae alias dignissimos! Modi nesciunt veritatis, animi deleniti repudiandae eos quaerat obcaecati sequi numquam explicabo nulla, iusto magnam? Saepe modi fuga laboriosam delectus voluptatum cum dicta illo asperiores natus, vero voluptatibus numquam tenetur veniam non voluptate itaque! Sed accusantium omnis quis suscipit, quisquam dolorem. Sequi enim, laudantium quisquam hic molestiae, tempora           </p>

            </article>
        
            </section>
         </>
        

    )
}

export default DetalleProducto