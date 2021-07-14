


function isEmpty(str) {
   return (!str.trim().length || str === null); //mirar tambien fdf.value === null
}

window.addEventListener("load", () => {
   document.getElementById("form")
      .addEventListener('submit', handleSubmitGetFormData);
});

window.addEventListener("load", () => {
   document.getElementById("reg")
      .addEventListener('submit', handleRegister);
});

window.addEventListener("load", () => {
   document.getElementById("addcard")
      .addEventListener('submit', handleAddCard);
});

const handleAddCard = e => {
 
   e.preventDefault();

   var element = document.getElementById('form-alert');
   var wrapper = document.getElementById('addcard');
   var photo = document.getElementById("photo").value;
   var price = document.getElementById("price").value;
   var title = document.getElementById("title").value;
   var contact = document.getElementById("contact").value;

   var fields = [photo,price,title,contact]
   console.log(fields)


   fields.pop(); // eliminem el botó

   if (isEmpty(photo) || isEmpty(title) || isEmpty(price) || isEmpty(contact)) {
      alert("¡You forgot something!");
   }

   let json = { url:photo, title:title, price:price, contact:contact} 
   axios.post(`https://tinalandia.herokuapp.com/cards`, json)
   .then(response => {
      alert(`Card added`)
      location.reload();
   })
   .catch(err => {
      console.log(err)
   })
  
};


const handleRegister = e => {
 
   e.preventDefault();

   var element = document.getElementById('form-alert');
   var wrapper = document.getElementById('reg');
   var email = document.getElementById("email").value;
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var password2 = document.getElementById("password2").value;

   var fields = [username, email, password, password2]

   const popAlert = (str) => {
      if (element) return;
      var section = document.createElement('section');
      var alert = document.createElement('div');
      section.id = "form-alert";
      section.className = "col-10";
      alert.className = "alert alert-danger text-center";
      alert.innerHTML = str;
      section.appendChild(alert);
      wrapper.insertBefore(section, wrapper.lastChild);
   };

   const cleanAlert = () => {
      if (!element) return;
      wrapper.removeChild(element);
   };


   fields.pop(); // eliminem el botó

   if (isEmpty(username) || isEmpty(password) || isEmpty(password2) || isEmpty(email)) {
      return popAlert("¡You forgot something!");
   }
   else if (password != password2) {
      return popAlert("¡Your password doesn't match!");
   }
   var hello = axios.get(`https://tinalandia.herokuapp.com/users?username=${username}`)

      .then(response => {

         if (response.data.length == 0) {

            let json = { username:username, email:email, password:password} 

            axios.post(`https://tinalandia.herokuapp.com/users`, json)
               .then(response => {
                  alert(`Welcome ${username}, an email has been sent to your email address`)
                  window.location.href = "web.html"

               })
               .catch(err => {
                  console.log(err)
               })
         }
         else return popAlert("¡Taken username!");
      })

      .catch(err => {

         console.log(err)


      })
};

const handleSubmitGetFormData = e => {

   e.preventDefault();

   var element = document.getElementById('form-alert');
   var wrapper = document.getElementById('form');
   var user = document.getElementById("user").value;
   var pass = document.getElementById("pass").value;
   var fields = [user, pass]
   const popAlert = (str) => {
      if (element) return;
      var section = document.createElement('section');
      var alert = document.createElement('div');
      section.id = "form-alert";
      section.className = "col-10";
      alert.className = "alert alert-danger text-center";
      alert.innerHTML = str;
      section.appendChild(alert);
      wrapper.insertBefore(section, wrapper.lastChild);
   };

   const cleanAlert = () => {
      if (!element) return;
      wrapper.removeChild(element);
   };

   fields.pop(); // eliminem el botó

   if (isEmpty(user) || isEmpty(pass)) {
      cleanAlert();
      return popAlert("¡You forgot something!");
   }
   var hello = axios.get(`https://tinalandia.herokuapp.com/users?username=${user}`)

      .then(response => {

         if (response.data.length == 0) {

            popAlert("¡Wrong username/password!");
            //user dones't exist

         }
         else if (pass === response.data[0].password) {
            activeUser = user
            cleanAlert();
            alert(`Welcome ${user}`);
          
            window.location.href = "web.html" //nice password

         }
         else {
            cleanAlert();
            popAlert("¡Wrong username/password!"); //wrong password
         }
      })

      .catch(err => {

         console.log(err)


      })


};

window.onload = function () {

   var hello = axios.get(`https://tinalandia.herokuapp.com/cards`)
   
   .then(response => {

      for (let i = 0; i < response.data.length; i++) {
         $("#render").append(`
       <div class="col pad">
       <div class="card text-white bg-dark mb-3" style="width: 18rem;">
         <img src=${response.data[i].url} class="card-img-top demo" alt="${response.data[i].title}">
         <div class="card-body demo">
           <h5 class="card-title">${response.data[i].price}€</h5>
           <p class="card-text">${response.data[i].title}</p>
         </div>
         <div class="middle">
            <div class="text">Contact at ${response.data[i].contact}</div>
         </div>
         <div class="phoneonly">Click for contact info</div>
       </div>
     </div>
         
      `);
      }
   })

   .catch(err => {

      console.log(err)


   })

}