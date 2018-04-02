var questions = 
[
    ["Who sings the hook on Jay Z’s Can’t Knock the Hustle?","Janet Jackson","Aaliyah","Mary J. Blige","Beyonce","Mary J. Blige"],
    ["Who are the original members of Nas’ rap collective The Firm?","Lil Kim, AZ, Fabolous, Naz","Noreaga, Capone, Foxy Brown","Lil Kim, Cornega, Jay Z","Foxy Brown, AZ, Cormega, Nas","Foxy Brown, AZ, Cormega, Nas"],
    ["Ali Shaheed Muhammad is part of which rap group?","Jungle Brothers","Das EFX","De La Soul","Tribe Called Quest","Tribe Called Quest"],
    ["What is Camp Lo's Luchini about?","Cars","Pasta","A mobster","Money","Money"],
    ["Who did Tupac diss on the track Hit Em Up?","Puff Daddy","Lil Kim","Notorious BIG","Mob Deep","All of these","All of these"],
    ["Which is the correct name/spelling for this Cleveland, Ohio, rap group?","Bone Thugs of Harmony","Bone Thugs with Harmony","Bone Thugs & Harmony","Bone Thugs-N-Harmony","Bone Thugs-N-Harmony"],
    ["In addition to “me and you,” who else is “rolling down the strip on Vogues/coming up slamming Cadillac doors” on OutKast’s 1996 hit song Elevators?","Your momma and your cousin too","Your momma and your sister too","Your poppa and your auntie too","Your poppa and your brother too","Your momma and your cousin too"],
    ["Total is featured on which LL Cool J song?","Hey Lover","Back Seat","Loungin","Doin' It","Loungin"],
    ["What is part of the three-course meal mentioned in All About the Benjamins?","Steak, scallops and caviar","Spaghetti, fettuccini and veal","Chicken, broccoli and rice","Linguini, lobster and shrimp","Spaghetti, fettuccini and veal"],
    ["Which hip-hop song features the line “Just like Uniblab, robotic kicking flab?”","Spellbound by K-Solo","Flava in Ya Ear by Craig Mack","They Want EFX by Das EFX","Get it Wet by Twista","Flava in Ya Ear by Craig Mack"],
    ["What does Wutang’s C.R.E.A.M. stand for?","Christ Rules Everything Around Me","Cosmit Radiation Effects and Activation Monitor","Cash Rules Everything Around Me","Creators of Rudimental Excellence and Movement","Cash Rules Everything Around Me"],
    ["Finish the rest of these lyrics from Electric Relaxation by Tribe Called Quest: “Relax yourself girl …”","Please settle down","Peace at hand","Reset plan","Be set clear","Please settle down"],
    ["On the song Big Poppa, Notorious B.I.G. washes down his T-bone steak and cheese eggs with ","Welch's Grape","Moet","Sprite","Dom Perignon","Welch's Grape"],
    ["Who was awarded the first Rap Grammy?","Lil Wayne","Jazzy Jeff and The Fresh Prince","Tupac","LL Cool J","Jazzy Jeff and The Fresh Prince"],
    ["Which two rappers had the worse beef in Hip Hop history","Ja Rule v. 50 Cent","Kanye West v. 50 Cent","Biggie Smalls v. Tupac","LL Cool J v Kool Moe Dee","Biggie Smalls v. Tupac"],
    ["What was the name of Destiny's Child's first album?","Destiny's Child","Survivor","The Writings On the Wall","No, No, No","Destiny's Child"],
    ["Which was Eminem's most controversial song?","We Made You","Stan","Bully","The Real Slim Shady","Bully"]
];

//create loop to choose random number, if random number chosen, choose again
//function to create random number between a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  
}

//turn this into a function 
//Empty array to hold the question
var randomQuestionArray = [];

// get a list of random numbers for questions to choose
do{
    var i = randomQuestionArray.length;
    var ranNum = getRandomInt(0,16);
    if(randomQuestionArray.indexOf(ranNum) === -1){
        randomQuestionArray.push(ranNum);
    }
} while(i < 5);

//turn this into a function
//Extract the questions from questions
var selectedQuestions = []
for(var i = 0; i < 5; i++){
    selectedQuestions.push(questions[randomQuestionArray[i]]);
}

//Extract Question/Answer
for(var i = 0; i < 5; i++){
    var question = selectedQuestions[i][0];
    var options = selectedQuestions[i].slice(1, selectedQuestions[i].length-1); 
    var answer = selectedQuestions[i].slice(selectedQuestions[i].length-1);
    //console.log(questions, options, answer);

    //Display questions on UI
    $('#questionHolder').append('<div id="q' + i + '">' + question + '</div>'); 

    //create the variable for the radio button form
    var radioButton ='';

    //loop through the options array to create the radio button options
    for(var j = 0; j < options.length; j++){
        var radioButton1 = 
        '<label class=' + '"radio-inline"' + '><input type=' + '"radio"' + 'name=' + '"optradio"' +'value=' + '"' + j + '"' + '>' + options[j] + '</label>';
        radioButton = radioButton + radioButton1;
    }

    radioButton = '<form>' + radioButton + '</form><br>'
    $('#questionHolder').append(radioButton);

}

    //array to store the guesses
    var arrGuess = [];

$( "#submitAnswers" ).click(function() {

    //fncn to store guesses
    $('input[type="radio"][name="optradio"]:checked').each(function(){
        arrGuess.push($(this).val());  //push values in array
    });

  });


