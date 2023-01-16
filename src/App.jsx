import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'
import Usersform from './components/Usersform'
import UsersList from './components/UsersList'

function App() {
  
  const [usersList, setUserList] = useState([]);

  const [userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUserList(res.data)); 
  },[]);

  const getUser = user =>{
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUserList(res.data));
  };

  const selectUser = user =>{
    setUserSelected(user)
  };

  console.log(userSelected);


  return (
    <div className="App">
        
          <header className='userform-container'>
              <Usersform 
                getUser={getUser}
                userSelected={userSelected}
                selectUser={selectUser}
                />
          </header>
         <br /> <br /><br />
        <div className='userlist-container'>
            <UsersList 
              usersList={usersList}
              selectUser={selectUser}
              getUser={getUser}
              />
        </div>
    </div>
  )
}

export default App
