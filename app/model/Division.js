Ext.define('ResourceManager.model.Division', {
	extend : 'ResourceManager.model.Base',
	entityName: 'Division',
	// idProperty:'id',
	fields : [{
		name : 'id',
		type : 'int'
	}, {
		name : 'name'
	}]/*,
 proxy: {
        type: 'rest',

         url: 'http://localhost:8080/ResourceManager/divisions'/*,
		/* reader: {
                type: 'json',
                root: 'data'
            },
            writer: {
                type: 'json'
            }
    }*/
});

