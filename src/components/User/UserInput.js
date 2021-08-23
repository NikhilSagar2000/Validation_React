import React,{useState} from 'react';
import styles from './UserInput.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserInput = props => {
    const [usernameError, setUsernameError] = useState({ flag: null, message: '' });
    const [passwordError, setPasswordError] = useState({ flag: null, message: '' });
    const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
    // const [userExistFlag, setUserExistFlag] = useState(false);
  
  const usernameHandler = event => {
      setUserCredentials((prev) => {
        return {
          ...prev,
          username: event.target.value,
        };
      });
        if (event.target.value.trim().length === 0) {
            setUsernameError({ flag: true, message: 'Please Enter a Username' });
            return;
        }
        if (event.target.value.length < 3) {
            setUsernameError({ flag: true, message: 'Invalid Username(< 3)' });
            return;
        }
        // setUserCredentials((prev) => {
        //   return {
        //     ...prev,
        //     username: event.target.value,
        //   };
        // });
        setUsernameError({ flag: false, message: 'no error' });
    }

  const passwordHandler = event => {
      setUserCredentials((prev) => {
        return {
          ...prev,
          password: event.target.value,
        };
      });
        if (event.target.value.trim().length === 0) {
           setPasswordError({ flag: true, message: "Please Enter a Password" });
           return;
        }
        if (event.target.value.length < 8) {
          setPasswordError({ flag: true, message: "Password must be atleast 8 characters" });
          return;
        }
        // setUserCredentials(prev => {
        //     return {
        //         ...prev,
        //         password: event.target.value
        //    }
        // });
        setPasswordError({ flag: false, message: "" });
    }

    const submitHandler = event => {
        event.preventDefault();
        if (usernameError.flag || passwordError.flag || usernameError.flag === null || passwordError.flag === null) {
            if (usernameError.flag === null) {
                setUsernameError({
                  flag: true,
                  message: "Please Enter a Username",
                });
            } else if (passwordError.flag === null) {
                setPasswordError({
                  flag: true,
                  message: "Please Enter a Password",
                });
            }
            return;
      }
      
      props.onAddUser({
          username: userCredentials.username,
          password: userCredentials.password,
          key: Math.round(Math.random() * 1000000),
      }); 
      
      setUserCredentials(prev => {
        return {
          ...prev,
          username: '',
          password: ''
        }
      });
      setUsernameError(prev => {
        return {
          ...prev,
          flag: null,
          message: ''
        }
      });
      setPasswordError(prev => {
        return {
          ...prev,
          flag: null,
          message: ''
        }
      });
        
  }

    return (
      <div className={styles["card-container"]}>
        <Card className={styles["user-input"]}>
          <form
            className={styles["user-form"]}
            onSubmit={submitHandler}
            autoComplete="off"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={userCredentials.username}
              onChange={usernameHandler}
            />
            {usernameError.flag && (
              <i className={styles.error}>{usernameError.message}</i>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={userCredentials.password}
              onChange={passwordHandler}
            />
            {passwordError.flag && (
              <i className={styles.error}>{passwordError.message}</i>
            )}
            <Button type="submit" className={styles.btn}>
              Add User
            </Button>
          </form>
        </Card>
      </div>
    );
}

export default UserInput;