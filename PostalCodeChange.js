if (typeof (postalCodeChange) == "undefined") {
    postalCodeChange = {}
}
postalCodeChange.postalCode = (function () {
    var onChangePostalCode = function (formExecutionContext) {
        var formContext = formExecutionContext.getFormContext();
        var postalCode = formContext.getAttribute("cr21a_postalcode").getValue();
        if (postalCode == null) {
            formContext.getAttribute("cr21a_city").setValue(null);
            formContext.getAttribute("cr21a_country").setValue(null);
            formContext.getAttribute("cr21a_state").setValue(null);
            formContext.getAttribute("address1_line2").setValue(null);
            return;
        }

        var postalCodeId = postalCode[0].id;
        postalCodeId = postalCodeId.replace("{", "").replace("}", "");

        //retrieve
        var postalCodeResult = postalCodeChange.Utility.GetSingleRetrieve("msdyn_postalcode", postalCodeId, "cr21a_Address,cr21a_City,cr21a_Country,cr21a_State1,msdyn_name");
        if (postalCodeResult != null) {
            //country field
            var countryArr = new Array();
            var countryObj = new Array();
            countryObj.id = postalCodeResult.cr21a_Country.Id;
            countryObj.name = postalCodeResult.cr21a_Country.Name;
            countryObj.entityType = "cr21a_country";
            countryArr[0] = countryObj;

            //state field
            var stateArr = new Array();
            var stateObj = new Array();
            stateObj.id = postalCodeResult.cr21a_State1.Id;
            stateObj.name = postalCodeResult.cr21a_State1.Name;
            stateObj.entityType = "cr21a_state";
            stateArr[0] = stateObj;
            //city field
            var cityArr = new Array();
            var cityObj = new Array();
            cityObj.id = postalCodeResult.cr21a_City.Id;
            cityObj.name = postalCodeResult.cr21a_City.Name;
            cityObj.entityType = "cr21a_city";
            cityArr[0] = cityObj;

            //set the value
            formContext.getAttribute("address1_line2").setValue(postalCodeResult.cr21a_Address);
            formContext.getAttribute("cr21a_city").setValue(cityArr);
            formContext.getAttribute("cr21a_country").setValue(countryArr);
            formContext.getAttribute("cr21a_state").setValue(stateArr);
            

        }
    }
    return {
        //return
        OnChangePostalCode: onChangePostalCode
    }
})()