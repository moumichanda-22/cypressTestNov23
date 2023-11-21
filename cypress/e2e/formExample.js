import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import {form} from "./pages/formExample";

When(/^I navigate to Form Example Page$/, function () {
    form.navigateToFormPage()
});

When(/^I fill in the following form$/, function (dataTable) {
    dataTable.hashes().forEach((row)=>{
        form.inputElements(row.Username,row.Password,row.TextArea,row.MultipleSelectValues,row.DropDown,row.Filename
        )
    })
});

When(/^I check the following check boxes:$/, function (dataTable) {
    dataTable.hashes().forEach((row)=> {
        form.SelectCheckBox(row.Checkbox)
    })
});

When(/^I choose the following radio buttons:$/, function () {
    form.SelectRadioButton()
});

Then(/^I should see a success message\.$/, function () {
    form.submitTheForm()
});
