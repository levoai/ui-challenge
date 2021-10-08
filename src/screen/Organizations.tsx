import React, { useState, useEffect } from 'react';
import styles from './Organizations.module.css';
import OrganizationItem from "../components/OrganizationItem";
import axios from 'axios';

export const App: React.FunctionComponent = () => {
  const [organizationList, setOrganizationList] = useState(
    [
      { "id": 1, "name": "Livetube", "owner_email": "glepick0@github.io", "owner_name": "Gwenneth Lepick", "owner_picture": "http://dummyimage.com/115x100.png/dddddd/000000" },
      { "id": 2, "name": "Flipbug", "owner_email": "pgulland1@about.me", "owner_name": "Padget Gulland", "owner_picture": "http://dummyimage.com/206x100.png/ff4444/ffffff" }]
  );

  useEffect(() => {
    axios.get('https://my.api.mockaroo.com/organizations.json?key=2e435a20')
      .then((res) => setOrganizationList(res.data))
      .catch(function (error) {
      });;
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.fonth3}>Organizations</h3>
      <p className={styles.fontp}>Pick the organization you want to access to</p>
      {organizationList.map((item) => (
        <OrganizationItem key={item.id} item={item}></OrganizationItem>
      ))}
    </div>
  );
}

export default App;

