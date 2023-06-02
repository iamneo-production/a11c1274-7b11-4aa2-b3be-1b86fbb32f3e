function validation(values){
   let error={}
   const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
   const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
   //Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
   if(values.email===""){
    error.email="Name should not be empty"
   }
   else if(!email_pattern.test(values.email)){
    error.email="Email is not valid"
   }
   else{
    error.email=""
   }
   if(values.password===""){
    error.password="Password should not be empty"
   }
   else if(!password_pattern.test(values.password)){
    error.password="Password is not valid"
   }
   else{
    error.password=""
   }
   return error;
}
export default validation;