/* notice.js */ 

// 키보드를 누르면 '눌렀다' 신호만 전달
// 키보드를 떼야 키 값이 전달된다.
// 계속 키보드 키를 눌러도 키가 입력 되는것은 '눌렀다' 신호가 여러번 전달되면
// 입력 처리로 변경 된다.


        $(function()
        {   
            $('#detail').keyup(function()
                {   
                    //5자 이상 입력해야 버튼이 활성화 되게 한다면
                    if($('#detail').val().length >=5)
                        {
                    $('#save').removeAttr('disabled');
                        }
                    else
                    {
                        $('#save').attr('disabled', 'disabled');
                    }
                });
            
            
            
            //$('#save').on('click', function(){ });  -  밑에 식은 이것과 같다.
            $('#save').click(function()
                {
                    let text = $('#detail').val();

                    addList( text ); //input태그에 입력값 ul에 넣기

                    //input 태그에 아무것도 입력하지 않았다면?
                    // if(text==='') // input 태그가 비어있는게 참 이라면
                    //     {
                    //         alert('내용을 입력하세요?');
                    //         $('#detail').focus();
                    //         return;  // 함수 강제 종료
                    //     }

                }); //$('#save').clock 종료

        }); //$( function ) 종료
        
        function addList( text )
        {
                $('#list').append('<li>' + text + '</li>');
        }