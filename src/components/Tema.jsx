import Title from "./Title";
import auto from "../assets/iStock-475899097.jpg";
import ika from "../assets/ikaJeep.jpg";
import '../scss/stylesComponent/_tema.scss'


export default function Tema() {
  return (
    <>
        <section className="section__tema">
          <h1 className="tema__titulo">RETRO DRIVE</h1> <br/>
          <h2 className="tema__sub">Colecciones de caminos</h2>
          <div className="data__tema_sup">
            <p className='info__tema'>
              Bienvenido a nuestra comunidad de amantes de los vehículos
              clásicos y únicos. En RetroDrive, nuestra misión es brindarte una
              experiencia inolvidable al disfrutar de la última etapa de los
              vehículos con combustibles fósiles, mientras fomentamos la
              conciencia sobre el cuidado del medio ambiente. <br/>
              Nos apasiona preservar la esencia y la historia de los vehículos
              antiguos, especialmente aquellos de la década del 70. Creemos que
              estos tesoros automovilísticos merecen ser apreciados y
              disfrutados por aquellos que valoran su diseño, ingeniería y
              legado cultural.<br/>            
              Además, nos comprometemos a asegurar que todos los vehículos
              disponibles en nuestra plataforma cuenten con un perfecto estado
              de funcionamiento y hayan pasado rigurosas revisiones técnicas. La
              seguridad es nuestra prioridad, y queremos que puedas disfrutar de
              cada momento al volante de estos vehículos clásicos con total
              confianza.<br/>            
              Pero nuestra visión va más allá: creemos en la importancia de
              cuidar el medio ambiente y ser responsables con el futuro del
              planeta. Al disfrutar de esta última etapa de los vehículos con
              combustibles fósiles, queremos crear conciencia sobre la
              transición hacia alternativas más sostenibles, como los vehículos
              eléctricos.<br/>            
              Sabemos que el mundo está evolucionando rápidamente hacia una
              movilidad más ecológica, y esa transición puede ser una
              oportunidad para los amantes de los automóviles clásicos. A través
              de nuestra plataforma, queremos acercarte a la experiencia de los
              vehículos antiguos mientras transitamos hacia un futuro más limpio
              y sostenible.<br/>           
              ¡Únete a nuestra comunidad de entusiastas y amantes de los
              vehículos clásicos! Juntos, podemos disfrutar de esta última etapa
              de los vehículos con combustibles fósiles y al mismo tiempo,
              trabajar hacia un futuro más verde y respetuoso con el medio
              ambiente. ¡Comienza a reservar tu viaje al pasado hoy mismo!
            </p>
          
            
              <img src={auto} alt="Auto Retro" className="tema_img" />
            
          </div>

          <div className="data__tema_inf">

            
              <img src={ika} alt="Auto Retro" className=" tema_img" />
            
            <p className="info__tema">
            <h1 className="tema__titulo">Servicio</h1> <br/>
            <h2 className="tema__sub">Excelencia y calidad</h2> <br/>
              En RetroDrive, te ofrecemos la oportunidad única de reservar y
              alquilar vehículos clásicos de la década del 70 con total confianza
              y seguridad.<br/>            
              Aquí te presentamos cómo puedes disfrutar de esta experiencia:<br/>            
              1. Amplia selección de vehículos clásicos: Nuestra comunidad cuenta
              con una amplia variedad de vehículos antiguos de la década del 70
              para que puedas elegir aquel que más te apasione y se adapte a tus
              preferencias.<br/>            
              2. Reservas y alquileres flexibles: Puedes reservar un vehículo
              clásico por un período específico, ya sea por semanas o meses, permitiéndote
              disfrutar de un paseo nostálgico o una experiencia más prolongada.<br/>            
              3. Rigurosas revisiones técnicas: Todos los vehículos disponibles en
              nuestra plataforma han pasado por estrictas revisiones técnicas para
              garantizar que estén en perfecto estado de funcionamiento y cumplan
              con los más altos estándares de seguridad.<br/>            
              4. Experiencias memorables: Nuestra misión es brindarte una
              experiencia inolvidable al volante de estos tesoros
              automovilísticos. Con RetroDrive, podrás revivir la historia y la
              esencia de los vehículos antiguos y apreciar su diseño y legado
              cultural.<br/>            
              5. Conciencia medioambiental: Al unirte a nuestra comunidad y
              disfrutar de la última etapa de los vehículos con combustibles
              fósiles, también contribuyes a crear conciencia sobre la importancia
              de adoptar alternativas más sostenibles, como los vehículos
              eléctricos.<br/>            
              6. Seguridad y confianza: La seguridad es nuestra prioridad. Cada
              vehículo en nuestra plataforma cuenta con una verificación técnica
              rigurosa, lo que te brinda total confianza y tranquilidad al
              disfrutar de tu experiencia al volante.<br/>            
              7. Trámites sencillos: Nuestra plataforma te permite realizar
              fácilmente las reservas y alquileres de los vehículos clásicos que
              desees. Todo el proceso es rápido, transparente y diseñado para
              ofrecerte una experiencia sin complicaciones.<br/>            
              8. Comunidad de entusiastas: Al unirte a RetroDrive, te conectarás
              con una comunidad apasionada de amantes de los vehículos clásicos
              que comparten tus mismas emociones y pasiones por la historia
              automovilística.<br/>            
              Reserva tu viaje al pasado hoy mismo y únete a nuestra comunidad de
              entusiastas. Con RetroDrive, podrás disfrutar de la magia de los
              vehículos antiguos mientras trabajamos juntos hacia un futuro más
              verde y respetuoso con el medio ambiente. ¡Vive una experiencia
              inolvidable con nuestros vehículos clásicos!<br/>
            </p>

            

          </div>
        </section>
    </>
  );
}
