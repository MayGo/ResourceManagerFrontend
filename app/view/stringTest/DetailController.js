/**
 * This controller manages the User details view which are added as tabs (so multiple
 * instances are created). Each instance of the view creates an instance of this class to
 * control its behavior.
 */
Ext.define('ResourceManager.view.stringTest.DetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.stringtestdetail',

    requires: [
        'Ext.window.Toast'
    ],
    
    onSaveClick: function() {
        var form = this.lookupReference('form'),
            rec;
        
        if (form.isValid()) {
            rec = this.getViewModel().getData().theDomainObject;
            // TODO: implement isolated sessions
            Ext.Msg.wait('Saving', 'Saving stringTest...');
            rec.save({
                scope: this,
                callback: this.onComplete
            });
        }
    },

    onComplete: function() {
        Ext.Msg.hide();
        Ext.toast({
            title: 'Save',
            html: 'StringTest saved successfully',
            align: 't',
            bodyPadding: 10
        });
    }
});
