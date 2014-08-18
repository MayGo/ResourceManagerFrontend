

Ext.define('ResourceManager.view.typeTest.List', {
	extend : 'Ext.grid.Panel',
	requires : 'Ext.grid.filters.Filters',
	xtype : 'typeTestlist-grid',
	store : 'TypeTestList',
	columnLines : true,
	height : 400,
	width : 910,
	title : 'TypeTest',
	multiColumnSort : true,
	multiSelect: true,
	requires : ['ResourceManager.view.typeTest.ListController'],

	controller : 'typeTestlist',
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
		text : 'Test Boolean',
		sortable : true,
		dataIndex : 'testBoolean',
		groupable : true,
		flex: 1,
		
		 	xtype: 'booleancolumn',
            trueText: 'Yes',
            falseText: 'No',
			editor : {
				xtype : 'checkbox'
			}
			

		
	},

	{
		text : 'Test Byte',
		sortable : true,
		dataIndex : 'testByte',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', format:'0',editor : { xtype : 'numberfield'}

		
	},

	{
		text : 'Test Int',
		sortable : true,
		dataIndex : 'testInt',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', format:'0',editor : { xtype : 'numberfield', minValue: 2, maxValue: 25}

		
	},

	{
		text : 'Test Int In List',
		sortable : true,
		dataIndex : 'testIntInList',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', editor : { xtype : 'combo', store : ['1', '2', '5']   }

		
	},

	{
		text : 'Test Int Range',
		sortable : true,
		dataIndex : 'testIntRange',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', editor : { xtype : 'combo', store : [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]	}

		
	},

	{
		text : 'Test Long',
		sortable : true,
		dataIndex : 'testLong',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', format:'0',editor : { xtype : 'numberfield'}

		
	},

	{
		text : 'Test Double',
		sortable : true,
		dataIndex : 'testDouble',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', format:'0.00',editor : { xtype : 'numberfield'}

		
	},

	{
		text : 'Test Scale',
		sortable : true,
		dataIndex : 'testScale',
		groupable : true,
		flex: 1,
		 xtype: 'numbercolumn', format:'0.00',editor : { xtype : 'numberfield'}

		
	},

	{
		text : 'Test Date',
		sortable : true,
		dataIndex : 'testDate',
		groupable : true,
		flex: 1,
		
		 	xtype: 'datecolumn',   
		 	format:'Y-m-d',
			editor : {
				xtype : 'datefield',
		 		format: 'Y-m-d',
			}
			

		
	},

	{
		text : 'Test String',
		sortable : true,
		dataIndex : 'testString',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
		}
		

		
	},

	{
		text : 'Test Enum',
		sortable : true,
		dataIndex : 'testEnum',
		groupable : true,
		flex: 1,
		
			renderer: function (value, metaData) {
				return (value)?value.name:'';
			},
			editor : {
				xtype : 'combo',
				store : ['YES', 'NO', 'NOWAY']
			}
			

		
	},

	{
		text : 'Test Currency',
		sortable : true,
		dataIndex : 'testCurrency',
		groupable : true,
		flex: 1,
		
			editor : {
				xtype : 'combo',
				store : []
			}
			

		
	},

	{
		text : 'Test Locale',
		sortable : true,
		dataIndex : 'testLocale',
		groupable : true,
		flex: 1,
		
			editor : {
				xtype : 'combo',
				store : []
			}
			

		
	},

	{
		text : 'Test Time Zone',
		sortable : true,
		dataIndex : 'testTimeZone',
		groupable : true,
		flex: 1,
		
			editor : {
				xtype : 'combo',
				store : []
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
                store: 'TypeTestList'
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
        store: 'TypeTestList',   // same store GridPanel is using
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
