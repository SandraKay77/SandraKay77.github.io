var vHeight;  
var vWidth;
const smMobile = 640;
const mdMobile = 768;
const lgTablet = 1024;
const navItems = $('.nav-item');

function mobileMenu() {
  console.log("Screen is Mobile Size");
  
  $('.nav-item').toggleClass("hidden block");

  // $('.nav-wrapper').toggleClass("hidden");
  console.log(myViewSize());
};

function myViewSize() {
  let viewSize;
  if (vWidth <= smMobile){
    viewSize = "smallView";
  } else if (vWidth <= mdMobile){
    viewSize = "medView";
  } else if (vWidth <= lgTablet){
    viewSize = "largeView";
  } else {
    viewSize = "xlView";
  }
  return viewSize;
}

function mobileScreen(){
  if (myViewSize() == "smallView"){
    return true;
  } else {
    return false;
  }
}


// flexing the mobile menu items
function hideNavItems(){
  if (mobileScreen()){
    $('.nav-item').css("display", "none");
  }
  else {
    $('.nav-item').css("display", "inline");
  }
}

$(document).ready(function(){
  vHeight = screen.width;
  vWidth = screen.width;



  console.log(myViewSize());
  console.log("Actual width = " + vWidth);
  console.log(mobileScreen());


  // calling function to flex the mobile menu items
  


  

  


})
