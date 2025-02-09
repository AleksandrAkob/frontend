import { Component } from "react";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
    }




    render() {

        const { name, salary, increase } = this.props

        return (
            <li>
                {name}
                {salary}
                {increase}

                <button>
                    <i className="fas fa-cookie"></i>
                </button>
                <button>
                    <i className="fas fa-trash"></i>
                </button>
                <button>
                    <i className="fas fa-star"></i>
                </button>
            </li>
        )

    }
}

export default EmployeesListItem