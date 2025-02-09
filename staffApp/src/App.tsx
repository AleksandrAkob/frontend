import { useState } from 'react'

import './App.css'



let userId = 3

// Подключение к Zoom #2:   https://us06web.zoom.us/j/6660060060?pwd=GSeQw7WFtuCeEZHu3b5CcewZ25TacW.1

// https://www.figma.com/design/gSA8hBZlc1wnEDws7p48Xw/StaffApp?node-id=0-1&t=GlJa0dB77HFhl6FA-0

function App() {


  const [data, setData] = useState(
    [
      { name: 'Carl K.', salary: 800, bonus: false, id: 1},
      { name: 'Alex M.', salary: 900, bonus: true, id: 2 },
      { name: 'John W.', salary: 700, bonus: false, id: 3 },
    ]
  )


  const [countEmployees, setCountEmployees] = useState(0)

  const [activeButton, setActiveButton] = useState(1)

  const [name, setName] = useState('')

  const [salary, setSalary] = useState('')

  const onClickButtonHandler = () => {
    userId = userId + 1

    const newObject = { name: name, salary: Number(salary), bonus: false, id: userId}

    
    if (name !== '' && salary !== '') {
        setData([...data, newObject])
     }
    console.log(userId)

    

  }


  const toggleBonus = (index: number) => {

    const updateData = data.map(users => {

      return users.id === index ? { ...users, bonus: !users.bonus } : users
      
    })
    setData(updateData)
  } 



    const removeItemById = (id: number) => {
      const filteredData = data.filter(item => { 
        return item.id !== id ? item : ''
      })

      setData(filteredData)

      
    }


  return (
    <div className='wrap'>
      <header className='header'>
        <div className="container">
          <div className="header__wrap">
            <h1 className='text1'>Учет сотрудников в компании N </h1>
            <h2 className='text2'>Общее число сотрудников: {data.length}</h2>
            <h3 className='text3'>Премию получат: {data.reduce((count, item) => item.bonus === true ? count + 1 : count, 0)}</h3>
          </div>
        </div>
      </header>



      <main className='main'>
        <div className="container">
          <div className="main__wrap">
            <div className="mainSearch">
              <input type="text" className='text4' placeholder='Найти сотрудника' />

              <button onClick={() => setActiveButton(1)} className={activeButton == 1 ? 'button1 active' : 'button1'}>Все сотрудники</button>
              <button onClick={() => setActiveButton(2)} className={activeButton == 2 ? 'button2 active' : 'button2'}>На повышение</button>
              <button onClick={() => setActiveButton(3)} className={activeButton == 3 ? 'button3 active' : 'button3'}>З/П больше 1000$</button>

            </div>

            <div className='mainStaff'>
              <div className='employees'>
                
                {
                  data.map((item: any) => {
                  
                    return (
                      
                      <div className="employee">

                        <div className='employee__elems'>
                          <div className='employee__title'>{item.name}</div>
                          <div className='salary'>{item.salary}$</div>
                        </div>
                       
                        <div className='employee__fun'>
                          <button onClick={() => toggleBonus(item.id)} className={item.bonus == true ? 'button active' : 'button'}>🍪</button>
                          <button onClick={() => removeItemById(item.id)} className='button'>🗑️</button>
                          <button className='button increase'>⭐️️</button>
                        </div>

                      </div>    
                      
                    )
                  })
                }


              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='footer'>
        <div className="container">
          <div className="footer__wrap">
            <div className='text8'>Добавьте нового сотрудника</div>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className='footerImputName'
              type="text"
              placeholder='Как его зовут?'
            />

            <input
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
              className='footerImputSalary'
              type="text"
              placeholder='З/П в $?'
            />

            <button
              onClick={() => onClickButtonHandler()}
              className="footerButton">Добавить</button>
          </div>
        </div>
      </footer>

    </div>
  )
}
export default App 
