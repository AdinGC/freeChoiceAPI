var word="";
var wordBankClean=["A crapella","Bromance","ghost ride","Masterdate","this one","hocking loogies","Trumpillion","Abercrombie and Fitch"];
var wordBankClean2=["A crapella","Bromance","ghost ride","Masterdate","this one","hocking loogies","Trumpillion","Abercrombie and Fitch"];

var wordBankExplicit=["thicc","peeker","Cock block","Masterdate","squashing","Marshmallowing"," supermanning"];
var wordBankExplicit2=["thicc","peeker","Cock block","Masterdate","squashing","Marshmallowing"," supermanning"];

var num=0

var incorrectGuesses=0;
var correctGuesses=0;




$(document).ready(function (){
    $('#launch').on('click',function() {
        incorrectGuesses=0;
        correctGuesses=0;
        $('#correctGuesses').html(correctGuesses);
        $('#incorrectGuesses').html(incorrectGuesses);
       all()

    });
    //PROCESS guess
    $('#submitGuess').on('click',function() {
        var wordGuess=$('#wordOptions').val();
        var processedguess= arr2[wordGuess];


        $('#winOrLose').html('');

        console.log(processedguess);
        console.log(num);
        console.log(arr1[num]);
        if(processedguess==arr1[num]){
            $('#winOrLose').append('That is correct!');
            correctGuesses+=1;
            arr1.splice(num,1);
            all();
        }else{
            $('#winOrLose').append('That is incorrect');
            incorrectGuesses+=1;




        }
        $('#correctGuesses').html(correctGuesses);
        $('#incorrectGuesses').html(incorrectGuesses);
    });
});


function all(){
    chooseWord();
    dropDown();

    $.ajax({
        url: "https://mashape-community-urban-dictionary.p.mashape.com/define?term=" + word,
        type: 'GET',
        beforeSend: function (x) {
            x.setRequestHeader('X-Mashape-Key', "peVVIuMiKcmshoAindSsWWyDE2OEp1X64xsjsn8wGjJgn2Yt5d")
        },
        crossDomain: true,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            getDef(result);
            // getDef(result);

        },
        error: function () {
            alert('Failed!');
        }
    });



}




//chooses word from clean or dirty array
function chooseWord(){
    if($('#cleanOrDirty').val()==1){
        arr1=wordBankClean;
        arr2=wordBankClean2
    }else{
        arr1=wordBankExplicit;
        arr2=wordBankExplicit2
    };
    num= Math.floor(Math.random() * ((arr1.length-1) - 0 + 1)) + 0;
    console.log(num);
    word=arr1[num];
    console.log(word);
    console.log(arr1);
    console.log(arr1);

}

function getDef(result){
    console.log(result.list[0].definition);
    var def1=result.list[0].definition;
    console.log(def1);
    $('#displayDef').html(def1);


}

//generates drop down
function dropDown() {
    document.getElementById("wordOptions").innerHTML = "asdf";
    for (var i = 0; i < (arr2.length); i++) {
        var string = '<option value=' + i + '>' + arr2[i] + '</option>';
        document.getElementById("wordOptions").innerHTML += string;
    }
}






