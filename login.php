<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "mysql@60V";
$dbname = "khet_se_ghar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get username and password from form submission
$username = $_POST['username'];
$password = $_POST['password'];

// Perform a SQL query (for simplicity, we're using plaintext passwords here)
$sql = "SELECT * FROM loginPage WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

// Check if a row was returned (login successful)
if ($result->num_rows > 0) {
    echo "Login successful!";
} else {
    echo "Invalid username or password.";
}

// Close connection
$conn->close();
?>
