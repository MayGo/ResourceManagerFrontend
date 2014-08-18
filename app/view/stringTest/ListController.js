Ext.define('ResourceManager.view.stringTest.ListController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.stringTestlist',

	// Used as an editRenderer by BigData to display an uneditable field in the RowEditor
	bold : function(v) {
		return "<b>" + v + "</b>";
	},

	addItemHandler : function() {
		Ext.getStore('StringTestList').insert(0, Ext.create('ResourceManager.model.StringTest'));
		var grid = this.view, plugin = grid.getPlugin('rowediting');
		plugin.startEdit(0, 0);
	},
	deleteItemHandler : function() {
		var grid = this.view;
		var selection = grid.getView().getSelectionModel().getSelection()[0];
		if (selection) {
			Ext.getStore('StringTestList').remove(selection);
		}
	},

	onSelectionChangeListener : function(model, selection) {
		var grid = this.view;
		grid.down('#delete').setDisabled(selection.length === 0);
	},

	init : function() {

	}
});
