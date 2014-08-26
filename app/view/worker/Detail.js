
Ext.define('ResourceManager.view.worker.Detail', {
    extend: 'ResourceManager.view.BaseDetailView',
    alias: 'widget.workerdetail',
    
    requires: [
        'ResourceManager.view.worker.DetailModel',
        'ResourceManager.view.worker.DetailController'
    ],
  
    componentCls: 'worker-detail',
    
    controller: 'workerdetail',
    viewModel: {
        type: 'workerdetail'
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
	            fieldLabel: 'Id Code',
	            name:'idCode',
	            
	            bind: '{theDomainObject.idCode}',
	            
				
			xtype : 'textfield'
		

				
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
