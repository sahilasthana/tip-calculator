function tipcalcy(){
	var amount=document.getElementById("bill_amount").value;
	var perc=document.getElementById("tip_perc").value;
	var tip=amount*(perc/100);
	var total=tip+Number(amount);
	document.getElementById("tip_total").value=tip;
	document.getElementById("total_bill").value=total;
}
