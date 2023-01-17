import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'
import Usersform from './components/Usersform'
import UsersList from './components/UsersList'
import swal from 'sweetalert';
import Swal from "sweetalert2"

function App() {
  
  const [usersList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  const showAlert2 =() =>{
    Swal.fire({
      icon:"success",
      title:`Has seleccionado un usuario`,
      text:"Ahora podras actualizarlo o eliminarlo",
      button:"Aceptar",
      timer: 2000,
  });
  };

  useEffect(()=>{
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then(res => setUserList(res.data)); 
    },[]);
    
    const getUser = () =>{
      axios.get(`https://users-crud.academlo.tech/users/`)
        .then(res => setUserList(res.data));
    };
    
    const selectUser = user =>{
      showAlert2()
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
