Ext.define('ResourceManager.view.DivisionList', {
	extend : 'Ext.grid.Panel',
	requires : 'Ext.grid.filters.Filters',
	xtype : 'divisionlist-grid',
	store : 'DivisionList',
	columnLines : true,
	height : 400,
	width : 910,
	title : 'Editable Big Data Grid',
	multiColumnSort : true,
	requires : ['ResourceManager.view.DivisionListController'],

	controller : 'divisionlist',
	selModel : {
		listeners : {
			selectionchange : 'onSelectionChangeListener'
		}
	},

	columns : [{
		xtype : 'rownumberer',
		width : 40,
		sortable : false,
		locked : true
	}, {
		text : 'ID',
		width : 50,
		sortable : true,
		dataIndex : 'id',
		renderer : function(v, meta, rec) {
			return rec.phantom ? '' : v;
		}
	}, {
		text : 'Name',
		sortable : true,
		dataIndex : 'name',
		groupable : false,
		width : 140,
		editor : {
			xtype : 'textfield'
		}
	}, 
	/*{
		text : 'Head division',
		sortable : true,
		dataIndex : 'headDivisionId',
		mapping: function(data) {
		    return data.headDivision.id;
		},
		groupable : false,
		width : 140,
		reference: {
             parent: 'ResourceManager.model.Division' // Organization is the parent of User
        }
	}, */{
		text : 'NameTrail',
		sortable : true,
		dataIndex : 'nameTrail',
		groupable : true,
		locked : true
	}, {
		text : 'IdTrail',
		sortable : true,
		dataIndex : 'idTrail',
		groupable : false,
		locked : true
	}],
	dockedItems : [{
		xtype : 'toolbar',
		items : [{
			text : 'Add',
			iconCls : 'icon-add',
			handler : 'addItemHandler'
		}, '-', {
			itemId : 'delete',
			text : 'Delete',
			iconCls : 'icon-delete',
			disabled : true,
			handler : 'deleteItemHandler'
		}]
	}],
	viewConfig : {
		stripeRows : true
	},
	plugins : [{
		ptype : 'rowediting',
		pluginId : 'rowediting'
	}]
});
