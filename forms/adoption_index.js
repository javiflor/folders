const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('Adoption_form');
detailsRef.on("child_added",function(snapshot,prevChildKey) {
	var newPost= snapshot.val();
});

function send(){
	var cfullname = document.getElementById("cfullname").value;
	var caddress = document.getElementById("caddress").value;
	var ccity = document.getElementById("ccity").value;
	var cstate = document.getElementById("cstate").value;
	var czipcode = document.getElementById("czipcode").value;
	var ctel = document.getElementById("ctel").value;
	var breed = document.getElementById("breed").value;
	var sex = document.getElementById("sex").value;
	var petname = document.getElementById("petname").value;
	var petDOB = document.getElementById("petDOB").value;
	var distgningmarks = document.getElementById("distgningmarks").value;
	var fullnamesig = document.getElementById("fullnamesig").value;
	var adopteename = document.getElementById("adopteename").value;
	var adopteecity = document.getElementById("adopteecity").value;
	var adopteestate = document.getElementById("adopteestate").value;
	var adopteezipcode = document.getElementById("adopteezipcode").value;
	var adopteetel = document.getElementById("adopteetel").value;
	var adopteesig = document.getElementById("adopteesig").value;
	var adptsigdate = document.getElementById("adptsigdate").value;
	var witnesssig = document.getElementById("witnesssig").value;
	var witnesssigdate = document.getElementById("witnesssigdate").value;
	detailsRef.push().set({
		CO_Name: cfullname,
		CO_Address: caddress,
		CO_City: ccity,
		CO_State: cstate,
		CO_Zipcode: czipcode,
		CO_Phone_Number: ctel,
		AP_Breed: breed,
		AP_Sex: sex,
		AP_Pet_name: petname,
		AP_Pet_DOB: petDOB,
		AP_Distinguishing_marks: distgningmarks,
		Signed_by: fullnamesig,
		Adoptee_Name: adopteename,
		Adoptee_Address: adopteeaddress,
		Adoptee_city: adopteecity,
		Adoptee_state: adopteestate,
		Adoptee_zipcode: adopteezipcode,
		Adoptee_tel: adopteetel,
		Adoptee_signature: adopteesig,
		Adoptee_signature_date: adptsigdate,
		Witness_signature: witnesssig,
		Witness_signature_date: witnesssigdate 
	
	});
}

	document.getElementById("Adoption_form").reset();

              
           