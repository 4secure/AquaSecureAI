<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

$name     = trim($data['name']     ?? '');
$email    = trim($data['email']    ?? '');
$company  = trim($data['company']  ?? '');
$topic    = trim($data['topic']    ?? '');
$category = trim($data['category'] ?? '');
$item     = trim($data['item']     ?? '');
$message  = trim($data['message']  ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email and message are required.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit();
}

$to      = 'info@aquasecure.ai';
$subject = "[Aqua Secure Contact] {$topic} — from {$name}";

$body  = "New contact form submission from aquasecure.ai\n\n";
$body .= "──────────────────────────────\n";
$body .= "Name:     {$name}\n";
$body .= "Email:    {$email}\n";
$body .= "Company:  {$company}\n";
$body .= "Topic:    {$topic}\n";
if ($category) {
    $body .= "Category: {$category}\n";
    $body .= "Item:     {$item}\n";
}
$body .= "──────────────────────────────\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= "──────────────────────────────\n";
$body .= "Sent from: aquasecure.ai/contact\n";

$headers  = "From: noreply@aquasecure.ai\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send. Please email us directly at info@aquasecure.ai']);
}
