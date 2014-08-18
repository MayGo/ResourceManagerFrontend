Ext.define('ResourceManager.view.division.ListController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.divisionlist',

	// Used as an editRenderer by BigData to display an uneditable field in the RowEditor
	bold : function(v) {
		return "<b>" + v + "</b>";
	},

	addItemHandler : function() {
		Ext.getStore('DivisionList').insert(0, Ext.create('ResourceManager.model.Division'));
		var grid = this.view, plugin = grid.getPlugin('rowediting');
		plugin.startEdit(0, 0);
	},
	deleteItemHandler : function() {
		var grid = this.view;
		var selection = grid.getView().getSelectionModel().getSelection()[0];
		if (selection) {
			Ext.getStore('DivisionList').remove(selection);
		}
	},

	onSelectionChangeListener : function(model, selection) {
		var grid = this.view;
		grid.down('#delete').setDisabled(selection.length === 0);
	},

	init : function() {

	}
});
