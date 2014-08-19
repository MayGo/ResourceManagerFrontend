

Ext.define('ResourceManager.view.typeTest.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'typetestgridlist',
	store : 'TypeTestList',
	title : 'TypeTest',
	requires : ['ResourceManager.view.typeTest.ListController'],
	controller : 'typetestlist',
	
	initComponent: function() {
    	this.columns =this.defaultColumns.concat(this.columns);
        this.callParent();
    },
    
	columns : [
	
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

	]
});
