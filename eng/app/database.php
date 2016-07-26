<?php
	class Database{
		private $serverName = 'localhost';
		private $userDb = 'ivan';
		private $password = '';
		private $dbName = 'fond_nadii';
		private $mysqli;

		public function __construct(){
			$this->mysqli = mysqli_connect('localhost',"root","", 'fond');
		}

			public function save($tableName, $email){
			$query = "INSERT INTO $tableName (email) VALUES (" . $email. ")";
				var_dump($query);
			$result = $this->mysqli->query($query);
            return $result;
		}

	}
?>
