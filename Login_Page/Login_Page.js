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
		var Cap = ContentPW.match(/[A-Z]/);
		var Lower = ContentPW.match(/[a-z]/);
		var Num = ContentPW.match(/[\d]/);
		var Spec = ContentPW.match(/[`¬!"£$%^&*(_)+=<>,.?/:;@'{[}#~}-]/);
		
		var ErrorString = "Error(s) found:<br>";

		if (Cap == null)
		{			
			ErrorG = true;
			ErrorString += "No Capital Letter<br>"; 
		}

		if (Lower == null)
		{			
			ErrorG = true;
			ErrorString += "No Lower Case Letter<br>";
		}

		if (Num == null)
		{
			ErrorG = true;
			ErrorString += "No Number<br>";
		}

		if (Spec == null)
		{
			ErrorG = true;
			ErrorString += "No Special Character";
		}

		console.log(ErrorG);
		
		if (ErrorG == true)
		{
			document.getElementById('Password_Info').innerHTML = ErrorString;
		}
		else 
		{
			//check database and stuff
		}
	}
	else
	{
		if (ErrorU == true && ErrorP == true)
		{
			document.getElementById('Password_Info').innerHTML = "Error with Username<br>Error with Password<br>Error found Default value or Empty";
		}

		else if (ErrorP == true)
		{
			document.getElementById('Password_Info').innerHTML = "Error with Password<br>Error found Default value or Empty";
		}

		else
		{
			document.getElementById('Password_Info').innerHTML = "Error with Username<br>Error found Default value or Empty";
		}
	}
}
