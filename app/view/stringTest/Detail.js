
Ext.define('ResourceManager.view.stringTest.Detail', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.stringtestdetail',
    
    requires: [
        'ResourceManager.view.stringTest.DetailModel',
        'ResourceManager.view.stringTest.DetailController'
    ],
  
    componentCls: 'stringtest-detail',
    
    controller: 'stringtestdetail',
    viewModel: {
        type: 'stringtestdetail'
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
	            fieldLabel: 'Not Nullable Nor Blank',
	            name:'notNullableNorBlank',
	            
	            bind: '{theDomainObject.notNullableNorBlank}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Email',
	            name:'testEmail',
	            
	            bind: '{theDomainObject.testEmail}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Credit Card',
	            name:'testCreditCard',
	            
	            bind: '{theDomainObject.testCreditCard}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Size',
	            name:'testSize',
	            
	            bind: '{theDomainObject.testSize}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Max Size',
	            name:'testMaxSize',
	            
	            bind: '{theDomainObject.testMaxSize}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Url',
	            name:'testUrl',
	            
	            bind: '{theDomainObject.testUrl}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Not Equal',
	            name:'testNotEqual',
	            
	            bind: '{theDomainObject.testNotEqual}',
	            
				
			xtype : 'textfield'
		

				
			},
		        
		]
    }]
});
