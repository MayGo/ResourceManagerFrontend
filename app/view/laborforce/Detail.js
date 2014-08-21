
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
    
  
    items: [{
        xtype: 'component',
        bind: '{theDomainObject.uniqueName}',
        cls: 'title',
        margin: '0 0 20 0'
    }, {
        xtype: 'form',
        border: false,
        maxWidth: 400,
        reference: 'form',
        defaults: {
            anchor: '95%'
        },
        items: [

		
			{
	            fieldLabel: 'Worker',
	            name:'worker',
	            bind: '{theDomainObject.worker}',

				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'workerlist'},
			

				
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
  				  displayField: 'uniqueName',
				  store: {type:'assetlist'},
			

				
			},
		
			{
	            fieldLabel: 'Division',
	            name:'division',
	            bind: '{theDomainObject.division}',

				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'divisionlist'},
			

				
			},
		        
		]
    }]
});
