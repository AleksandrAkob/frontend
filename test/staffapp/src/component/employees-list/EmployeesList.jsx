import EmployeesListItem from "../employees-list-item/EmployeesListItem"


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
        <ul>
            {elements}
        </ul>
    )
}

export default EmployeesList