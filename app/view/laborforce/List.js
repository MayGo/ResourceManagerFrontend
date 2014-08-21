

Ext.define('ResourceManager.view.laborforce.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'laborforcegridlist',
	store : 'LaborforceList',
	title : 'Laborforce',
	requires : ['ResourceManager.view.laborforce.ListController'],
	controller : 'laborforcelist',
	
	initComponent: function() {
    	this.columns =this.defaultColumns.concat(this.columns);
        this.callParent();
    },
    
	columns : [
	
		{
			text : 'Worker',
			sortable : true,
			dataIndex : 'worker',
			groupable : true,
			flex: 1,
			
			  renderer: function (value, metaData) {
					return (value)?'Object id: ' +value.id:'';
			  },
			  editor : {
				  xtype : 'combo',
				  valueField: 'id',
				  displayField: 'uniqueName',
				  store: {type:'workerlist'},
			  }
			

			
		},

		{
			text : 'Valid From',
			sortable : true,
			dataIndex : 'validFrom',
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
			text : 'Valid To',
			sortable : true,
			dataIndex : 'validTo',
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
			text : 'Asset',
			sortable : true,
			dataIndex : 'asset',
			groupable : true,
			flex: 1,
			
			  renderer: function (value, metaData) {
					return (value)?'Object id: ' +value.id:'';
			  },
			  editor : {
				  xtype : 'combo',
				  valueField: 'id',
				  displayField: 'uniqueName',
				  store: {type:'assetlist'},
			  }
			

			
		},

		{
			text : 'Division',
			sortable : true,
			dataIndex : 'division',
			groupable : true,
			flex: 1,
			
			  renderer: function (value, metaData) {
					return (value)?'Object id: ' +value.id:'';
			  },
			  editor : {
				  xtype : 'combo',
				  valueField: 'id',
				  displayField: 'uniqueName',
				  store: {type:'divisionlist'},
			  }
			

			
		},

	]
});
