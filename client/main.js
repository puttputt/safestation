
Template.main.rendered = function() {
	Meteor.call('rank', function(error, result) {
			console.log(result);
			return result;
	});
}


