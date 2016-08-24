<?php
	if(isset($_POST['mail'])){
		try{
			$mysqli = new mysqli("mysql.hostinger.ru","u503790362_data","m28RkBa0e6","u503790362_data");
			if ($mysqli->connect_errno) {
			    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
			    return;
			}
			// mysqli_connect();
			// mysql_select_db();

			$ip = $_SERVER['REMOTE_ADDR'];
			$mail = $_POST['mail'];
			$mail=  str_replace("'",'', $mail);
			$name = $_POST['name'];
			$name=  str_replace("'",'', $name);
			$message = $_POST['message'];
			$message=  str_replace("'",'', $message);

			$sql = "insert into tableEmail(ip,mail,name,message) values('".$ip."','".$mail."','".$name."','".$message."')";
			// mysql_query($sql);

			// mysql_close();

			if (!$mysqli->query($sql)) {
			    echo "Не удалось выполнить запрос (" . $mysqli->errno . ") " . $mysqli->error;
			}
			else{
				//$body=file_get_contents("http://sms.ru/sms/send?api_id=B7070A69-A110-C029-3214-7B39C3FE6FC6&to=79857532807&text=".urlencode(iconv("windows-1251","utf-8","mail - ".$mail)));
				echo "Заявка принята, с вами свяжутся.";
			}
		}catch (Exception $e) {
			echo $e;
		}
	}
?>