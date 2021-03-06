$(document).ready(function() {

    $(document).on("submit", "#reg", function() {
      event.preventDefault();

      const postUser = (userdata) =>{
        $.post("/api/user", userdata)
        .then(getUser)
    };


    const getUser = () => {
      $.get("/api/user", function(data) {
          for (let i = 0; i < data.length; i++) {
    
            if (email === data[i].email && password === data[i].password) {
    
              userId = data[i].id;
    
              login(userId);
    
            };
          };
        });
    };

      // Grabs email & password from login page
      let name = $("#name").val().trim();
      let email = $("#email").val().trim();
      let password = $("#password").val().trim();

      console.log(name)

      if (name === "" || email === "" || password === "") {
        alert("Please fill out all of the form!")
      }
      else {
        // POST Method
        postUser({
          name,
          email,
          password
        });
      };
    });
  });
  
  
  const login = (userId) => {
    location.href = "/create-hangout?user_id=" + userId;
  }