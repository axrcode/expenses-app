import { useState } from 'react'

import CerrarBtn from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({ 
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto 
}) => {

    const [ mensaje, setMensaje ] = useState('')

    const [ nombre, setNombre ] = useState('')
    const [ cantidad, setCantidad ] = useState(0)
    const [ categoria, setCategoria ] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ( [ nombre, cantidad, categoria ].includes('') ) {
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        guardarGasto({
            nombre, 
            cantidad, 
            categoria
        })
    } 

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="Cerrar Modal" 
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit} 
                className={`formulario sombra ${animarModal ? 'animar' : 'cerrar'}`}
            >

                <legend>Nuevo Gasto</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    
                    <input
                        className={`${mensaje && nombre=='' ? 'error-input' : ''}`}
                        id="nombre" 
                        type="text"
                        placeholder="Añadir nombre del gasto (ej. Compra despensa)" 
                        value={nombre}
                        onChange={ e => setNombre(e.target.value) }
                        autoComplete="off"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    
                    <input
                        className={`${mensaje && cantidad=='' ? 'error-input' : ''}`}
                        id="cantidad" 
                        type="number"
                        placeholder="Añadir cantidad del gasto (ej. 300)"
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value)) } 
                        autoComplete="off"
                    />
                </div>
                
                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    
                    <select 
                        className={`${mensaje && categoria=='' ? 'error-input' : ''}`}
                        id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value) }
                    >
                        <option value="">Seleccione</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="Varios">Varios</option>
                        <option value="Personales">Personales</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input 
                    type="submit" 
                    value="Añadir Gasto" 
                />

                {   mensaje && (
                        <Message tipo="error">
                            {mensaje}
                        </Message>
                    ) 
                }
            </form>
        </div>
    )
}

export default Modal