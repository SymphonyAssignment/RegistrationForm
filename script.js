var f1=0;
var f2=0;
var f3=0;
var f4=0;
var f5=0;
var f6=0;


        function validateform(){  
          var password = document.getElementById("pwd").value;
          var confirmPassword = document.getElementById("confpwd").value;
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            document.getElementById("form").reset();
            return true;  
          }
      
        function disableSubmit() {
          document.getElementById("submit").disabled = true;
          }
      
        function activateButton(element) {
          if(f1 && f2 && f3 && f4 && f5 && f6)
          {
            if(element.checked)
            document.getElementById("submit").disabled = false;
          else  
          document.getElementById("submit").disabled = true;
          }
        }

      function function1() {
        var str = document.getElementsByClassName("fullname")[0];
        var str1= document.getElementById("fullname").name;
      var patt = /^[a-zA-Z ]{2,30}$/;
      var res = patt.test(str.value);
      if(res==false)
      {
      showerror(str1);
      document.getElementById("submit").disabled=true;
      document.getElementById("demo1").innerHTML = "Name should have characters only and length should be between 2 and 30";
      }else
      {
      showsuccess(str1);
      document.getElementById("submit").disabled=false;
      document.getElementById("demo1").innerHTML = "";
      }
      f1=res;
     
    }
    
    function showsuccess(x) {
      console.log(x);
      document.getElementById(x).style.color="#2b7515";
      document.getElementById(x).style.background="#ecffd6";
      document.getElementById(x).style.border="1px solid #617c42";
    }
    function showerror(x) {
      console.log(x);
      document.getElementById(x).style.color="#ba3939";
      document.getElementById(x).style.background="#ffe0e0";
      document.getElementById(x).style.border="1px solid #a33a3a";
    }


    function function2() {
        var str = document.getElementsByClassName("email")[0];
        var str1= document.getElementById("email").name;
      var patt = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,}$/;
      var res = patt.test(str.value);
      if(res==false)
      {
      document.getElementById("demo2").innerHTML = "Email should be in the given format and should have 3 or more letters before @ and atleast 2 letters after . symbol";
      document.getElementById("submit").disabled=true;
      showerror(str1);
      }else
      {
      showsuccess(str1);document.getElementById("demo2").innerHTML = "";
      document.getElementById("submit").disabled=false;
           }     f2=res;
      
    }


    function function3() {
        var str = document.getElementById("pwd").value;
        var str1= document.getElementById("pwd").name;
      var patt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      var res = patt.test(str);
      if(res==false)
      {
      document.getElementById("demo3").innerHTML = "Password must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter";
      showerror(str1);
      document.getElementById("submit").disabled=true;
      }
      else
      {
        document.getElementById("submit").disabled=false;
      showsuccess(str1);document.getElementById("demo3").innerHTML = "";
           }     f3=res;
  
    }

    function function4() {
      var password = document.getElementById("pwd").value;
      var confirmPassword = document.getElementById("confpwd").value;
      var str1= document.getElementById("confpwd").name;
      console.log(password);
      console.log(confirmPassword);
          var res=false;
            if (password != confirmPassword) 
            {
              document.getElementById("submit").disabled=true;
              document.getElementById("demo4").innerHTML ="Passwords do not match.";
              showerror(str1);
            }
      else
      {
        res=true;
        document.getElementById("submit").disabled=false;
        document.getElementById("demo4").innerHTML = "";
        showsuccess(str1);      
      }
      f4=res;
  
    } 
    

    function function5() {


var today = new Date();
var nowyear = today.getFullYear();
var nowmonth = today.getMonth();
var nowday = today.getDate();

var b = document.getElementById("birthday").value;

var birth = new Date(b);

var birthyear = birth.getFullYear();
var birthmonth = birth.getMonth();
var birthday = birth.getDate();

var age = nowyear - birthyear;


var res=false;
if (age < 18  || age > 60) 
{
  document.getElementById("submit").disabled=true;
    document.getElementById("demo5").innerHTML = "Age should be more than 18 years and less than 60 years";
}
  else
  {
    document.getElementById("submit").disabled=false;
        res=true;
      document.getElementById("demo5").innerHTML = "";
  }  
  f5=res;
  
}

function function6() 
{
        var str = document.getElementsByClassName("phone")[0];
        var str1= document.getElementById("phone").name;
      var patt = /^[0-9]{10}$/;
      var res = patt.test(str.value);
      if(res==false){

      document.getElementById("demo6").innerHTML = "Phone Number should contain only digits and should be of length 10";
      document.getElementById("submit").disabled=true;
       showerror(str1);
       }
        else
        {
          document.getElementById("submit").disabled=false;
      showsuccess(str1);document.getElementById("demo6").innerHTML = "";      
        }f6=res;

}
