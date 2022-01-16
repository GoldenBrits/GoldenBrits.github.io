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
	var ContentUN = document.getElementById('Login_Username');
	var ContentPW = document.getElementById('Login_Password');

	var ErrorU = false;
	var ErrorP = false;

	if (ContentUN == "Example John Smith" || ContentUN == "")
	{
		ErrorU = true;
	}


	if (ContentPW == "Example 6fI012/@;" || ContentPW == "")
	{
		ErrorP = true;
	}

	console.log(ErrorP, ErrorU);
	
	if (ErrorU == false && ErrorP == false)
	{
		var Cap = ContentPW.search(/A-Z/);
		var Lower = ContentPW.search(/a-z/);
		var Num = ContentPW.search(/\d/);

		var Spec = ContentPW.search(Pog);//Must Find a fix to Urgently[][][][][][][]][][][][][][][][][][][][][][][][]

		var Error = false;
		var ErrorC = false;
		var ErrorL = false;
		var ErrorN = false;
		var ErrorS = false;
		if (Cap = -1)
		{			
			Error = true;
			ErrorC = true;
		}
		else if (Lower = -1)
		{
			
			Error = true;
			ErrorL = true;
		}
		else if (Num = -1)
		{
			Error = true;
			ErrorN = true;
		}
		else if (Spec = -1)
		{
			Error = true;
			ErrorS = true;
		}
		console.log(Error, ErrorS, ErrorN, ErrorL, ErrorC,);
	}
	else
	{
		//Don't put the default Values in Error message witha  check to see which one if not both is the issue
	}
}
