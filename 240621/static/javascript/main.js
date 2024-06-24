// main.js


$(function()
{
// 로그인 화면에서 모달창이 아닌 주변 배경 클릭시 로그인모달창 닫기
        $('#back').click( function()
        {
                $('#modal').hide();
        });

// 로그인 화면에서 로그인버튼 클릭시
       $('#loginBt').click( function()
        {
                var id = $('#id');
                var pw = $('#pw');

                // 아이디 또는 비밀번호를 입력하지 않았을경우 로그인진행 X
                if( id.val() == '' || pw.val() == '' )
                    {
                            alert('아이디 또는 비밀번호를 입력하지 않았습니다.');
                            return; // 해당 함수 강제종료
                    }

                // 아이디와 비밀번호를 모두 입력했다면 로그인 진행
                let user = JSON.parse( localStorage.getItem('user') );
                
                // 아이디가 회원가입 값과 일치하는지 확인
                if( id.val() === user.id )
                    {
                        //아이디가 일치한다면 -> 비밀번호가 일치는지 확인
                        if( pw.val() === user.pw )
                            {
                                //아이디와 비밀번호가 회원가입 값과 일치한다면 로그인 처리
                                $('.member').html( `<b> ${user.id} </b>
                                                    <a href='javascript:window.location.reload()'>
                                                    로그아웃 </a> ` );
                                $('#modal').hide();
                                return;
                            }
                    }
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');    

        });
});



function login()
{
        $('#modal').show();
}