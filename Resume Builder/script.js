function addNewWEField(){
     let newNode = document.createElement('textarea');
     newNode.classList.add('form-control', 'weField', 'mt-2');
     newNode.setAttribute('rows', 3);
     newNode.setAttribute('placeholder', 'Enter here');
 
     let weob = document.getElementById("we");
     let weAddButtonob = document.getElementById("weAddButton");
 
     // weob.insertBefore(newNode, weAddButtonob);
     weob.appendChild(newNode);
 }
 
 function addNewAQField(){
     let newNode = document.createElement('textarea');
     newNode.classList.add('form-control', 'eqField', 'mt-2');
     newNode.setAttribute('rows', 3);
     newNode.setAttribute('placeholder', 'Enter here');
 
     let aqob = document.getElementById("aq");
     let aqAddButtonob = document.getElementById("eqAddButton");
 
     // aqob.insertBefore(newNode, aqAddButtonob);
     aqob.appendChild(newNode);

 }
 
 function generateResume(){
     // Personal Information
     let nameField = document.getElementById("nameField").value;
     let nameT1 = document.getElementById('nameT1');
     let nameT2 = document.getElementById('nameT2');
     nameT1.innerHTML = nameField;
     nameT2.innerHTML = nameField;
 
     document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
     document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
 
     // Links
    let githubLink = document.getElementById('githubField').value;
    let linkedinLink = document.getElementById('linkedinField').value;
    let codingLink = document.getElementById('codingField').value;

    document.getElementById('githubT').innerHTML = githubLink;
    document.getElementById('githubT').href = githubLink;
    
    document.getElementById('linkedinT').innerHTML = linkedinLink;
    document.getElementById('linkedinT').href = linkedinLink;
    
    document.getElementById('codingT').innerHTML = codingLink;
    document.getElementById('codingT').href = codingLink;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;  // Objective

     // Objective
     document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;
 
     // Work Experience
     let wes = document.getElementsByClassName('weField');
     let weStr = '';
     for (let e of wes) {
         weStr += `<li>${e.value}</li>`;
     }
     document.getElementById('weT').innerHTML = weStr;
 
     // Academic Qualification
     let aqs = document.getElementsByClassName('eqField');
     let aqStr = '';
     for (let e of aqs) {
         aqStr += `<li>${e.value}</li>`;
     }
     document.getElementById('aqT').innerHTML = aqStr;
     
     // Profile picture
    let profilePicField = document.getElementById('profilePicField');
    let profilePicT = document.getElementById('profilePicT');

    if (profilePicField.files && profilePicField.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            profilePicT.src = e.target.result;
        };
        reader.readAsDataURL(profilePicField.files[0]);
    }

     // Display the resume template and hide the form
     document.getElementById('cv-form').style.display = 'none';
     document.getElementById('cv-template').style.display = 'block';
 }

 function printResume() {
     window.print();
 }

 function editResume() {
     document.getElementById('cv-template').style.display = 'none';
     document.getElementById('cv-form').style.display = 'block';
 }
 