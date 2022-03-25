var Checkbox = false;

var ErrorG = false;
var ErrorU = false;
var ErrorP = false;


function TextBackUN(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '')
		{		
				Output.value="Example John Smith";		
	    }
}


function TextKeepUN(Name)
{
	var Output = document.getElementById(Name);
	var Content = document.getElementById(Name).value;
	if (Content == '' || Content == 'Example John Smith')
	{
		Output.value="";
	}
}


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


function SignUp_Attempt()
{
	var ContentUN = document.getElementById('SignUp_Username').value;
    var ContentPW = document.getElementById('SignUp_Password').value;
    var ContentPN = document.getElementById('SignUp_Phone').value;
    var ContentEM = document.getElementById('SignUp_Email').value;
	
	ErrorG = false;
	ErrorU = false;
	ErrorP = false;

	if (ContentUN == "Example John Smith" || ContentUN == "")
	{
		ErrorU = true;
	}

	if (ContentPW == "Example 6fI012/@;" || ContentPW == "")
	{
		ErrorP = true;
	}
	if (ErrorU == false && ErrorP == false)
	{
        //Regular Experssions that check for certain paramaters
        var Cap = ContentPW.match(/[A-Z]/);//Checks for Capital Letters in Password
		var Lower = ContentPW.match(/[a-z]/);//Checks for Lower Case Letters in Password
		var Num = ContentPW.match(/[\d]/);//Checks for a Number in Password
        var Spec = ContentPW.match(/[`¬!"£$%^&*(_)+=<>,.?/:;@'{[}#~}-]/);//Checks for a Special Character in Password
        var Email = ContentEM.match(/[@]/);
        var Phone = ContentPN.match(/[07]/);
        var PhoneL = ContentPN.length;
        
		
		var ErrorString = "Error(s) found<br>";

		if (Cap == null)
		{			
			ErrorG = true;
			ErrorString += "No Capital Letter in Psssword<br>"; 
		}

		if (Lower == null)
		{			
			ErrorG = true;
			ErrorString += "No Lower Case Letter in Psssword<br>";
		}

		if (Num == null)
		{
			ErrorG = true;
			ErrorString += "No Number in Psssword<br>";
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
