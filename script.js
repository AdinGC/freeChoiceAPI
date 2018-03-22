var word="";
var wordBankClean=["A crapella","Bromance","ghost ride","Masterdate"];
var wordBankExplicit=["thicc","peeker","Cock block","Masterdate"];
var num=0


$(document).ready(function (){
    $('#newDef').on('click',function() {
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

            },
            error: function () {
                alert('Failed!');
            }
        });

    });
    //PROCESS guess
    $('#submitGuess').on('click',function() {
        var wordGuess=$('#wordOptions').val();
        $('#winOrLose').html('');

        console.log(wordGuess);
        if(wordGuess==num){
            console.log("sucess");
            $('#winOrLose').append('That is correct!')
        }else{
            $('#winOrLose').append('That is incorrect')
        }
        
    });
});

//chooses word from clean or dirty array
function chooseWord(){
    if($('#cleanOrDirty').val()==1){
        arr=wordBankClean
    }else{
        arr=wordBankExplicit
    };
    num= Math.floor(Math.random() * ((arr.length-1) - 0 + 1)) + 0;
    console.log(num);
    word=arr[num];
    console.log(word);
    console.log(arr);
    arr.splice(num,1);
    console.log(arr);

}

function getDef(result){
    console.log(result.list[1].definition);
    var def1=result.list[1].definition;
    console.log(def1);
    $('#displayDef').html(def1);


}

//generates drop down
function dropDown() {
    document.getElementById("wordOptions").innerHTML = "asdf";
    for (var i = 0; i < (arr.length); i++) {
        var string = '<option value=' + i + '>' + arr[i] + '</option>';
        document.getElementById("wordOptions").innerHTML += string;
    }
}






