<?php

$string="Hello World";
$integer=9;
$float=9.02;
$car=array("Toyota","BMW");

class car{
    function car(){
        $this->model="BMW";
    }

}

$jaguar=new car();

echo $jaguar->model;




?>