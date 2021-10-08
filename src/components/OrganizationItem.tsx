import React from 'react';
import styles from './OrganizationItem.module.css';
import organizationIcon from '../assets/organization-icon.png';
import { useHistory } from 'react-router';

export const App: React.FunctionComponent = ({ item }) => {
  const history = useHistory();

  return (
    <div className={styles.outline} onClick={() => history.push(`/testreports/${item.id}`)}>
      <div className={styles.container}>
        {/* <img src='organizationIcon' alt="organization item"></img> */}
        <img src={item.owner_picture} alt="organization item"></img>
        <h4 className={styles.h4Font}>{item.name}</h4>
      </div>
    </div>
  );
}

export default App;
