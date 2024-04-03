import { createContext } from 'react';


const AuthContext = createContext({ isAuth: false, setIsAuth: () => { }});

export default AuthContext; 

