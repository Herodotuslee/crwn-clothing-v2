import { signInWithGooglePopup } from "../../utiles/firebase/firebase.utiles"
const SignIn = () => {

    // question!! async
    const logGoogleUser =async ()=>{
        const response = await signInWithGooglePopup();
        console.log(response)
    }
    return (
        // in react mush have a parent 
        // CRUD: Create/Read/update/delete 
        <>
         Sign in
         <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </>
    )
}

export default  SignIn