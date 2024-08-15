function initializeForm() {
    document.getElementById("studentForm").reset();
    document.getElementById("rollNo").focus();
    disableFormFields();
}

function disableFormFields() {
    document.getElementById("fullName").disabled = true;
    document.getElementById("class").disabled = true;
    document.getElementById("birthDate").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("enrollmentDate").disabled = true;
    document.getElementById("saveBtn").disabled = true;
    document.getElementById("updateBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
}

function checkRollNo() {
    let rollNo = document.getElementById("rollNo").value;
    if (rollNo === "") {
        alert("Roll No cannot be empty.");
        return;
    }
    

    let dbBaseUrl = "SCHOOL-DB";
    let apiEndPointUrl = "/api/student"; 
    let reqString = { "Roll-No": rollNo };
    let connectionToken = "your-connection-token"; 

    let data = executeCommandAtGivenBaseUrl(dbBaseUrl, apiEndPointUrl, reqString, connectionToken);
    
    if (data) { 
        populateForm(data);
        enableFormForUpdate();
    } else {
        enableFormForNewEntry();
    }
}

function populateForm(data) {
    document.getElementById("fullName").value = data['Full-Name'];
    document.getElementById("class").value = data.Class;
    document.getElementById("birthDate").value = data['Birth-Date'];
    document.getElementById("address").value = data.Address;
    document.getElementById("enrollmentDate").value = data['Enrollment-Date'];
}

function enableFormForUpdate() {
    document.getElementById("fullName").disabled = false;
    document.getElementById("class").disabled = false;
    document.getElementById("birthDate").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("enrollmentDate").disabled = false;
    document.getElementById("updateBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;
}

function enableFormForNewEntry() {
    document.getElementById("fullName").disabled = false;
    document.getElementById("class").disabled = false;
    document.getElementById("birthDate").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("enrollmentDate").disabled = false;
    document.getElementById("saveBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;
}

function saveData() {
    let data = {
        "Roll-No": document.getElementById("rollNo").value,
        "Full-Name": document.getElementById("fullName").value,
        "Class": document.getElementById("class").value,
        "Birth-Date": document.getElementById("birthDate").value,
        "Address": document.getElementById("address").value,
        "Enrollment-Date": document.getElementById("enrollmentDate").value
    };

    resetForm();
}

function updateData() {
    let data = {
        "Roll-No": document.getElementById("rollNo").value,
        "Full-Name": document.getElementById("fullName").value,
        "Class": document.getElementById("class").value,
        "Birth-Date": document.getElementById("birthDate").value,
        "Address": document.getElementById("address").value,
        "Enrollment-Date": document.getElementById("enrollmentDate").value
    };

    resetForm();
}

function resetForm() {
    document.getElementById("studentForm").reset();
    initializeForm();
}
