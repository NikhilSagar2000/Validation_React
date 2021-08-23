import React from 'react';
import styles from './UserList.module.css';
import Card from '../UI/Card';
import ListItem from './ListItem';

const UserList = props => {
    return (
        <div className={styles["user-list"]}>
            <Card className={styles['user-list__card']}>
                <ListItem allUsers={props.allUsers}/>
            </Card>
      </div>
    );
}

export default UserList;