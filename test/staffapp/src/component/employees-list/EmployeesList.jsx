import EmployeesListItem from "../employees-list-item/EmployeesListItem"
import './EmployeesList.css'

const EmployeesList = ({ data }) => {

    const elements = data.map((item) => {
        return (
					<EmployeesListItem
								key={item.id}
                name={item.name}
                salary={item.salary}
                increase={item.increase}
            />
        )
    })

    return (
        <ul className="list-group app-list">
            {elements}
        </ul>
    )
}

export default EmployeesList