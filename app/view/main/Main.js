/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ResourceManager.view.main.Main', {
    extend: 'Ext.container.Container',
    requires:[
	
		'ResourceManager.view.asset.List',
	
		'ResourceManager.view.division.List',
	
		'ResourceManager.view.laborforce.List',
	
		'ResourceManager.view.stringTest.List',
	
		'ResourceManager.view.typeTest.List',
	
		'ResourceManager.view.worker.List',
	
	],

    xtype: 'app-main',
    
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        id: 'myTabpanel',
        items:[
		
		{
            xtype: 'assetlist-grid'
        },
	
		{
            xtype: 'divisionlist-grid'
        },
	
		{
            xtype: 'laborforcelist-grid'
        },
	
		{
            xtype: 'stringTestlist-grid'
        },
	
		{
            xtype: 'typeTestlist-grid'
        },
	
		{
            xtype: 'workerlist-grid'
        },
	
		]
    }]
});
