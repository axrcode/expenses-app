import React from 'react'
import { formatearFecha, formatearCantidad } from '../helpers'
import IconCategory from './IconCategory'

const Expense = ({ gasto }) => {

    const { categoria, nombre, cantidad, id, fecha } = gasto

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                
                <IconCategory 
                    categoria={categoria} 
                />

                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <div className="fecha-gasto">
                        Creado el: {''}
                        <span>{formatearFecha(fecha)}</span>
                    </div>
                </div>

            </div>

            <p className="cantidad-gasto">
                {formatearCantidad(cantidad)}
            </p>
        </div>
    )
}

export default Expense