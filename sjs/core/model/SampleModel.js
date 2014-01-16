( function ( window, $, Events, CONST ){
	"use strict";

	var dataPath = "data/data.json";

	//---------------------------------------------------------------
	//---------------------- Constructor ----------------------------
	//---------------------------------------------------------------

	/**
	 * Sample data model
	 * @public
	 */
	var SampleModel = function () {
		this._data = {};
		this._applicationMode = '';
	};


	//---------------------------------------------------------------
	//------------------------ Methods ------------------------------
	//---------------------------------------------------------------


	var p = SampleModel.prototype;

	/**
	 * Start the application precessing
	 * @public
	 */
	p.applicationStart = function () {
		this.setApplicationMode( CONST.MODE_SAMPLE );

		$.when (
			$.ajax ( { type: 'GET',
				url: dataPath,
				dataType: 'json'
			})
		).then(
			$.proxy(this._onDataDone, this),
			$.proxy(this._onDataFail, this)
		);
	}

	/**
	 * Sample method
	 * @public
	 */
	p.sampleMethod = function () {
		Events.trigger ( CONST.DATA_EVENT_NAME_1, "sample_param" );
	}


	//---------------------------------------------------------------
	//------------------------ GET/SET ------------------------------
	//---------------------------------------------------------------

	/**
	 * Set application mode
	 * @param {String} mode
	 * @public
	 */
	p.setApplicationMode = function ( mode ) {
		this._applicationMode = mode;
	}

	/**
	 * Get application mode
	 * @public
	 */
	p.getApplicationMode = function () {
		return this._applicationMode;
	}


	//---------------------------------------------------------------
	//------------------------ Internal -----------------------------
	//---------------------------------------------------------------

	/**
	 * Success handler for data loading
	 * @param {JSON} data
	 * @private
	 */
	p._onDataDone = function ( data ) {
		this._data = data;
		Events.trigger (CONST.APPLICATION_READY);
	};

	/**
	 * Error handler for data loading
	 * @param {Error} error
	 * @private
	 */
	p._onDataFail = function ( error ) {
		throw new Error ('Could not load data.');
	};

	window.SampleModel = SampleModel;

}(window, jQuery, Events, CONST ));
