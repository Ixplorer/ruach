<?php
/**
 * Ruach Business Consortia Limited - Prospectus Download & Lead Handler
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$org = isset($data['org']) ? trim($data['org']) : 'N/A';
$courseTitle = isset($data['courseTitle']) ? trim($data['courseTitle']) : 'Executive Masterclass';
$prospectusFile = isset($data['prospectusFile']) ? trim($data['prospectusFile']) : '';

if (empty($name) || empty($email) || empty($phone)) {
    echo json_encode([
        'success' => false,
        'message' => 'Please provide Full Name, Work Email, and Phone Number.'
    ]);
    exit();
}

$leadRecord = [
    'id' => 'LEAD-' . date('Ymd-His') . '-' . rand(1000, 9999),
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'org' => $org,
    'courseTitle' => $courseTitle,
    'prospectusFile' => $prospectusFile,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN'
];

$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

// 1. Append to JSON storage
$jsonFile = $dataDir . '/mailing_list.json';
$existingLeads = [];
if (file_exists($jsonFile)) {
    $existingContent = file_get_contents($jsonFile);
    $existingLeads = json_decode($existingContent, true) ?: [];
}
array_unshift($existingLeads, $leadRecord);
@file_put_contents($jsonFile, json_encode($existingLeads, JSON_PRETTY_PRINT));

// 2. Append to CSV file for easy export
$csvFile = $dataDir . '/leads.csv';
$csvExists = file_exists($csvFile);
$fp = @fopen($csvFile, 'a');
if ($fp) {
    if (!$csvExists) {
        fputcsv($fp, ['Lead ID', 'Timestamp', 'Full Name', 'Email Address', 'Phone Number', 'Organization', 'Course Prospectus', 'IP Address']);
    }
    fputcsv($fp, [
        $leadRecord['id'],
        $leadRecord['timestamp'],
        $leadRecord['name'],
        $leadRecord['email'],
        $leadRecord['phone'],
        $leadRecord['org'],
        $leadRecord['courseTitle'],
        $leadRecord['ip']
    ]);
    fclose($fp);
}

// 3. Attempt Email Dispatch (if mail server enabled)
$mailSent = false;
$to = $email;
$subject = "Ruach Executive Prospectus: " . $courseTitle;
$protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http");
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$fileUrl = $protocol . "://" . $host . "/ruach/" . rawurlencode($prospectusFile);

$message = "
<html>
<head>
  <title>Ruach Course Prospectus</title>
</head>
<body style='font-family: Arial, sans-serif; color: #1e293b; line-height: 1.6;'>
  <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;'>
    <h2 style='color: #2A5235;'>Ruach Business Consortia Limited</h2>
    <p>Dear <strong>" . htmlspecialchars($name) . "</strong>,</p>
    <p>Thank you for requesting the official executive training prospectus for:</p>
    <h3 style='color: #0F172A;'>" . htmlspecialchars($courseTitle) . "</h3>
    <p>You can access and download your prospectus directly using the link below:</p>
    <p><a href='" . htmlspecialchars($fileUrl) . "' style='background: #2A5235; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;'>Download Official Prospectus PDF</a></p>
    <br>
    <p>For custom in-house enterprise training or invoice queries, please contact our executive education unit at <a href='mailto:info@ruachconsortia.com'>info@ruachconsortia.com</a> or call <strong>+234 803 279 8904</strong>.</p>
    <hr style='border: none; border-top: 1px solid #e2e8f0;'>
    <p style='font-size: 12px; color: #64748b;'>Ruach Business Consortia Limited | www.ruachconsortia.com</p>
  </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Ruach Executive Learning <info@ruachconsortia.com>" . "\r\n";

@mail($to, $subject, $message, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Prospectus request logged. Direct download link generated.',
    'lead' => $leadRecord,
    'fileUrl' => $prospectusFile
]);
