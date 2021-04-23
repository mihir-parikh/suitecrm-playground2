// YAHOO.SUGAR.MessageBox.show({msg: 'This is a custom javascript messagebox.'});

// YAHOO.SUGAR.MessageBox.show({msg: 'This is a custom javascript messagebox.', title: 'Custom messagebox'});

// YAHOO.SUGAR.MessageBox.show({msg: 'This is custom JS message box, included in the Opporunities detailviewdefs.', type: 'plain'} );

YAHOO.SUGAR.MessageBox.show({msg: 'Is the opportunity amount > $500?', 
    title: 'Custom messagebox', 
    type: 'confirm', 
    fn: function(confirm) {
        if (confirm == 'yes') {
            alert('Response "YES" received in the callback function.');
        }
        if (confirm == 'no') {
            alert('Response "NO" received in the callback function.');
        }
    }
});