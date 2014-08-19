
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
	            bind: '{theDomainObject.headDivision}',

				
				  xtype : 'combo',
				  valueField: 'id',
				  tpl:'<tpl for="."><div class="x-boundlist-item" >Object id: {id}</div></tpl>',
				  displayTpl: '<tpl for=".">Object id: {id}</tpl>',
				  store: 'DivisionList',
			

				
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
});
