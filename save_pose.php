<?php
include 'db.php';

$m1 = $_POST['motor1'];
$m2 = $_POST['motor2'];
$m3 = $_POST['motor3'];
$m4 = $_POST['motor4'];
$m5 = $_POST['motor5'];
$m6 = $_POST['motor6'];

$sql = "INSERT INTO poses (motor1, motor2, motor3, motor4, motor5, motor6, status) 
        VALUES ('$m1', '$m2', '$m3', '$m4', '$m5', '$m6', 1)";

if ($conn->query($sql) === TRUE) {
    echo "Pose saved successfully";
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>