/**
 * This class is the base class for all entities in the application.
 */
Ext.define('ResourceManager.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }]
    ,

    schema: {
        namespace: 'ResourceManager.model',
		type:'rest',
        proxy: {
            url: 'http://localhost:8080/ResourceManager/{entityName:uncapitalize}s',
            pageParam: '',
            startParam: '',
            limitParam: ''
        }
    }
});
