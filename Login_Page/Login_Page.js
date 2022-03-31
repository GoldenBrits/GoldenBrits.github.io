var Checkbox = false;

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
		Login_Password.type = "text";
    	}
	else
	{
		Login_Password.type = "password";	
	}
}


function TextKeepPW(Name)
{    
    var Output = document.getElementById(Name);
    var Content = document.getElementById(Name).value;
    if (Content == '' || Content == 'Example 6fI012/@;')
    {
        Output.value="";
		Login_Password.type = "text";
    }
    
    else if (!Checkbox)
    {
        Login_Password.type = "password";
    }
    
    else if (Checkbox)
    {
        Login_Password.type = "text";
    }
}


function Login_Attempt()
{
	var ContentUN = document.getElementById('Login_Username').value;
    var ContentPW = document.getElementById('Login_Password').value;
	
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
        

		if (Cap == null)
		{			
			ErrorG = true;
		}

		if (Lower == null)
		{			
			ErrorG = true;
		}

		if (Num == null)
		{
			ErrorG = true;
		}

		if (Spec == null)
		{
			ErrorG = true;
		}

        if(ContentEM == null || ContentEM == 'Example JohnSmith@mail.com')
        {
            ErrorG = true;
        }
        else if(Email == null)
        {
            ErrorG = true;
        }
        
        if(PhoneL != 11 || Phone == null || isNaN(ContentPN) == true)
        {
            ErrorG = true;
        }


		if (ErrorG == true)
		{
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
