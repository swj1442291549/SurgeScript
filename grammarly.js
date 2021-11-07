let obj = JSON.parse($response.body)
obj.type = "Premium";
obj.free = false;
$done({body:JSON.stringify(obj)});
