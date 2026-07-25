import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import AuthService from "./AuthService"
import { UserModel } from "../model/Usermodel"

const dbPath = "users"
class UserService {

    async Login(email, password) {

        try {
            // auth 
            let UserCreed = await signInWithEmailAndPassword(auth, email, password)
            const uid = UserCreed.user.uid

            // db 
           
            let UserDoc = await getDoc(doc(db, dbPath, uid))
            const UserData = UserDoc.data()

            AuthService.setData(UserData,uid)

            return UserData.userType


        } catch (err) {
            console.log(err);
            // toast.error("NO data")
            
        }



    }

    async Register(data){
        try {
            
           let userCreed=await createUserWithEmailAndPassword(auth ,data.email , data.password)
           let uid=userCreed.user.uid

           let obj=new UserModel()
           obj.name=data.name
           obj.email=data.email
           obj.contact=data.contact
           obj.profile=data.profile
           obj.address=data.address

           let Data2= {...obj}
        

          await setDoc(doc(db,dbPath,uid), Data2)

          AuthService.setData(Data2,uid)

          return 1
           

        } catch (error) {
            console.log(error);
            toast.error(error.message)

            return 0
             
        }
    }

}

export default new UserService