<?php
header('Location: ./ukr/index.php');
if(isset($_COOKIE['fond'])){
    header('Location: ' . $_COOKIE['fond'] .'index.php');
}else{
    setcookie('fond','ukr',time() + (86400 * 30), "/");
    header('Location: ./ukr/index.php');
}