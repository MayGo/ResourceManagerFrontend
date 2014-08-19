
Ext.define('ResourceManager.view.laborforce.Detail', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.laborforcedetail',
    
    requires: [
        'ResourceManager.view.laborforce.DetailModel',
        'ResourceManager.view.laborforce.DetailController'
    ],
  
    componentCls: 'laborforce-detail',
    
    controller: 'laborforcedetail',
    viewModel: {
        type: 'laborforcedetail'
    },
    
  
    
    items: [
		
			{
	            fieldLabel: 'Worker',
	            name:'worker',
	            bind: '{theDomainObject.worker}',

				
				  xtype : 'combo',
				  valueField: 'id',
				  tpl:'<tpl for="."><div class="x-boundlist-item" >Object id: {id}</div></tpl>',
				  displayTpl: '<tpl for=".">Object id: {id}</tpl>',
				  store: 'WorkerList',
			

				
			},
		
			{
	            fieldLabel: 'Valid From',
	            name:'validFrom',
	            bind: '{theDomainObject.validFrom}',

				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Valid To',
	            name:'validTo',
	            bind: '{theDomainObject.validTo}',

				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Asset',
	            name:'asset',
	            bind: '{theDomainObject.asset}',

				
				  xtype : 'combo',
				  valueField: 'id',
				  tpl:'<tpl for="."><div class="x-boundlist-item" >Object id: {id}</div></tpl>',
				  displayTpl: '<tpl for=".">Object id: {id}</tpl>',
				  store: 'AssetList',
			

				
			},
		
			{
	            fieldLabel: 'Division',
	            name:'division',
	            bind: '{theDomainObject.division}',

				
				  xtype : 'combo',
				  valueField: 'id',
				  tpl:'<tpl for="."><div class="x-boundlist-item" >Object id: {id}</div></tpl>',
				  displayTpl: '<tpl for=".">Object id: {id}</tpl>',
				  store: 'DivisionList',
			

				
			},
		        
    ]
});
