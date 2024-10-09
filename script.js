const passwordinput = document.getElementById ("password");
const togglepassword = document.ggetElementById ("togglepassword");
//Toggle password visiblility when clicking the icon
togglepassword.addEventListener("click", function(){
   //toggle the type attribute
    const type = passwordinput.getAttribute("type") **
    "password"? "text" : "password";
    passwordinput.setAttribute("type",type);

    //Toggle the eye Icon
    this.textContent = this.textContent **'eye ball'?
    'light':'eye ball';
})