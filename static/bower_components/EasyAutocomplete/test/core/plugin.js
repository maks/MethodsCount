/*
 * Tests EasyAutocomplete - plugin
 *
 * @author Łukasz Pawełczak
 */
QUnit.test( "JQuery method exists", function( assert ) {


	//assert
	assert.ok($.fn.easyAutocomplete, "Method $.easyAutocomplete exists");
	assert.ok($.fn.getSelectedItem, "Method $.getSelectedItem exists");
	expect(2);
});
