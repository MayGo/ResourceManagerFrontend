

Ext.define('ResourceManager.view.worker.List', {
	extend : 'Ext.grid.Panel',
	requires : 'Ext.grid.filters.Filters',
	xtype : 'workerlist-grid',
	store : 'WorkerList',
	columnLines : true,
	height : 400,
	width : 910,
	title : 'Worker',
	multiColumnSort : true,
	multiSelect: true,
	requires : ['ResourceManager.view.worker.ListController'],

	controller : 'workerlist',
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
		text : 'Id Code',
		sortable : true,
		dataIndex : 'idCode',
		groupable : true,
		flex: 1,
		
		editor : {
			xtype : 'textfield'
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

],
	dockedItems : [{
		dock: 'top',
		xtype : 'toolbar',
		items : [{
                width: 400,
                fieldLabel: 'Search',
                labelWidth: 50,
                xtype: 'searchfield',
                store: 'WorkerList'
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
        store: 'WorkerList',   // same store GridPanel is using
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
