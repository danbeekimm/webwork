$(function(){
    var n=0;
    //맞춘인형갯수


//총클릭시 0~11 사이 랜덤값발생
//if 해당인형을 안보이게처리//메시지창:1번째 인형을 맞췃네요
//else 1번이이미 사라지고 없는경우
//"1번인형은 이미 처리되었습니다
//12개의 인형이 모두 사라지면 you win game over!
$(".gun").click(function(){
     var idx=parseInt(Math.random()*12); //0~11 
    //var idx=Math.ceil(Math.random()*12); //이건무조건올림.그래서 11로해도됨.10.999999이렇게 나오는ㄴ데올림이니 11까지됨.
    //Math.floor():소수점이하버린다
    //Math.ceil():소수점이하를올림한다
    //Math.round():소수점이하를 반올림한다.
    if($(".sunban li img").eq(idx).is(":hidden")){
        $("#msg").html((idx+1)+"번 인형은 이미 처리되었습니다");

    }else{
        n++; //새로운인형을맞출때마다 1증가
        $("#msg").html((idx+1)+"번째 인형을 맞췄네요!");
        // $(".sunban li img").eq(idx).fadeOut('slow');같은거임 밑에꺼랑 근데 얜 서서히 사라짐.
        $(".sunban li img").eq(idx).hide();
    }

    if(n>=12){
        $("#msg").html("Game Over!! You Win!!");
    }
});
//money 클릭하면 모두초기화(사라진 인형재배치,메세지창 지우기등)후 해당 지폐는 안보이게
$(".money img").click(function(){
    $(this).css("opacity","0") //자리고정으로 돈이없어짐 투명도로
    //$(this).hide(); //자리가 옮겨짐 자리차지 안함
    n=0;
    $(".sunban li img").show();
    $("#msg").html("");
});
});