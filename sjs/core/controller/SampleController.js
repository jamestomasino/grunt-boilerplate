( function ( window, $, Events, CONST ){
	"use strict";


	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------


	/**
	 * Sample controller class
	 * @param {Object} model [Reference to the data model]
	 * @public
	 */
	var SampleController = function ( model ) {
		this.model = model;

		// Event Subscriptions
		Events.subscribe ( CONST.UI_EVENT_NAME_1, $.proxy(this._onSampleUIEvent, this) );
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = SampleController.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * Sample UI Event Handler
	 * @param {Event} e [UI event]
	 * @private
	 */
	p._onSampleUIEvent = function (e) {
		console.log ( 'SampleController::onSampleUIEvent');
		model.sampleMethod();
	};


	window.SampleController = SampleController;

}(window, jQuery, Events, CONST));
