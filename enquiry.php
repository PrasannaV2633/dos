<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone   = htmlspecialchars(trim($_POST['phone']));
    $service = htmlspecialchars(trim($_POST['service']));
    $message = htmlspecialchars(trim($_POST['message']));

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
            header("Location: enquiry-mail-send-successfully.html");
            exit();
        }
    } else {
        // reCAPTCHA response not set
        header("Location: enquiry-mail-send-error.html");
        exit();
    }

    // Receiver email
   $to = "kamalesh@designosoft.com, prassanna@designosoft.com";

    // Subject
    $subject = "New Enquiry from $name";

    // Headers
    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email body with styled table
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
      <h2>New Enquiry Form Submission</h2>
      <table>
        <tr><th>Name</th><td>$name</td></tr>
        <tr><th>Email</th><td>$email</td></tr>
        <tr><th>Phone</th><td>$phone</td></tr>
        <tr><th>Selected Service</th><td>$service</td></tr>
        <tr><th>Project Details</th><td>$message</td></tr>
      </table>
    </body>
    </html>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: enquiry-mail-send-successfully.html");
        exit();
    } else {
        header("Location: enquiry-mail-send-error.html");
        exit();
    }
} else {
    header("Location: contact-us.html");
    exit();
}
?>
