function validate() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastName").value;
    var form = document.getElementById("title").value;
    var position = document.getElementById("businessArea").value
    var streetNo = document.getElementById("street").value;
    var zipCode = document.getElementById("zipCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var additionalInformation = document.getElementById("additionalInfo").value;
    var placeValid = document.getElementById("place").value;
    var region = document.getElementById("code").value;
    var country = document.getElementById("country").value;
    var checkbox = document.getElementById("terms").value;
    // Check if first name is empty
    if (firstName == "") {
        alert("First name must be filled out");
        return false;
    }
    if (lastName == "") {
        alert("Last name must be filled out");
        return false;
    }

    // check if form-select is empty or invalid
    if (form == "select") {
        alert("Select your Position is filled out");
        return false;
    }

    //check if Business Area is empty or invalid
    if (position == "") {
        alert("Please enter your Business area");
        return false;
    }

    //check if Street No is empty or invalid
    if (streetNo == "") {
        alert("Street-No must be filled out ");
        return false;
    }

    // Additional Information
    if (additionalInformation == "") {
        alert("Additional Information must be filled out");
        return false;
    }


    // Check if zip code is empty
    if (zipCode == "") {
        alert("Zip code must be filled out");
        return false;
    }


    // place
    if (placeValid == "") {
        alert("Place must be filled out");
        return false;
    }

    // country
    if (country == "") {
        alert("Country must be filled out");
        return false;
    }

    // Region
    if (region == "") {
        alert("region must be filled out");
        return false;
    }
    // Check if phone number is empty
    if (phoneNumber == "") {
        alert("Please Enter a 10-digit number");
        return false;
    }

    // Check if email is empty or invalid
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // 
    if(!terms.checked){
        alert("Please agree to the terms and Conditions");
        return false;
    }
}