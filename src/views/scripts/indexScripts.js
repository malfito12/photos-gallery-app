$(() => {
    $('.login-input').css({padding:'10px'})
    $('.container-login').css({minHeight: '700px',display:'flex',justifyContent:'center',alignItems:'center'})

    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("bi bi-eye-slash-fill");
            $('#show_hide_password i').removeClass("bi bi-eye-fill");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("bi bi-eye-slash-fill");
            $('#show_hide_password i').addClass("bi bi-eye-fill");
        }
    });

    $('#formulario-login').submit('click',(e)=>{
        e.preventDefault()
        var user_name=$('#user-name').val()
        var user_password=$('#user-password').val()
        console.log({user:user_name,pass:user_password})
        window.location='/fotos'
    })

})