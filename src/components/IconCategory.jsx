import IconoAhorro from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoVarios from '../img/icono_gastos.svg'
import IconoPersonales from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    Ahorro: IconoAhorro,
    Comida: IconoComida,
    Casa: IconoCasa,
    Varios: IconoVarios,
    Personales: IconoPersonales,
    Salud: IconoSalud,
    Suscripciones: IconoSuscripciones,
}

const IconCategory = ({ categoria }) => {
    return (
        <img 
            src={diccionarioIconos[categoria]} 
            alt={`Icono ${categoria}`} 
        />
    )
}

export default IconCategory