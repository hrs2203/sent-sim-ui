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

const t = { "name": { "type": { "gender": "hrishabh" } } }

console.log(getter(t, ["name", "type", "gendr"], "nothing"));
console.log(getter(undefined, ["name", "type", "gender"], "nothing"));
console.log(getter(t, ["name", "type", "gender"], "nothing"));
console.log(getter(t, [], "nothing"));
