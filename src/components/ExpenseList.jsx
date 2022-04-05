import Expense from "./Expense"

const ExpenseList = ({ gastos }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>
                { gastos.length ? 'GASTOS' : 'NO HAY GASTOS AÚN' }
            </h2>

            {
                gastos.map( gasto => (
                    <Expense 
                        key={gasto.id}
                        gasto={gasto}
                    />
                ))
            }
        </div>
    )
}

export default ExpenseList