/*
(function ($) { 
$(document).ready(
    function(){
       $("#edit-field-customer-quickfill").change(function(){
			alert('hello world');
});
    });
*/
(function ($) {  

  Drupal.behaviors.neworders = {

    attach: function (context, settings) {            

     
	 $("#edit-field-customer-quickfill").change(function(){
	 var x = $("select[name='field_customer_quickfill'] option:selected").val();
			//key1 = $result (get taxonomy term id tid)
			//key2 = $fname
			//key3 =
			//key4 = $lname
			//key5 = $address
			//key6 =
				jQuery.ajax({ 
				type: "POST",
				url: "/acme/sites/all/modules/neworders/neworders.php",
				data: {name: x},
				dataType: "json",
				//contentType: "application/json; charset=utf-8",
				//headers: { "Accept": "application/json; odata=verbose" },
				complete: function(data){ 
				//var id = JSON.stringify(data.responseJSON.key1);
				//var id_noquo = id.replace(/\"/gi,'');
				
				var fname = JSON.stringify(data.responseJSON.key2);
				var fname_noquo = fname.replace(/\"/gi,'');
				
				var lname = JSON.stringify(data.responseJSON.key4);
				var lname_noquo = lname.replace(/\"/gi,'');
				
				var  address = JSON.stringify(data.responseJSON.key5);
				var address_noquo = address.replace(/\"/gi,'');
				
				var  city = JSON.stringify(data.responseJSON.key6);
				var city_noquo = city.replace(/\"/gi,'');
				
				var  state = JSON.stringify(data.responseJSON.key7);
				var state_noquo = state.replace(/\"/gi,'');
				
				var  zip = JSON.stringify(data.responseJSON.key8);
				var zip_noquo = zip.replace(/\"/gi,'');
				
				var  prim_phone = JSON.stringify(data.responseJSON.key9);
				var prim_phone_noquo = prim_phone.replace(/\"/gi,'');
				
				var  sec_phone = JSON.stringify(data.responseJSON.key10);
				var sec_phone_noquo = sec_phone.replace(/\"/gi,'');
				
				var  fax = JSON.stringify(data.responseJSON.key11);
				var fax_noquo = fax.replace(/\"/gi,'');
					//alert(id_noquo);
					 //alert(JSON.stringify(data.responseJSON.key2));
					//document.write('hello world');
					//console.log(resp);
					console.log(data); // overflow
					 $("#edit-field-order-customer-first-name-und-0-value").val(fname_noquo);
					 
					 $("#edit-field-order-customer-last-name-und-0-value").val(lname_noquo);
					 
					 $("#edit-field-order-customer-address-und-0-value").val(address_noquo);
					 
					 $("#edit-field-order-customer-city-und-0-value").val(city_noquo);
					 
					 $( "#edit-field-order-customer-state-und" ).find( 'option[value="' + state_noquo + '"]' ).prop( "selected", true ); 
					 				
					$("#edit-field-order-customer-zip-und-0-value").val(zip_noquo);
					
					$("#edit-field-order-customer-primary-pho-und-0-value").val(prim_phone_noquo);
					$("#edit-field-order-customer-secondary-p-und-0-value").val(sec_phone_noquo);
					$("#edit-field-order-customer-fax-und-0-value").val(fax_noquo);
					
					//console.log(data.key); // value
					//$("#edit-field-order-customer-first-name").attr("value","JSON.stringify(data.responseJSON.fname"));
					//document.getElementById('#edit-field-order-customer-first-name-und-0-value').value = JSON.stringify(data.responseJSON.fname);
					//document.getElementById("edit-field-order-customer-first-name").innerHTML = JSON.stringify(data.responseJSON.fname);
					} 
					
				});

			/*
			if(x == 'Kopanos, Steve - 9'){
			document.getElementById('edit-field-order-customer-first-name').value = "Jeff";
			}
			else{
			
			document.getElementById('edit-field-order-customer-first-name').value = "Ryan";
			}
			*/
	});
	 
	 // All our js code here
     //alert('Hello jQuery');
     // end our js code

   }

 };})(jQuery);