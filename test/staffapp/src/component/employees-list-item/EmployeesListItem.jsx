import { Component } from "react";
import './EmployeesListItem.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like: false,
            increase: props.increase
        }
    }


    onClickLikeHandler = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    onClickPrizeHandler = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        })

        )
    }

    render() {

        const { like, increase } = this.state

        let className = "list-group-item d-flex justify-content-between"

        if (like === true) {
            className = className + ' like'
        }

        if (increase == true) {
            className = className + ' increase'
        }

        const { name, salary } = this.props

        return (
            <li className={className}>

                <span onClick={this.onClickLikeHandler}>
                    {name}
                </span>
                <div className="list-group-item-wrap">
                    <input className="list-group-item-input" type="text" defaultValue={salary + '$'} />


                    <div className="d-flex justify-content-center align-items-center">

                        <button onClick={this.onClickPrizeHandler}
                            type="button"
                            className="btn-cookie btn-sm">
                            <i className="fas fa-cookie"></i>
                        </button>
                        <button>
                            <i className="fas fa-trash"></i>
                        </button>

                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </li>
        )

    }
}

export default EmployeesListItem