

Ext.define('ResourceManager.view.stringTest.List', {
	extend : 'Ext.grid.Panel',
	requires : 'Ext.grid.filters.Filters',
	xtype : 'stringtestgridlist',
	store : 'StringTestList',
	columnLines : true,
	height : 400,
	width : 910,
	title : 'StringTest',
	multiColumnSort : true,
	multiSelect: true,
	requires : ['ResourceManager.view.stringTest.ListController'],

	controller : 'stringtestlist',
	selModel : { 
		pruneRemoved: false,
		listeners : {
			selectionchange : 'onSelectionChangeListener'
		}
	},
	
	

	columns : [
	{
		xtype : 'rownumberer',
		width : 40,
		sortable : false
	}, {
		text : 'ID',
		width : 50,
		sortable : true,
		dataIndex : 'id',
		renderer : function(v, meta, rec) {
			return rec.phantom ? '' : v;
		}
	},
	

	{
		text : 'Not Nullable Nor Blank',
		sortable : true,
		dataIndex : 'notNullableNorBlank',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Email',
		sortable : true,
		dataIndex : 'testEmail',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Credit Card',
		sortable : true,
		dataIndex : 'testCreditCard',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Size',
		sortable : true,
		dataIndex : 'testSize',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Max Size',
		sortable : true,
		dataIndex : 'testMaxSize',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Url',
		sortable : true,
		dataIndex : 'testUrl',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Not Equal',
		sortable : true,
		dataIndex : 'testNotEqual',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

],
	dockedItems : [{
		dock: 'top',
		xtype : 'toolbar',
		items : [{
                width: 400,
                fieldLabel: 'Search',
                labelWidth: 50,
                xtype: 'searchfield',
                store: 'StringTestList'
            }, '->', {
                xtype: 'component',
                itemId: 'status',
                tpl: 'Matching threads: {count}',
                style: 'margin-right:5px'
            },{
    			text : 'Add',
    			iconCls : 'icon-add',
    			handler : 'addItemHandler'
    		}, '-', {
    			itemId : 'delete',
    			text : 'Delete',
    			iconCls : 'icon-delete',
    			disabled : true,
    			handler : 'deleteItemHandler'
    		}
		]
	},
	{
        xtype: 'pagingtoolbar',
        store: 'StringTestList',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],
	viewConfig : {
		stripeRows : true
	},
	plugins : [{
		ptype : 'rowediting',
		pluginId : 'rowediting'
	}]
});
