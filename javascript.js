var crn_cds=document.getElementById('curnt_sp_crds');
var ps_cds=document.getElementById('prvs_sp_crds');
var wk_no= document.getElementById('week_num');
var test_div= document.getElementById('cmpltn_detls');
window.addEventListener('load',function(){
	console.log("form loaded");
	test_div.style.display="none";
	var form= document.getElementById('formdetails');
	form.addEventListener('click',function(event){
		console.log("form clicked");
		var cunt=document.getElementById('ttl_sp_crds');
		cunt.addEventListener('focus',function(){
			cunt.value=Number(crn_cds.value)+Number(ps_cds.value);
		});
	});
	wk_no.addEventListener('change',function(){
		console.log(wk_no.value);
		if(wk_no.value==2){
			test_div.style.display="block";
		}else{
			test_div.style.display="none";
		}
	});
});
