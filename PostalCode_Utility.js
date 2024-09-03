if(typeof(postalCodeChange)=="undefined"){
    postalCodeChange={}
}
postalCodeChange.Utility = (function () {
    var getSingleRetrive = function (entitySchema,recrodId,selectAttribute) {
        var result=null;
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/"+entitySchema+"Set(guid'"+recrodId+"')?$select="+selectAttribute, false);
        //req.open("GET", Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/msdyn_postalcodeSet(guid'4c9c7172-5868-ef11-a670-000d3af2e76a')?$select=cr21a_Address,cr21a_City,cr21a_Country,cr21a_State1,msdyn_name", false);
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                this.onreadystatechange = null;
                if (this.status === 200) {
                    result = JSON.parse(this.responseText).d;
                    // var cr21a_Address = result.cr21a_Address;
                    // var cr21a_City = result.cr21a_City;
                    // var cr21a_Country = result.cr21a_Country;
                    // var cr21a_State1 = result.cr21a_State1;
                    // var msdyn_name = result.msdyn_name;
                } else {
                    Xrm.Utility.alertDialog(this.statusText);
                }
            }
        };
        req.send();
        return result;
    }
    return {
        //return
        GetSingleRetrieve:getSingleRetrive
    }
})()