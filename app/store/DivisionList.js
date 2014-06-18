Ext.define('ResourceManager.store.DivisionList', {
    extend: 'Ext.data.TreeStore',
   /* requires: [
        'KitchenSink.model.tree.Country',
        'KitchenSink.model.tree.City'
    ],*/

    model: 'ResourceManager.model.Division',

   

    //lazyFill: false,
    listeners: {
        load: function(store, records, success) {
        	//alert(store);
        }
       }
});