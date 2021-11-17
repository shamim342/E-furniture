import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../firebase/firebase.init";

initialization()
const useFirebase =()=>{
    const [user , setUser] = useState({});
    const [error , setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }


   

    const logout =()=>{
        signOut(auth).then(() => {
            setUser('');
            
          }).finally(() => setIsLoading(false));
          
    }

    const newUser =(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then(result=> {
    
    const user = result.user;
    console.log(user);

  })
  .catch(error => {
    setError(error.message);
  });
    }

    const loginUser=(email,password)=>{
        signInWithEmailAndPassword(auth ,email, password)
        .then(result => {
            // Signed in 
            const user = result.user;
            console.log(user);
            // ...
          })
          .catch(error=> {
            setError(error.message)
        });
        
    }


    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, user => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)

          });
          return ()=> unsubscribe;
        
    },[])
    return {user , signInGoogle , logout ,newUser,loginUser }
}
export default useFirebase;