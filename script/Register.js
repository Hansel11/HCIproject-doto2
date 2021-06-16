function validateEmail(email) {
    var at = email.indexOf("@");
    var dot = email.lastIndexOf("\.");
    return email.length > 0 &&
        at > 0 &&
        dot > at + 1 &&
        dot < email.length &&
        email[at + 1] !== "." &&
        email.indexOf(".") !== 0 &&
        email.indexOf(" ") === -1 &&
        email.indexOf("..") === -1;
}

function verifyAge(date){
    var today = new Date();
    var dob = new Date(date);
    var age = Math.floor((today - dob) / 1000 / 60 / 60 / 24 / 365.25);
    return age >= 13;
}

$("form").submit(function(e){
    
    fields = [
        "name",
        "email",
        "pass",
        "confirm",
        "dob",
        "region"
    ];

    // Get Form data
    // Verify fields not empty
    var data = {};
    var valid = true;
    try{            
        fields.forEach(element => {
            data[element] = $("#"+element).val();
            if(data[element] == "")throw Exception;                
        });
    }catch(ex){
        alert("All fields must be filled!");
        e.preventDefault();
        return;
    }

    // Verify Email
    if(!validateEmail(data["email"])){
        alert("Email is invalid!");
        e.preventDefault();
        return;
    }

    // Verify Password
    if(data["pass"] != data["confirm"]){
        alert("Password didn't match!");
        e.preventDefault();
        return;
    }

    // Verify Age        
    if(!verifyAge(data["dob"])){
        alert("You must be 13 years old or older!");
        e.preventDefault();
        return;
    }

    // Verify Gender
    if(!$('.gender:checked').val()){
        alert("Gender must be picked!");
        e.preventDefault();
        return;
    }        

    // Verify Region
    if(!data["region"]){
        alert("Region needs to be selected!");
        e.preventDefault();
        return;
    }
    
    alert("Register successful!");
});
