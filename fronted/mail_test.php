<html>
<body>

<?php
if (isset($_REQUEST['email']))
//if "email" is filled out, send email
{
//send email
$email = $_REQUEST['email'] ;
$subject = $_REQUEST['subject'] ;
$server = $_SERVER['HTTP_HOST'];
$message = "If you got this message, mail sending from $server is working fine :)" ;
mail( "$email", "$subject",
$message, "From: info@" . $_SERVER['HTTP_HOST'] );
echo "Message has been sent to $email";
}
else
//if "email" is not filled out, display the form
{
$server = $_SERVER[HTTP_HOST];
echo "<h1>Mail test from $server</h1>
<form method='post' action='" . $_SERVER['PHP_SELF'] . "'>
Enter Your Email: <input name='email' type='text' /><br /><br />
subject: <input name='subject' type='text' /><br /><br />
message: <textarea name='message' ></textarea><br /><br />

<input type='submit' name='Submit' value='Submit' />
</form>";
}
?>

</body>
</html>