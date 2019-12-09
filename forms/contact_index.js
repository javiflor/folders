const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('Contact_form');
detailsRef.on("child_added",function(snapshot,prevChildKey) {
	var newPost= snapshot.val();
});

function send(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var county = document.getElementById("county").value;
	var inquirytype = document.getElementById("inquirytype").value;
	var subject = document.getElementById("subject").value;
	detailsRef.push().set({
		First_name: fname,
		lname: lname,
		Email: email,
		County: county,
		Inquiry_type: inquirytype,
		Subject: subject
	});
}


              
           