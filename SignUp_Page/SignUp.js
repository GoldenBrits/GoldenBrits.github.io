var Checkbox = false;

var ErrorG = false;
var ErrorU = false;
var ErrorP = false;

//Function that resets the value of the Text box if it is empty
function TextBackUN(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '')
		{		
				Output.value="Example John Smith";		
	    }
}

//Function that Removes the Data in the text box if it contains nothing or the Example text.
function TextKeepUN(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '' || Content == 'Example John Smith')
	{
		Output.value="";
	}
}

//Function that reinputs the example text if the user hasn't entered anything or the Example Text is still present (incase of glitches or the user mesing with the system), it also changes the text box type to text if it reinputs the Example text so the user can read it.
function TextBackPW(Name)
{   
    var Output = document.getElementById(Name);
    var Content = document.getElementById(Name).value;
	if (Content == '' || Content == 'Example 6fI012/@;')
   	{
        Output.value="Example 6fI012/@;";
		SignUp_Password.type = "text";
    	}
	else
	{
		SignUp_Password.type = "password";	
	}
}

//Function that Deletes the text in the text box if the user clicks on it and the contained data is not User Inputted data, it also sets the Password type to text meaning it is able to be read
function TextKeepPW(Name)
{    
    var Output = document.getElementById(Name);
    var Content = document.getElementById(Name).value;
    if (Content == '' || Content == 'Example 6fI012/@;')
    {
        Output.value="";
		SignUp_Password.type = "text";
    }
    
    else if (!Checkbox)
    {
        SignUp_Password.type = "password";
    }
    
    else if (Checkbox)
    {
        SignUp_Password.type = "text";
    }
}


function TextBackEM(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '')
		{		
				Output.value="Example JohnSmith@mail.com";		
	    }
}


function TextKeepEM(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '' || Content == 'Example JohnSmith@mail.com')
	{
		Output.value="";
	}
}


function TextBackPN(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '')
		{		
				Output.value="Example 07794522365";	
	    }
}


function TextKeepPN(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '' || Content == 'Example 07794522365')
	{
		Output.value="";
	}
}


//The function that is called when the Submit Button is pressed, it's purpose is to check the format of the entered Data to see if it is valid
function SignUp_Attempt()
{
	var ContentUN = document.getElementById('SignUp_Username').value;
    var ContentPW = document.getElementById('SignUp_Password').value;
    var ContentPN = document.getElementById('SignUp_Phone').value;
    var ContentEM = document.getElementById('SignUp_Email').value;
	
	ErrorG = false;
	ErrorU = false;
	ErrorP = false;


	//checks for the Username and Password to be empty or the default Value
	if (ContentUN == "Example John Smith" || ContentUN == "")
	{
		ErrorU = true;
	}

	if (ContentPW == "Example 6fI012/@;" || ContentPW == "")
	{
		ErrorP = true;
	}

	//Checks if the Before mentioned Errors are true or not
	if (ErrorU == false && ErrorP == false)
	{
        //Regular Experssions that check for certain paramaters
        var Cap = ContentPW.match(/[A-Z]/);//Checks for Capital Letters in Password
		var Lower = ContentPW.match(/[a-z]/);//Checks for Lower Case Letters in Password
		var Num = ContentPW.match(/[\d]/);//Checks for a Number in Password
        var Spec = ContentPW.match(/[`¬!"£$%^&*(_)+=<>,.?/:;@'{[}#~}-]/);//Checks for a Special Character in Password
        var Email = ContentEM.match(/[@]/);//checks that the email contains an @
        var Phone = ContentPN.match(/[07]/);//checks the phone number has a 07 in it
        var PhoneL = ContentPN.length;//gets the length of the Phone Number
        
		//Error STring for the Error Message that is displayed to the user
		var ErrorString = "Error(s) found<br>";

		//The various if statments checking for errors such as no Capital letter in Password
		if (Cap == null)
		{			
			ErrorG = true;
			ErrorString += "No Capital Letter in Password<br>"; 
		}

		if (Lower == null)
		{			
			ErrorG = true;
			ErrorString += "No Lower Case Letter in Password<br>";
		}

		if (Num == null)
		{
			ErrorG = true;
			ErrorString += "No Number in Password<br>";
		}

		if (Spec == null)
		{
			ErrorG = true;
			ErrorString += "No Special Character in Password<br>";
		}

        if(ContentEM == null || ContentEM == 'Example JohnSmith@mail.com')
        {
            ErrorG = true;
            ErrorString += "No Email Entered<br>";
        }
        else if(Email == null)
        {
            ErrorG = true;
            ErrorString += "Not Valid Email Format<br>";
        }
        
        if(PhoneL != 11 || Phone == null || isNaN(ContentPN) == true)
        {
            ErrorG = true;
            ErrorString+="Not Valid Phone Number Format<br>"
        }

		//the final if statment that checks if there is an error or not, if there is an error then false is returned and error string is outputted the the error box
		if (ErrorG == true)
		{
			document.getElementById('Password_Info').innerHTML = ErrorString;
			return false;
		}
		else 
		{
			return true;		
		}
	}

	//The else statment meaning that there is an error with the default value or empty
	else
	{
		if (ErrorU == true && ErrorP == true)
		{
			document.getElementById('Password_Info').innerHTML = "Error with Username<br>Error with Password<br>Error found Default value or Empty";
			return false;
		}

		else if (ErrorP == true)
		{
			document.getElementById('Password_Info').innerHTML = "Error with Password<br>Error found Default value or Empty";
			return false;
		}

		else
		{
			document.getElementById('Password_Info').innerHTML = "Error with Username<br>Error found Default value or Empty";
			return false;
		}
	}
}
