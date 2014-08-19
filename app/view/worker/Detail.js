
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
	            bind: '{theDomainObject.division}',

				
				  xtype : 'combo',
				  valueField: 'id',
				  tpl:'<tpl for="."><div class="x-boundlist-item" >Object id: {id}</div></tpl>',
				  displayTpl: '<tpl for=".">Object id: {id}</tpl>',
				  store: 'DivisionList',
			

				
			},
		        
    ]
});
