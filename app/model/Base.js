/**
 * This class is the base class for all entities in the application.
 */
Ext.define('ResourceManager.model.Base', {
	extend : 'Ext.data.Model',

	fields : [{
		name : 'id',
		type : 'int'
	}],
	schema : {
		namespace : 'ResourceManager.model',

		proxy : {
			type : 'rest',
			
			url : 'http://localhost:8080/ResourceManager/{entityName:uncapitalize}s',
			reader: {
			    type : 'json',
			    rootProperty : 'list',
			    totalProperty  : 'total'
			},
			startParam:'offset',
			limitParam:'max'
			//sortParam:'',
		//	groupParam:'',
			//filterParam:''
		}
	}
});
