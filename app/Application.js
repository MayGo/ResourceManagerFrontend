/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ResourceManager.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ResourceManager',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
             'MenuItems',
	
		'AssetList',
	
		'DivisionList',
	
		'LaborforceList',
	
		'StringTestList',
	
		'TypeTestList',
	
		'WorkerList',
	
        // TODO: add stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
