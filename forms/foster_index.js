const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('Foster_App');
detailsRef.on("child_added",function(snapshot,prevChildKey) {
	var newPost= snapshot.val();
});

function send(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var tDate = document.getElementById("date").value;
	var address = document.getElementById("address").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var zipcode = document.getElementById("zipcode").value;
	var tel = document.getElementById("tel").value;
	var email = document.getElementById("email").value;
	var hdyhau = document.getElementById("hdyhau").value;
	detailsRef.push().set({
		Name: name,
		DOB: age,
		Signup_Date: tDate,
		Address: address,
		City: city,
		State: state,
		Zipcode: zipcode,
		Phone_Number: tel,
		Email: email,
		How_Did_You_Hear_About_Us: hdyhau
	});
}


              
           