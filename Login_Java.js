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
	var ContentUN = document.getElementById(Login_Username).value;
	var ContentPW = document.getElementById(Login_Password).value;

	if (ContentUN == "Example John Smith" || ContentUN == "")
	{
		Invalid Username Error
	}
	else if (ContentPW == "Example 6fI012/@;" || ContentPW == "")
	{
		Invalid Password Error
	}
	else
	{
		const regex = /[A-Z]/g;
		const found = ContentPW.match(Regex);
		
		if (found)
		{
			console.log(Found)
		}
	}
}
