<?php
include 'db.php';

$sql = "SELECT * FROM poses ORDER BY id DESC";
$result = $conn->query($sql);

$poses = [];
while($row = $result->fetch_assoc()) {
    $poses[] = $row;
}

echo json_encode($poses);
$conn->close();
?>