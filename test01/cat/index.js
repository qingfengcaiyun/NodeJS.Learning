var head = require('./head');
var body = require('./body');

exports.show = function(name){
	return {
		name: name,
		head: head.show(),
		body: body.show()
	}
}