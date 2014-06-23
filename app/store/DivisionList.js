Ext.define('ResourceManager.store.DivisionList', {
    extend: 'Ext.data.Store',
  	requires:['Ext.data.proxy.Rest'],
    model: 'ResourceManager.model.Division',
    autoLoad : true,
    autoSync : true
});