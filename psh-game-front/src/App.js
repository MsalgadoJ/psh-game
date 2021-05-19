import React, { useState, useEffect } from 'react';
import randomUser from './api/randomUser';
import usersServer from './api/usersServer';

const App = () => {

  const [serverUsers, setServerUsers] = useState([])
  const [newUser, setNewUser] = useState(null)

  const fetchUser = async () => {
    const response = await randomUser.get();
    console.log(response)
    setNewUser(response.data.results[0])
    console.log('Nuevo Usuario', newUser)
  }

  useEffect(() => {
    setInterval(() => { 
      fetchUser()
    }, 20000);
  },[])

  useEffect(() => {
    const fetchServerUsers = async () => {
      const response = await usersServer.get();
      setServerUsers(response.data)
      console.log('Usuarios del servidor', serverUsers)
    }

    fetchServerUsers();
  },[])

  useEffect(() => {
    const createUser = async () => {
      if(newUser !== null) {
        await usersServer.post('/',{
          iduser: newUser.id.value,
          nickname: newUser.login.username,
          profile_image: newUser.picture.thumbnail,
          score: Math.floor(Math.random()*(100-0)+0)
        })
      }
    }
    createUser();
  }, [newUser])

  return (
    <div>
      <p>en construcción</p>
    </div>
  )
}

export default App;
