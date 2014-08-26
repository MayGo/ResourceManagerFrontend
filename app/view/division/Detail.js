
Ext.define('ResourceManager.view.division.Detail', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.divisiondetail',
    
    requires: [
        'ResourceManager.view.division.DetailModel',
        'ResourceManager.view.division.DetailController'
    ],
  
    componentCls: 'division-detail',
    
    controller: 'divisiondetail',
    viewModel: {
        type: 'divisiondetail'
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
	            fieldLabel: 'Head Division',
	            name:'headDivision',
	            
	            bind: '{theDomainObject.headDivision.id}',
	            
				
				  xtype : 'combo',
				  valueField: 'id',
  				  displayField: 'uniqueName',
				  store: {type:'divisionlist'},
			

				
			},
		
			{
	            fieldLabel: 'Id Trail',
	            name:'idTrail',
	            
	            bind: '{theDomainObject.idTrail}',
	            
				
			xtype : 'textfield'
		

				
			},
		
			{
	            fieldLabel: 'Name Trail',
	            name:'nameTrail',
	            
	            bind: '{theDomainObject.nameTrail}',
	            
				
			xtype : 'textfield'
		

				
			},
		        
		]
    }]
});
