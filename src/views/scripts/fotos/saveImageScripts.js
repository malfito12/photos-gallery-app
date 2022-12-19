$(() => {
    const userLogged = localStorage.getItem('token')
    if (!userLogged) {
        window.location = '/'
    } else {
        //------SCRIPTS DE SAVE IMAGES---------------
        const input = document.getElementById("image-archive")
        var base64=null
        // funciona como el estado en react cada que cambia la imagen se llama al evento donde capturamos los meta-datos
        input.addEventListener('change', async(event) => { 
            const file = event.target.files[0];
            base64 = await convertBase64(file);
        })
        const convertBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = (error) => {
                    reject(error);
                };
            });
        };
        //-------------GUARDAR IMAGEN-----------------
        $('#formulario-image-save').on('submit', (e) => {
            e.preventDefault()
            var data = {
                image_name: $('#image-name').val(),
                image_archive: base64,
                image_description: $('#image-description').val()
            }
            try {
                $.ajax({
                    url:'/guardar-imagen',
                    type:'POST',
                    data:data,
                    success:resp=>{
                        console.log(resp.message)
                        $('#formulario-image-save').trigger('reset')
                    },
                    error:err=>{
                        alert(err.responseJSON.message)
                    }
                })
            } catch (error) {
                
            }
        })

        
    }
})