import './SearchPanel.css'

function SearchPanel() {
    return (
        <div>
             <input
                type="text"
                className={'form-control search-input'}
                placeholder={'Найти сотрудника'}
            />
        </div>
    )
}

export default SearchPanel