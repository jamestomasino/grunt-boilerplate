( function ( window, $, Events, CONST ){
	"use strict";


	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------


	/**
	 * Sample view class
	 * @param {jQuery DOM Object} ui
	 * @public
	 */
	var SampleView = function ( ui ) {
		this.ui = ui;

		// UI Bindings
		this.ui.on( CONST.UI_BIND_TYPE, '.btn', $.proxy(this._onUIClick, this));

		// Event Subscriptions
		Events.subscribe (CONST.DATA_EVENT_NAME_1, $.proxy(this._onSampleDataEvent, this));
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = SampleView.prototype;


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------


	/**
	 * Handler on UI interaction
	 * @param {Event} e [UI Event]
	 * @private
	 */
	p.onUIClick = function (e) {
		console.log ( 'SampleView::onSampleDataEvent -', data );
		Events.trigger ( CONST.UI_EVENT_NAME_1 );
	};

	/**
	 * Handler when sample data event
	 * @param {String} data [Sample data from model]
	 * @private
	 */
	p.onSampleDataEvent = function ( data ) {
		console.log ( 'SampleView::onSampleDataEvent -', data );
	};


	window.SampleView = SampleView;

}(window, jQuery, Events, CONST));



