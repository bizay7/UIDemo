function login(){

    var username = document.getElementById("loginUser").value;

    var pwd = document.getElementById("loginPassword").value;



    if(username==''){

        alert("Enter Username!!!")

    }

    else if(pwd.length<8){

        alert("Password should be more than 8 charcters. ")

    }


    else{

        alert("Succesful Login !!!")
      //  console.log(" Username:"+username+"\n Password:"+pwd)


    }
    console.log(" Username:"+username+"\n Password:"+pwd)



}

function reset()
{
    alert("Reset Link has been sent !!!")

    console.log("Reset Link has been sent !!! ")

}
