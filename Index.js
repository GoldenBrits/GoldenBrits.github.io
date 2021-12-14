var Checkbox = false;


function TextBackUN(name)
{
var Output = document.getElementById(Name);
var Content = document.getElementById(Name).value;
if (Content == '')
	{
		if (Name == 'Login_Username')
		{
			Output.value="Example John Smith";
		}
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


function TextKeepPW(Name)
{
var Output = document.getElementById(Name);
var Content = document.getElementById(Name).value;
if (Content == '' || Content == 'Example 6fI012/@;')
{
	Output.value="";
}


function TextBackPW(Name)
{
Checkbox = !Checkbox;

var Content = document.getElementById(Name).value;

if (Content == ''|| Content == 'Example 6fI012/@;')
{
	Login_Password.type = "text";	
}
else if (Content != '' && Content != 'Example 6fI012/@;')
{
	
}
}
