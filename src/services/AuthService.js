class AuthService{

    setData(data,id){
        localStorage.setItem("uid",id)
        localStorage.setItem("email",data.email)
        localStorage.setItem("name",data.name)
        localStorage.setItem("userType",data.userType)
        localStorage.setItem("isLogin",true) 
    }

    getUserType(){
       return localStorage.getItem("userType")
    }

    getISLogin(){
       return localStorage.getItem("isLogin")
    }

    ClearData(){
        localStorage.clear()
    }



}

export default new AuthService