

//Listen for submit
document.getElementById('tuition-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';
  

   setTimeout(calculateResults, 1000);

    e.preventDefault();
});
//Calculate Results
function calculateResults(e){
    console.log('calculating...');
//UI vars
    const UIunit = document.getElementById('unit');
    const UIlaboratory = document.getElementById('laboratory');

     const RESunit = document.getElementById('unit-result');
     const RESlab = document.getElementById('lab-result');
     const REStuition = document.getElementById('tuition-result');
     const RESmisc = document.getElementById('misc-result');
     const RESothers = document.getElementById('others-result');
     const RESnet = document.getElementById('net-result');
    
     if( UIunit.value !="" && UIlaboratory!="")
     {
     RESunit.value = parseFloat(UIunit.value) * 10000;
     RESlab.value = parseFloat(UIlaboratory.value) * 2500 ;
     REStuition.value = 11200;
     RESmisc.value = 12500;
     RESothers.value = 13000;
     RESnet.value = parseInt(RESunit.value) + parseInt(RESlab.value) + parseInt(REStuition.value) + parseInt(RESmisc.value) + parseInt(RESothers.value);
     }
     else
     {
        RESunit.value = 0;
        RESlab.value = 0;
        REStuition.value = 0;
        RESmisc.value = 0;
        RESothers.value = 0;
        RESnet.value = 0;

     }
        //Show results
        document.getElementById('results').style.display = 'block';
        
}

//Show Error
function showError(error){
    //Hide results
    document.getElementById('unit').style.display = 'none';
    //Hide loader
    document.getElementById('laboratory').style.display = 'none';

    //Create a div
    const errorDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError, 3000);

}

//Cleaer error
function clearError(){
    document.querySelector('.alert').remove();
}