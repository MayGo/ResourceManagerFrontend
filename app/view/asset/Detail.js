
Ext.define('ResourceManager.view.asset.Detail', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.assetdetail',
    
    requires: [
        'ResourceManager.view.asset.DetailModel',
        'ResourceManager.view.asset.DetailController'
    ],
  
    componentCls: 'asset-detail',
    
    controller: 'assetdetail',
    viewModel: {
        type: 'assetdetail'
    },
    
  
    
    items: [
		
			{
	            fieldLabel: 'Name',
	            name:'name',
	            bind: '{theDomainObject.name}',

				
			xtype : 'textfield'
		

				
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
