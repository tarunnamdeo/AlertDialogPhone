if (typeof (FormNoification) == "undefined") {
    FormNoification = { __namespace: true }
}

FormNoification.Application = (function () {
    var isSave =true;
    var nameValidation = function (formEContext) {
        isSave =true;
        var formContext = formEContext.getFormContext();
        var firstNameValue = formContext.getAttribute("name").getValue();
        var namePattern = new RegExp("^[a-zA-Z0-9\\-\\s]+$");
        if (namePattern.test(firstNameValue)) {
            formContext.ui.setFormNotification("First Name has correct value", "INFO", "firstnamenotify");
            if (firstNameValue == "warning") {
                formContext.ui.setFormNotification("First Name has Warning value", "WARNING", "firstnamenotify");
            }
            if (firstNameValue == "alert") {
                Xrm.Utility.alertDialog("This is Alert Msg", function () {
                    formContext.ui.clearFormNotification("firstnamenotify");
                    alert("This ok call back");
                })
            }
            if (firstNameValue == "confirm") {
                Xrm.Utility.alertDialog("This is confirm Msg", function () {
                    formContext.ui.clearFormNotification("firstnamenotify");
                    alert("This is confirm ok");
                }, function () {
                    formContext.ui.clearFormNotification("firstnamenotify");
                    alert("This is confirm cancel");
                })
                //cancel not Working

            }
        }
        else {
            isSave=false;
            formContext.ui.setFormNotification("First name should be alphanumeric or space or -", "ERROR", "firstnamenotify");
        }

    }

    var saveForm=function(formEContext){
        var saveFormEvent=formEContext.getEventArgs();
        if(!isSave){
            saveFormEvent.preventDefault();
        }
    }
    return {
        NameValidation: nameValidation,
        SaveForm: saveForm
    }

})();