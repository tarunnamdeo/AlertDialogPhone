var onChangeTitle = function (con) {
    var formContext = con.getFormContext();
    var selectedTitle = formContext.getAttribute("cr21a_title1").getValue();
    if (selectedTitle != undefined) {
        if (selectedTitle === 334800000) {
            formContext.getAttribute("cr21a_gender").setValue(334800001);
            alert("Male");
        }
        else {
            formContext.getAttribute("cr21a_gender").setValue(334800000);
            alert("Female");
        }
    }
}