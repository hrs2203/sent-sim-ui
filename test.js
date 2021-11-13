/** lodash _.get replication in native js */
function getter(inp_obj = {}, steps = [], otherwise = undefined) {
	let obj = inp_obj;
	for (const i in steps) {
		const item = steps[i];
		if (!(obj.hasOwnProperty(item)))
			return otherwise;
		obj = obj[item];
	}
	return obj;
}

const data = require('./src/components/API_data.json');

function format(data){
	try {
		return JSON.parse( data )
	} catch (_) {
		return {}
	}
}

const formated_data = data.item.map(item => {
	return {
		"name": item.name,
		"url": item.request.url.raw,
		"method": item.request.method,
		"description": `sample description for ${item.name}`,
		"req_body": getter(item, ["request", "body", "raw"], "{}"),
		"resp_body": {}
	}

})

console.log(formated_data);
