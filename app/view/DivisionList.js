Ext.define('ResourceManager.view.DivisionList', {
    extend: 'Ext.grid.Panel',
    requires: 'Ext.grid.filters.Filters',
    xtype: 'divisionlist-grid',
    store: 'DivisionList',
    columnLines: true,
    height: 400,
    width: 910,
    title: 'Editable Big Data Grid',
    multiColumnSort: true,
    requires:['ResourceManager.view.DivisionListController'],
    

    controller: 'divisionlist',
initComponent: function(){
	Ext.getStore('DivisionList').load();
	 this.callParent();
},
   features: [{
        ftype : 'groupingsummary',
        groupHeaderTpl : '{name}',
        hideGroupedHeader : false,
        enableGroupingMenu : false
    }, {
        ftype: 'summary',
        dock: 'bottom'
    }],

    selType: 'checkboxmodel',

    columns:[{
        xtype: 'rownumberer',
        width: 40,
        sortable: false,
        locked: true
    }, {
        text: 'Id',
        sortable: true,
        dataIndex: 'id',
        groupable: false,
        width: 80,
        locked: true,
        editRenderer: 'bold'
    }, {
        text: 'Name (Filter)',
        sortable: true,
        dataIndex: 'name',
        groupable: false,
        width: 140,
        layout: 'hbox',
        locked: true,
        //renderer: 'concatNames',
        editor: {
            xtype: 'textfield'
        },
        items    : {
            xtype: 'textfield',
            reference: 'nameFilterField',  // So that the Controller can access it easily
            flex : 1,
            margin: 2,
            enableKeyEvents: true,
            listeners: {
                keyup: 'onNameFilterKeyup',
                buffer: 500
            }
        }
    }],

    viewConfig: {
        stripeRows: true
    },

    plugins: [{
        ptype: 'gridfilters'
    }, {
        ptype: 'rowexpander',

        // dblclick invokes the row editor
        expandOnDblClick: false,
        rowBodyTpl: '<b>{name}<br></b>'
    }]
});