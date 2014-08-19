

Ext.define('ResourceManager.view.asset.List', {
	extend : 'ResourceManager.view.BaseRestGrid',
	xtype : 'assetgridlist',
	store : 'AssetList',
	title : 'Asset',
	requires : ['ResourceManager.view.asset.ListController'],
	controller : 'assetlist',
	
	initComponent: function() {
    	this.columns =this.defaultColumns.concat(this.columns);
        this.callParent();
    },
    
	columns : [
	
		{
			text : 'Name',
			sortable : true,
			dataIndex : 'name',
			groupable : true,
			flex: 1,
			
		editor : {
			xtype : 'textfield'
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
				  tpl:'<tpl for="."><div class="x-boundlist-item" >Object id: {id}</div></tpl>',
				  displayTpl: '<tpl for=".">Object id: {id}</tpl>',
				  store: 'DivisionList',
			  }
			

			
		},

	]
});
