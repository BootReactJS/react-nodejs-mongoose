import axios from "axios";
const url = "http://localhost:7374/api/users/sign-up";

export const getUserData = (firstName, lastName, email, password, confirmPassword) => {
    console.log(
        firstName.current.value,
        lastName.current.value,
        email.current.value,
        password.current.value,
        confirmPassword.current.value    
    )
    
    const newuser = {
    "firstName": firstName.current.value,
    "lastName": lastName.current.value,
    "email": email.current.value,
    "password": password.current.value,
    "confirmPassword": confirmPassword.current.value

  };
  //console.log(newuser);

  axios.post(url, newuser)
    .then( (response)=> {
        console.log(response);
        alert("success")
    })
    .catch( (error)=>{
        console.log(error);
        alert("Failed")

    });
}