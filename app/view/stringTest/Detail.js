Ext.define('ResourceManager.view.stringTest.Detail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stringtestdetail',
    
    requires: [
        'ResourceManager.view.stringTest.DetailModel',
        'ResourceManager.view.stringTest.DetailController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.VBox',
        'Ext.form.field.ComboBox',
        'Ext.view.View'
    ],
    
    bind: {
        title: '{theDomainObject.uniqueName}'
    },
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    componentCls: 'stringtest-detail',
    bodyPadding: 20,
    
    controller: 'stringtestdetail',
    viewModel: {
        type: 'stringtestdetail'
    },
    
    tbar: [{
        text: 'Save',
        handler: 'onSaveClick'
    }],
    
    items: [{
        xtype: 'component',
        bind: '{theDomainObject.uniqueName}',
        cls: 'title',
        margin: '0 0 20 0'
    }, {
        xtype: 'form',
        border: false,
        maxWidth: 600,
        height: 100,
        reference: 'form',
        defaults: {
            anchor: '95%'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Title',
            allowBlank: false,
            bind: '{theDomainObject.uniqueName}',
            publishes: ['value']
        }/*, {
            xtype: 'combobox',
            fieldLabel: 'Assignee',
            allowBlank: false,
            forceSelection: true,
            queryMode: 'local',
            valueField: 'id',
            displayField: 'name',
            publishes: ['value'],
            bind: {
                store: '{theAsset.project.users}',
                value: '{theAsset.assigneeId}'
            }
        }, {
            xtype: 'combobox',
            fieldLabel: 'Status',
            allowBlank: false,
            forceSelection: true,
            editable: false,
            queryMode: 'local',
            valueField: 'id',
            displayField: 'name',
            publishes: ['value'],
            bind: '{theAsset.status}',
            store: {
                fields: ['id', 'name'],
                data: [
                    { id: 1, name: 'Pending' },
                    { id: 2, name: 'Open' },
                    { id: 3, name: 'Closed' }
                ]
            }
        }*/]
    }/*, {
        xtype: 'component',
        html: 'Comments',
        cls: 'small-title',
        margin: '20 0'
    }, {
        xtype: 'dataview',
        flex: 1,
        bind: '{theResourceManager.comments}',
        disableSelection: true,
        cls: 'comments',
        autoScroll: true,
        emptyText: 'There are no comments',
        itemTpl: [
            '<div class="header"><span class="created">{created:date("Y-m-d H:i")}</span> - <span class="user">{user.name}</span></div>',
            '<div class="content">{text}</div>',
            '<tpl if="xindex !== xcount"><hr /></tpl>'
        ]
    }*/]
});
