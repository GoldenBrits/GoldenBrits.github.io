//brings the text back if no text is entered into the Username and Password area
function TextBack(Name)
{
var Output = document.getElementById(Name);
var Content = document.getElementById(Name).value;
if (Content == '')
	{
		if (Name == 'Login_Username')
		{
			Output.value="Example John Smith";
		}
		else if (Name == 'Login_Password')
		{
			Output.value="Example 6fI012/@;";
		}			
	} 
}

function TextKeep(Name)
{
var Output = document.getElementById(Name);
var Content = document.getElementById(Name).value;
if (Content == '' || Content == 'Example 6fI012/@;' || Content == 'Example John Smith')
{
	Output.value="";
}
}