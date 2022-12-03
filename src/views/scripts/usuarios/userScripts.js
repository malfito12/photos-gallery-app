$(() => {
    //MOSTRAR CONTRASEÑA
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
    $("#show_hide_password_repeat a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password_repeat input').attr("type") == "text") {
            $('#show_hide_password_repeat input').attr('type', 'password');
            $('#show_hide_password_repeat i').addClass("bi bi-eye-slash-fill");
            $('#show_hide_password_repeat i').removeClass("bi bi-eye-fill");
        } else if ($('#show_hide_password_repeat input').attr("type") == "password") {
            $('#show_hide_password_repeat input').attr('type', 'text');
            $('#show_hide_password_repeat i').removeClass("bi bi-eye-slash-fill");
            $('#show_hide_password_repeat i').addClass("bi bi-eye-fill");
        }
    });

    //ALERTAS
    $('#alert-contraseña').hide()
    $('#alert-register-success').hide()
    //REGISTRAR USUARIOS
    $('#register-user').submit((e) => {
        e.preventDefault()
        const data = {
            user_name: $('#user-name').val(),
            user_last_nameP: $('#user-last_nameP').val(),
            user_last_nameM: $('#user-last_nameM').val(),
            user_first_name: $('#user-first_name').val(),
            user_email: $('#user-email').val(),
            user_password: $('#user-password').val(),
            user_password_repeat: $('#user-password-repeat').val()
        }
        if (data.user_password != data.user_password_repeat) {
            $('#alert-contraseña').fadeTo('slow', 0.5).slideDown(500, () => {
                setTimeout(()=>{
                    $('#alert-contraseña').slideUp(500)
                },3000) 
            })
            return
        }
        try {
            $.ajax({
                url: '/registro-usuario',
                type: 'POST',
                data: data,
                success: resp => {
                    $('#alert-register-success').trigger('reset')
                    // console.log(resp)
                    $('#alert-register-success').fadeTo(2000, 500).slideUp(500, () => {
                        $('#alert-register-success').slideUp(500)
                    })
                    $('#register-user').trigger('reset')
                }
            })

        } catch (error) {
            console.log(error)
        }
    })
    

})