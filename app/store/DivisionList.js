Ext.define('ResourceManager.store.DivisionList', {
	extend : 'Ext.data.Store',
	requires : ['Ext.data.proxy.Rest'],
	model : 'ResourceManager.model.Division',
	autoLoad : true,
	autoSync : true,

	pageSize : 50,

	// This web service seems slow, so keep lots of data in the pipeline ahead!
	leadingBufferZone : 1000,

	/*listeners: {
	 totalcountchange: onStoreSizeChange
	 },*/
	remoteFilter : true
}); 