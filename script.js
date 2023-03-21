const calculate = () => {
    var selectAvcRate = document.getElementById('select-avc-rate');    
    var avcRate = selectAvcRate.value;
    var avcRateFormatted = `${avcRate * 100}%`;
    var salaryYearly = document.getElementById('input-salary').value;
    var salaryMonthly = salaryYearly / 12;
    var avcPersonal = parseInt(salaryMonthly) * avcRate
    var avcCompany = avcPersonal * 0.5
    var avcTotal = parseInt(avcPersonal) + parseInt(avcCompany)
    var salaryReductionTotal = avcPersonal * 57.8/100
    var ordinaryContributionPersonal = parseInt(salaryMonthly) * 0.05
    var ordinaryContributionCompany = parseInt(salaryMonthly) * 0.08
    var ordinaryContributionTotal = parseInt(ordinaryContributionPersonal) + parseInt(ordinaryContributionCompany.toFixed(2))
    var pensionContributionTotal = parseInt(ordinaryContributionTotal) + parseInt(avcTotal)
    var percentagePensionIncreaseDueToAvc = (pensionContributionTotal.toFixed(2) - ordinaryContributionTotal.toFixed(2)) / ordinaryContributionTotal.toFixed(2) * 100
    var percentageSalaryDecreaseDueToAvc = (salaryMonthly + salaryReductionTotal - salaryMonthly) / salaryMonthly * 100

    // salary
    document.getElementById('result-gross-salary').innerHTML = `Your gross monthly salary is: £${salaryMonthly.toFixed(2)}`;
    
    // ordinary contributions
    document.getElementById('result-ordinary-total').innerHTML = `£${ordinaryContributionTotal.toFixed(2)} is the total amount added to your pension each month (13% of salary)`;
    document.getElementById('result-ordinary-breakdown').innerHTML = `This is made up of £${ordinaryContributionPersonal.toFixed(2)} (your basic 5% pension contribution) and £${ordinaryContributionCompany.toFixed(2)} (the Guardian's basic 8% pension contribution)`;
    
    // avc
    document.getElementById('result-avc-total').innerHTML = `£${avcTotal.toFixed(2)} is the extra amount that would be added to your pension each month by adding ${avcRateFormatted} AVCs to your pension.`;
    document.getElementById('result-salary-reduction').innerHTML = `£${salaryReductionTotal.toFixed(2)} is the amount your net monthly salary would decrease by adding ${avcRateFormatted} AVCs to your pension.`;
    // TODO: consider showing the following lines
    //document.getElementById('result-avc-personal').innerHTML = `£${avcPersonal.toFixed(2)} is the amount you contribute to your pension each month`;
    //document.getElementById('result-avc-company').innerHTML = `£${avcCompany.toFixed(2)} is the amount the company contributes.`;

    // avc impact
    document.getElementById('result-pension-total').innerHTML = `£${pensionContributionTotal.toFixed(2)} is the total amount added to your pension each month (including your AVCs)`;
    document.getElementById('result-avc-impact').innerHTML = `This is a ${percentagePensionIncreaseDueToAvc.toFixed(2)}% increase in monthly pension contributions, for a ${percentageSalaryDecreaseDueToAvc.toFixed(2)}% decrease in your net monthly salary.`;
}

const showResults = () => {
  document.getElementById('results').style.display = "block";
}

const bindEvents = () => {
  document.getElementById('submit').addEventListener('click', () => {
    calculate();
    showResults();
  })
}

window.addEventListener("load", () => {
  bindEvents();
});