<?php 
$link = mysqli_connect('db', 'root','11040413');
if (!$link) {
	die('Error' . mysqli_error());
}
echo 'Good!';
mysqli_close($link);
?>
