/*<script type="text/javascript" language="javascript" charset="utf-8">*/

function alert1(){
    
    var dataCap = document.getElementById("selected2").value;

    var sel = document.getElementById('selected2');
    var selected = sel.options[sel.selectedIndex];
    var extra = selected.getAttribute('data');

    var x = document.getElementById('value1').value;
    var y = x / 12;
    var z = parseInt(y) * dataCap
    var a = z * 0.5
    var b = parseInt(z) + parseInt(a)
    var c = z * 57.8/100
    var d = parseInt(y) * 0.05
    var e = parseInt(y) * 0.08
    var f = parseInt(d) + parseInt(e.toFixed(2))
    var g = parseInt(f) + parseInt(b)
    var percentage = (g.toFixed(2) - f.toFixed(2)) / f.toFixed(2) * 100
    var percentageSalaryDecrease = (y + c - y) / y * 100

    
    document.getElementById('result2').innerHTML = '£' + y.toFixed(2) + ' - Your gross monthly salary'
    document.getElementById('result3').innerHTML = '£' + z.toFixed(2) + ' This is the amount you contribute'
    document.getElementById('result4').innerHTML = '£' + a.toFixed(2) + ' This is the amount the company contributes'
    document.getElementById('result5').innerHTML = '£' + b.toFixed(2) + ' - The extra amount that would be added to your pension each month by adding ' + extra + ' AVCs to your pension.'

    document.getElementById('result6').innerHTML = '£' + c.toFixed(2) + ' - The amount your gross monthly salary would decrease by adding ' + extra + ' AVCs to your pension.'
    document.getElementById('result7').innerHTML = 'This is made up of £' + d.toFixed(2) + ' (your basic 5% pension contribution) ' + 'and £' + e.toFixed(2) + ' (The Guardians basic basic 8% pension contribution)'
    /*document.getElementById('result8').innerHTML = '£' + e.toFixed(2) + ' - The basic 8% company pension contribution'*/
    document.getElementById('result9').innerHTML = '£' + f.toFixed(2) + ' - The total amount added to your pension each month (13% of salary)'
    document.getElementById('result10').innerHTML = '£' + g.toFixed(2) + ' - The total amount added to your pension each month (including your AVCs)'
    /*document.getElementById('explainer').innerHTML = 'Your standard pension (excluding AVCs):'*/
    document.getElementById('percentage1').innerHTML = 'This is a ' + percentage.toFixed(2) + '% increase in monthly pension contributions, for a ' + percentageSalaryDecrease.toFixed(2) + '% decrease in your net monthly salary.'
  }

   function init() {
    alert1();
}

  function showDiv() {
    document.getElementById('wrap').style.display = "block";
  }

/*</script>*/