<?php
// Initialize session
session_start();

// Handle login request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    // Validate login credentials
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Check against database and authenticate user

    // Example: Dummy authentication
    if ($username === 'user' && $password === 'password') {
        $_SESSION['username'] = $username;
        echo json_encode(array('success' => true, 'message' => 'Login successful'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Invalid username or password'));
    }
}

// Handle registration request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['register'])) {
    // Process registration form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    // Validate and store user data in database

    // Example: Dummy registration
    echo json_encode(array('success' => true, 'message' => 'Registration successful'));
}

// Handle logout request
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['logout'])) {
    // Destroy session
    session_destroy();
    echo json_encode(array('success' => true, 'message' => 'Logout successful'));
}

// Add more API endpoints for equipment listing, booking, etc.
?>
