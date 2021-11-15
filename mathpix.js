let obj = JSON.parse($response.body)
obj.remaining_snips = 50;
obj.free = false;
$done({body:JSON.stringify(obj)});
