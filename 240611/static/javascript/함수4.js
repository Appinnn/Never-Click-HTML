
//브라우저에 모두 표시되면 발생하는 이벤트 onload
window.onload= function()
{
    document.getElementById('calc').addEventListener('click', function(){
    var a = Number(document.querySelector('#kor').value);
    var b = Number(document.querySelector('#mat').value);
    var c = Number(document.querySelector('#eng').value);
    var d = Number(document.querySelector('#his').value);
    총점계산(k,m,e,h);
)};
function 총점계산(a,b,c,d) //총점 계산 만 하는 함수
{
    var total=a+b+c+d;
    평균계산(total);
    
    
    
}
function 평균계산(total) //평균 계산만 하는 함수
{
    var avg=total / 4;
    출력(total,avg);
}
function 출력(tot,avg) //총점과 평균을 화면에 출력 하는 함수
{
    // var a = Number(document.querySelector('#kor').value);
    // var b = Number(document.querySelector('#mat').value);
    // var c = Number(document.querySelector('#eng').value);
    // var d = Number(document.querySelector('#his').value);
    
    document.querySelector('#total').innerText=`총점 : ${tot}점`;
    document.querySelector('#avg').innerText=`평균 : ${avg}점`;
}