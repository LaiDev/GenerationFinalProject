
console.log("event triggered");
const signupBtn = document.getElementById("signup-btn");

   signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const userEmail = document.getElementById("user-email").value;
      const password = document.getElementById("password").value;
      
         const user = {
            firstName: firstName,
            lastName: lastName,
            userEmail: userEmail,
            password: password
         };
         const addNewUser = (newUserData) => {
            const userData = window.localStorage.getItem('userData');
           
            if(userData === null) {

               window.localStorage.setItem('userData', JSON.stringify([newUserData]));
           
            } else {
            
            let exist = userData.length && 
            JSON.parse(localStorage.getItem('userData')).some(data => data.userEmail.toLowerCase() === document.getElementById("user-email").value.toLowerCase());
             
            if(!exist) {

               const getCurrentUser = window.localStorage.getItem('userData');
               const currentUser = JSON.parse(getCurrentUser);
              
               currentUser.push(newUserData);
               
               window.localStorage.setItem('userData', JSON.stringify(currentUser));
               
             } else {
               alert("Email already Exist!!\nSign in to your account!");
             }
           }
       };
       
         addNewUser(user);
         document.querySelector(".sign-up-form").reset();
         document.getElementById("first-name").focus();
        //  window.location.href="./login.html";
      });