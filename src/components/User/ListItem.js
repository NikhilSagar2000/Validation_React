import React from 'react';
import styles from './ListItem.module.css';

const ListItem = props => {
    return (
        <div className={styles['list-item']}>
            <ul>
                {props.allUsers.map(user => (
                    <li key={user.key}>{`New User '${user.username}' has been added.`}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListItem;