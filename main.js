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

const handleRegister = e => {
   cleanAlert();
   e.preventDefault();

   var element = document.getElementById('form-alert');
   var wrapper = document.getElementById('reg');
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var password2 = document.getElementById("password2").value;

   var fields = [username,password,password2]

   const popAlert = (str) => {
       if(element) return;
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
       if(!element) return;
       wrapper.removeChild(element);
   };

   fields.pop(); // eliminem el botó
   
   if(isEmpty(username)  || isEmpty(password)|| isEmpty(password2)){
      return popAlert("¡You forgot something!");
   }else cleanAlert();
   if(password!=password2){
      return popAlert("¡Your password doesn't match!");
   }else cleanAlert();
  //hacer control de user
  window.location.href = "web.html"

};

const handleSubmitGetFormData = e => {
   
   e.preventDefault();

   var element = document.getElementById('form-alert');
   var wrapper = document.getElementById('form');
   var user = document.getElementById("user").value;
   var pass = document.getElementById("pass").value;
   var fields = [user,pass]
   const popAlert = () => {
       if(element) return;
       var section = document.createElement('section');
       var alert = document.createElement('div');
       section.id = "form-alert";
       section.className = "col-10";
       alert.className = "alert alert-danger text-center";
       alert.innerHTML = "¡You forgot something!";
       section.appendChild(alert);
       wrapper.insertBefore(section, wrapper.lastChild);
   };
   
   const cleanAlert = () => {
       if(!element) return;
       wrapper.removeChild(element);
   };

   fields.pop(); // eliminem el botó

   if(isEmpty(user)  || isEmpty(pass)){
      return popAlert();
   }else cleanAlert();
  
  //hacer control de user
  window.location.href = "web.html"

};


window.onload = function() {
   


   var ima = ["https://i.pinimg.com/564x/74/4c/52/744c52ee7d5e6e98f6d325d3509ba203.jpg", 
"https://i.pinimg.com/564x/54/40/a3/5440a34828b77f8440ba4012b8b7847a.jpg",
"https://i.pinimg.com/564x/02/05/25/02052548ce19de86672c62d91876cd08.jpg",
"https://i.pinimg.com/564x/93/a6/99/93a699472f76ab7f0b5a6f49c079a8a0.jpg",
"https://i.pinimg.com/564x/3e/de/4b/3ede4b9a2a4ca6dd08d6aaf38352a422.jpg",
"https://i.pinimg.com/564x/ec/87/7a/ec877a1dd3084e7b4d6f81b8c54c38de.jpg",
"https://i.pinimg.com/564x/69/be/65/69be65a375a2aea7be2fbe5bf1c17305.jpg",
"https://i.pinimg.com/564x/97/8a/90/978a90576e0f0ae7cca430c1e3b00fa1.jpg",
"https://i.pinimg.com/564x/57/a0/d6/57a0d6b53e0604a0db6a1f3b05b59282.jpg",
"https://m.media-amazon.com/images/I/61nt34iuBkL._SS500_.jpg",
"https://m.media-amazon.com/images/I/61nt34iuBkL._SS500_.jpg",
"https://m.media-amazon.com/images/I/61nt34iuBkL._SS500_.jpg"];
   var price = ["20€","15€","24€","20€","15€","24€","20€","15€","24€","Unavailable","Unavailable","Unavailable"];
   var title = ["Art print of Noelle Silva","Art print of Luchia Nanami",
"Art print of bunny girl","Art print of Miroku","Art print of Sango","Art print of Kagome",
"Art print of Ban","Art print of Kochou Shinobu","Art print of Ginger","Coming soon","Coming soon","Coming soon"];
   var what = "Add to cart";

   for (let i = 0; i < 12; i++){
    $("#render").append(`
    <div class="col pad">
    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
      <img src=${ima[i]} class="card-img-top" alt="Noelle">
      <div class="card-body">
        <h5 class="card-title">${price[i]}</h5>
        <p class="card-text">${title[i]}</p>
        <div class="input-group mb-3"> <span class="input-group-text">+</span> <input type="text" class="form-control" value="1"> <span class="input-group-text">-</span> </div> 
        <a href="#" class="btn btn-primary">${what}</a>
      </div>
    </div>
  </div>
      
   `);
   }

   
}