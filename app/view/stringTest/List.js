

Ext.define('ResourceManager.view.stringTest.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'stringtestgridlist',
	store : 'StringTestList',
	title : 'StringTest',
	requires : ['ResourceManager.view.stringTest.ListController'],
	controller : 'stringtestlist',
	
	initComponent: function() {
    	this.columns =this.defaultColumns.concat(this.columns);
        this.callParent();
    },
    
	columns : [
	
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

	]
});
