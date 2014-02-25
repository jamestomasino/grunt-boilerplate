module ("SampleClass", { setup: SampleClass_setup, teardown: SampleClass_teardown });
test( "SampleClass.method", SampleClass_method );

// Setup something before all tests run
function SampleClass_setup () { }

// Teardown things after each test
function SampleClass_teardown () { }

// TODO: Add unit tests
function SampleClass_method () {
	equal ( true, true );
}
