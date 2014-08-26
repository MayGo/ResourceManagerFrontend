
Ext.define('ResourceManager.view.typeTest.Detail', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.typetestdetail',
    
    requires: [
        'ResourceManager.view.typeTest.DetailModel',
        'ResourceManager.view.typeTest.DetailController'
    ],
  
    componentCls: 'typetest-detail',
    
    controller: 'typetestdetail',
    viewModel: {
        type: 'typetestdetail'
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
	            fieldLabel: 'Test Boolean',
	            name:'testBoolean',
	            
	            bind: '{theDomainObject.testBoolean}',
	            
				
				xtype : 'checkbox'
			

				
			},
		
			{
	            fieldLabel: 'Test Byte',
	            name:'testByte',
	            
	            bind: '{theDomainObject.testByte}',
	            
				xtype : 'numberfield'

				
			},
		
			{
	            fieldLabel: 'Test Int',
	            name:'testInt',
	            
	            bind: '{theDomainObject.testInt}',
	            
				xtype : 'numberfield', minValue: 2, maxValue: 25

				
			},
		
			{
	            fieldLabel: 'Test Int In List',
	            name:'testIntInList',
	            
	            bind: '{theDomainObject.testIntInList}',
	            
				xtype : 'combo', store : ['1', '2', '5'] 

				
			},
		
			{
	            fieldLabel: 'Test Int Range',
	            name:'testIntRange',
	            
	            bind: '{theDomainObject.testIntRange}',
	            
				xtype : 'combo', store : [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

				
			},
		
			{
	            fieldLabel: 'Test Long',
	            name:'testLong',
	            
	            bind: '{theDomainObject.testLong}',
	            
				xtype : 'numberfield'

				
			},
		
			{
	            fieldLabel: 'Test Double',
	            name:'testDouble',
	            
	            bind: '{theDomainObject.testDouble}',
	            
				xtype : 'numberfield'

				
			},
		
			{
	            fieldLabel: 'Test Scale',
	            name:'testScale',
	            
	            bind: '{theDomainObject.testScale}',
	            
				xtype : 'numberfield'

				
			},
		
			{
	            fieldLabel: 'Test Date',
	            name:'testDate',
	            
	            bind: '{theDomainObject.testDate}',
	            
				 	
				xtype : 'datefield',
		 		format: 'Y-m-d',
			

				
			},
		
			{
	            fieldLabel: 'Test String',
	            name:'testString',
	            
	            bind: '{theDomainObject.testString}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Test Enum',
	            name:'testEnum',
	            
	            bind: '{theDomainObject.testEnum}',
	            
				
				xtype : 'combo',
				store : ['YES', 'NO', 'NOWAY']
			

				
			},
		
			{
	            fieldLabel: 'Test Currency',
	            name:'testCurrency',
	            
	            bind: '{theDomainObject.testCurrency}',
	            
				
				xtype : 'combo',
				store : []
			

				
			},
		
			{
	            fieldLabel: 'Test Locale',
	            name:'testLocale',
	            
	            bind: '{theDomainObject.testLocale}',
	            
				
				xtype : 'combo',
				store : []
			

				
			},
		
			{
	            fieldLabel: 'Test Time Zone',
	            name:'testTimeZone',
	            
	            bind: '{theDomainObject.testTimeZone}',
	            
				
				xtype : 'combo',
				store : []
			

				
			},
		        
		]
    }]
});
