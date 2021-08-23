import React,{useState} from 'react';
import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';
import './App.css';

const App = () => {
  // const [existingUserFlag,setExistingUserFlag] = useState(false);
  const [userList, setUserList] = useState([]);
  const addUserHandler = newUser => {
    setUserList((prevList) => {
      return [newUser, ...prevList];
    })
  }
      // console.log(newUser.username,newUser.password);
    //   prevList.forEach(user => {
    //     if (user.username.toLowerCase() === newUser.username.toLowerCase()) {
    //       setExistingUserFlag(true);
    //       return;
    //     } else {
    //       setExistingUserFlag(false);
    //     }
    //   })
    //   if (!existingUserFlag) {
    //       return [newUser, ...prevList];
    //   } else {
    //       return [...prevList];
    //   }
    // });
    // console.table(userList);
  // console.log(userList);

  return (
    <div className='app'>
      <UserInput onAddUser={addUserHandler} allUsers={userList} />
      <UserList allUsers={userList}/>
    </div>
  );
}

export default App;
