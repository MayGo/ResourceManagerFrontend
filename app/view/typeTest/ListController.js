Ext.define('ResourceManager.view.typeTest.ListController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.typetestlist',

	// Used as an editRenderer by BigData to display an uneditable field in the RowEditor
	bold : function(v) {
		return "<b>" + v + "</b>";
	},

	addItemHandler : function() {
		Ext.getStore('TypeTestList').insert(0, Ext.create('ResourceManager.model.TypeTest'));
		var grid = this.view, plugin = grid.getPlugin('rowediting');
		plugin.startEdit(0, 0);
	},
	deleteItemHandler : function() {
		var grid = this.view;
		var selection = grid.getView().getSelectionModel().getSelection()[0];
		if (selection) {
			Ext.getStore('TypeTestList').remove(selection);
		}
	},

	onSelectionChangeListener : function(model, selection) {
		var grid = this.view;
		grid.down('#delete').setDisabled(selection.length === 0);
	},

	init : function() {

	}
});
