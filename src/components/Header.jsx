import ControlBudget from "./ControlBudget"
import NewBudget from "./NewBudget"

const Header = ({ 
    presupuesto, 
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>   

            {
                isValidPresupuesto ? (
                    <ControlBudget 
                        presupuesto={presupuesto}
                    />
                ) : (
                    <NewBudget 
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )
                    
            }

        </header>
    )
}

export default Header