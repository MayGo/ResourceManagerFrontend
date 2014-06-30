Ext.define('ResourceManager.view.DivisionList', {
	extend : 'Ext.grid.Panel',
	requires : 'Ext.grid.filters.Filters',
	xtype : 'divisionlist-grid',
	store : 'DivisionList',
	columnLines : true,
	//loadMask: true,
	height : 400,
	width : 910,
	title : 'Divisions',
	multiColumnSort : true,
	multiSelect: true,
/*	viewConfig: {
            trackOver: false,
            emptyText: '<h1 style="margin:20px">No matching results</h1>'
        },*/
	requires : ['ResourceManager.view.DivisionListController'],

	controller : 'divisionlist',
	selModel : { 
		pruneRemoved: false,
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
		groupable : true
	}, {
		text : 'IdTrail',
		sortable : true,
		dataIndex : 'idTrail',
		groupable : false
	}],
	dockedItems : [{
		dock: 'top',
		xtype : 'toolbar',
		items : [{
                width: 400,
                fieldLabel: 'Search',
                labelWidth: 50,
                xtype: 'searchfield'
                ,            store: 'DivisionList'
            }, '->', {
                xtype: 'component',
                itemId: 'status',
                tpl: 'Matching threads: {count}',
                style: 'margin-right:5px'
            }
		]
	},
	{
		dock: 'bottom',
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
		},
		]
	}],
	viewConfig : {
		stripeRows : true
	},
	plugins : [{
		ptype : 'rowediting',
		pluginId : 'rowediting'
	}]
});
