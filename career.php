<?php
session_start();

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Validate and sanitize user input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $date = htmlspecialchars(trim($_POST['date']));
    $gender = htmlspecialchars(trim($_POST['gender']));
    $age = htmlspecialchars(trim($_POST['age']));
    $qualification = htmlspecialchars(trim($_POST['qualification']));
    $role = htmlspecialchars(trim($_POST['role']));
    $languages = htmlspecialchars(trim($_POST['languages'] ?? '')); // FIXED
    $experience = htmlspecialchars(trim($_POST['experience']));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Extra fields (only if Experienced)
    $years   = isset($_POST['years']) ? htmlspecialchars(trim($_POST['years'])) : '';
    $domain  = isset($_POST['domain']) ? htmlspecialchars(trim($_POST['domain'])) : '';
    $previousCompany = isset($_POST['Previouscompany']) ? htmlspecialchars(trim($_POST['Previouscompany'])) : ''; // FIXED
    $jobTitle = isset($_POST['jobTitle']) ? htmlspecialchars(trim($_POST['jobTitle'])) : '';
    $skills = isset($_POST['skills']) ? htmlspecialchars(trim($_POST['skills'])) : '';
    $noticeperiod = isset($_POST['noticeperiod']) ? htmlspecialchars(trim($_POST['noticeperiod'])) : '';
    

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: invalid-email.html");
        exit();
    }


      // Check if reCAPTCHA response is set
    if (isset($_POST['g-recaptcha-response'])) {
        $recaptcha_secret = '6LdkF4YUAAAAAC1UNF95ZoI0E9X8IbHUcjHy21Ch';
        $recaptcha_response = $_POST['g-recaptcha-response'];

        // Make a POST request to Google to verify the reCAPTCHA response
        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
        $response_keys = json_decode($response, true);

        if (!$response_keys['success']) {
            // reCAPTCHA verification failed
            header("Location: career-mail-send-successfully.html");
            exit();
        }
    } else {
        // reCAPTCHA response not set
        header("Location: career-mail-send-error.html");
        exit();
    }


    // Your email address where the form submissions will be sent
    $to = "kamalesh@designosoft.com, prassanna@designosoft.com";

    // Email subject
    $subject = "New Career Form Message from $name";

    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email body with table
    $body = "
    <html>
    <head>
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Poppins', sans-serif;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        th {
          background-color: #0073e6;
          color: #fff;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      </style>
    </head>
    <body>
      <h2>New Career Form Submission</h2>
      <table>
        <tr><th>Name</th><td>$name</td></tr>
        <tr><th>Email</th><td>$email</td></tr>
        <tr><th>Date Of Birth</th><td>$date</td></tr>
        <tr><th>Phone</th><td>$phone</td></tr>
        <tr><th>Gender</th><td>$gender</td></tr>
        <tr><th>Age</th><td>$age</td></tr>
        <tr><th>Qualification</th><td>$qualification</td></tr>
        <tr><th>Role</th><td>$role</td></tr>
        <tr><th>Software Knowledge</th><td>$languages</td></tr>
        <tr><th>Experience</th><td>$experience</td></tr>";

    // Only include extra fields if Experienced
    if ($experience === "Experienced") {
        $body .= "
        <tr><th>Years of Experience</th><td>$years</td></tr>
        <tr><th>Domain</th><td>$domain</td></tr>
        <tr><th>Job Title</th><td>$jobTitle</td></tr>
        <tr><th>Previous Company</th><td>$previousCompany</td></tr>
        <tr><th>Key Skills</th><td>$skills</td></tr>
        <tr><th>Notice Period</th><td>$noticeperiod</td></tr>";
    }

    $body .= "
        <tr><th>Additional Message</th><td>$message</td></tr>
      </table>
    </body>
    </html>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: career-mail-send-successfully.html");
        exit();
    } else {
        header("Location: career-mail-send-error.html");
        exit();
    }
} else {
    header("Location: contact-us.html");
    exit();
}
?>
