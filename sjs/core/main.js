//= require_tree ./model/
//= require_tree ./view/
//= require_tree ./controller/

var model = new SampleModel();
var controller = new SampleController ( model );
var view = new SampleView ( $('#view_content') );

$(function () {
	model.applicationStart();
});
