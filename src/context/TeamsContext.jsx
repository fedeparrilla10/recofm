import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TeamsContext = createContext();

export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getTeams = await axios.get(
        'https://64c2cbb5eb7fd5d6ebd0564b.mockapi.io/teams'
      );
      setTeams(getTeams.data);
    };
    getData();
  }, []);

  return (
    <TeamsContext.Provider value={{ teams }}>{children}</TeamsContext.Provider>
  );
};
