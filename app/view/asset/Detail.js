
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
	            
	            bind: '{theDomainObject.division.id}',
	            
				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'divisionlist'},
			

				
			},
		        
		]
    }]
});
