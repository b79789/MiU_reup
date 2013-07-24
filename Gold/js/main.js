$("#home").on('pageinit', function(){
	//code needed for home page goes here
});


$("#form").on('pageinit', function(){
	
	var valForm = $("#addForm"),
	    myFormErrorLink = $("#addFormErrorLink");
	
		
	valForm.validate({
		invalidHandler: function(form, validator){
			myFormErrorLink.click();
			var html = "";
			for(key in validator.submitted){
				var myLabel = $("label[for^='"+ key +"']");
				var legend = myLabel.closest("fieldset").find(".ui-controlgroup-label");
				var fieldName = legend.length ? legend.text() : myLabel.text();
				html += "<li>" + fieldName + "</li>";
			};
			
			$("#errorPage ul").html(html);
		},
		submitHandler: function(){
			var data = valForm.serializeArray();
			parseAddForm(data);
			alert("Thank You!");
		}
		
		
	});
	var parseAddForm = function(data){
	//use form data here
	console.log(data);
}

function clearUserData(){
		if(localStorage.length === 0){
			alert("There is no data!")
		}else{
			localStorage.clear();
			alert("All info wiped!");
			window.location.reload();
			return false;
		}
	}
	
function ge(x){
		var myElement = document.getElementById(x);
		return myElement;
	}
var clearData = ge("clearMy");
	clearData.addEventListener("click",clearUserData);
});

