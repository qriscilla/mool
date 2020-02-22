var goalInput = document.getElementById("goalInput");
var goalDisplay = document.getElementById("goal");
// var goal = 0;
var goalButton = document.getElementById("goalButton");
var progressFill = document.getElementById('progress');
var progressButton = document.getElementById('progressButton');
var progressInput = document.getElementById('progressInput');
var plzHydrate = document.getElementById('hydrate');
var progressReport = document.getElementById('progressReport');
// var percent = '%';
var ozSelect = document.getElementById('oz');

goalButton.addEventListener('click', function(){
  goalDisplay.textContent = goalInput.value;
  goal = Number(goalInput.value);
});

function calculate(){
  var numerator = progressInput.value;
  var denominator = goalInput.value;
  var quotient = parseFloat(numerator)/parseFloat(denominator);

  if(!isNaN(goal)) {
    progressFill.offset.baseVal += quotient;
  } else if (isNaN(goal)) {
    alert('Please set your goal first! :)');
  };

  if(progressFill.offset.baseVal != 0){
    $("#hydrate").hide();
    progressReport.textContent = Math.round(progressFill.offset.baseVal * 100);
    $('#progressReport').show();
    $('#progressReport').append('%');
};

  if(progressFill.offset.baseVal >= 1){
    $('#hydrated').show();
    $('#progressReport').hide();
  };
};

$('select') .change(function () { 
  // ozSelect.addEventListener('click', function(){
  //   alert('clicked oz selector');
  // });
  // if ($('#ml').click(function(){
  //   alert('clicked oz selector');
  // }));
});

// https://stackoverflow.com/questions/6629297/how-to-do-if-clicked-else
