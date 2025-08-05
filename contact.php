<?php

// require ReCaptcha class
require('recaptcha-master/src/autoload.php');

// configure
// an email address that will be in the From field of the email.
$from = 'hr@designosoft.com';

// an email address that will receive the email with the output of the form
$sendTo = 'hr@designosoft.com';

// subject of the email
//$subject = 'New message from contact form';
//print_r($_POST);
//exit;
if (isset($_POST)) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $companyname = $_POST['companyname'];
    $email = $_POST['email'];
    $position = $_POST['position'];
    $website = $_POST['website'];
    $business = $_POST['business'];
    $country = $_POST['country'];
    $source = $_POST['source'];
    $message = $_POST['message'];

    $ref = $_SERVER['HTTP_REFERER'];
    $ref = $_SERVER['HTTP_REFERER'];
    $subject = "Contact Form (MHIDUBAI ):Contact from" . " " . $name;

    $message = '<table width=100% border=0 border-color:none cellspacing=3 cellpadding=3 class=text style="font-family:Arial; line-height:160% word-spacing:0.4em font-size:14px; border: 1px solid" bgcolor="#F9F9F9" color:"#465864">
<tr>
<td colspan="4"  align="center" bgcolor="#CCCCCC" ><strong >Contact Form (MHIDUBAI ) : Contact from ' . $name . '</strong></td>
</tr>

  <tr> <td>Your Name</td> <td>:</td> <td >' . $name . '</td> </tr>
  <tr> <td>Your Phone Number</td> <td>:</td> <td>' . $phone . '</td> </tr>
  <tr> <td>Company Name</td> <td>:</td> <td>' . $companyname . '</td> </tr>
  <tr> <td>Email</td> <td>:</td> <td>' . $email . '</td> </tr>
  <tr> <td>Position</td> <td>:</td> <td >' . $position . '</td> </tr>
  <tr> <td>Website</td> <td>:</td> <td>' . $website . '</td> </tr>
  <tr> <td>Nature Of Business</td> <td>:</td> <td>' . $business . '</td> </tr>
  <tr> <td>Your Country</td> <td>:</td> <td>' . $country . '</td> </tr>
  <tr> <td>How did you hear about Mhidubai</td> <td>:</td> <td >' . $source . '</td> </tr>
  <tr> <td>Message</td> <td>:</td> <td>' . $message . '</td> </tr>
 
   </table>'; //
// form field names and their translations.
// array variable name => Text to appear in the email
    $fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message');

// message that will be displayed when everything is OK :)
    $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
    $errorMessage = 'There was an error while submitting the form. Please try again later';

// ReCaptch Secret
    $recaptchaSecret = '6LdkF4YUAAAAAC1UNF95ZoI0E9X8IbHUcjHy21Ch';

// let's do the sending
// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
    error_reporting(E_ALL & ~E_NOTICE);

    if (!empty($_POST)) {
        // validate the ReCaptcha, if something is wrong, we throw an Exception,
        // i.e. code stops executing and goes to catch() block
        if (!isset($_POST['g-recaptcha-response'])) {
            throw new \Exception('ReCaptcha is not set.');
        }
//        $google_url = "https://www.google.com/recaptcha/api/siteverify";
//        $ip = $_SERVER['REMOTE_ADDR'];
//        $url = $google_url . "?secret=" . $recaptchaSecret . "&response=" . $_POST['g-recaptcha-response'] . "&remoteip=" . $ip;
//        $res = getCurlData($url);
//        $res = json_decode($res, true);
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecret . '&response=' . $_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if ($responseData->success) {
            // Send email
            include './phpmailer/JPhpMailer.php';
            $Mail = new JPhpMailer;
            $Mail->IsSMTP(); // Use SMTP
            $Mail->Host = "smtp.gmail.com"; // Sets SMTP server
            // $Mail->SMTPDebug = 2; // 2 to enable SMTP debug information
            $Mail->SMTPAuth = TRUE; // enable SMTP authentication
            $Mail->SMTPSecure = "tls"; //Secure conection
            $Mail->Port = 587; // set the SMTP port
            $Mail->Username = 'rajkumardesign55@gmail.com'; // SMTP account username
            $Mail->Password = 'raj123456@'; // SMTP account password
            $Mail->Priority = 1; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
            $Mail->CharSet = 'UTF-8';
            $Mail->Encoding = '8bit';
            $Mail->Subject = $subject;
            $Mail->ContentType = 'text/html; charset=utf-8\r\n';
            $Mail->From = 'rajkumardesign55@gmail.com';
            $Mail->FromName = '';
            $Mail->WordWrap = 900; // RFC 2822 Compliant for Max 998 characters per  line
            $Mail->AddAddress($sendTo); // To:
            $Mail->isHTML(TRUE);
            $Mail->Body = $message;
            // $Mail->AltBody = "hiiiis";
            $Mail->Send();
            $Mail->SmtpClose();
            $url = 'contact-us.html';
            header("Location: " . $url);
        } else {
            $url = 'contact.php';
            header("Location: " . $url);
        }
    }
}

