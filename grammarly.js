let obj = JSON.parse($response.body)
obj.type = "Premium";
obj.free = false;
obj.plagiarismOn = true;
obj.institutionPlagiarismDisabled = false;
$done({body:JSON.stringify(obj)});
