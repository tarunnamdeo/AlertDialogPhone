AccountFormScript = {
    phoneAlert : function(context)
    {

        "use Script";
        var formContext = context.getFormContext();
        var getPhoneAttribue = formContext.getAttribute("telephone1");
        if(getPhoneAttribue!=null){
            var getPhoneValue = getPhoneAttribue.getValue();
            if(getPhoneValue == "1111"){
                var alertString={confirmButtonLabel: "OK, Got it!", text:"Please review Accounts with Group Code 'AR' with the Marketing Team.",title: "Review This Account"};
                var alertOptions={height:120,width:260};
                Xrm.Navigation.openAlertDialog(alertString,alertOptions).then(AccountFormScript.closeCallback,AccountFormScript.errorCallback);
            }
        }

    },
    closeCallback:function()
    {

    },

    errorCallback:function()
    {

    }
};