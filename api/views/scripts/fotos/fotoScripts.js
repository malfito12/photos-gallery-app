
$(() => {
    const userLogged = localStorage.getItem('token')
    if (!userLogged) {
        window.location = '/'
    } else {
        //----SCRIPTS DE IMAGES VIEW----
        const getUsers = () => {
            $('#progress').show()
            // const data = [
            //     { id: 1, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 2, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 3, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 4, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 5, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 6, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 7, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            //     { id: 8, url: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80', title: 'paisaje 1', text: 'este es el primer paisaje' },
            // ]
            // var template1 = ''
            // for (var i = 0; i < data.length; i++) {
            //     template1 = template1 + `
            //     <div class="card m-2 " style="width: 18rem;">
            //         <img src=${data[i].url} class="card-img-top p-1 " alt="#">
            //         <div class="card-body">
            //             <h5 class="card-title">${data[i].title}</h5>
            //             <p class="card-text">${data[i].text}</p>
            //             <a href="#" class="btn btn-primary">Go somewhere</a>
            //         </div>
            //     </div>
            //     `
            // }
            // $('#imagenes-jquery').html(template1)
            
            $.ajax({
                url: '/get-images',
                type: 'GET',
                contentType: 'application/json',
                success: (resp) => {
                    $('#progress').hide()
                    // console.log(resp)
                    var template1 = ''
                    for (var i = 0; i < resp.length; i++) {
                        template1 = template1 + `
                            <div class="card m-2 " style="width: 18rem;">
                                <div style="width:260px;height:200px;">
                                    <img src=${resp[i].image_archive} class="card-img-top p-1" style="height:100%; width:100%;"  alt="#">
                                </div>
                                <div image_id=${resp[i]._id} class="card-body">
                                    <h5 class="card-title" style="display:none">${resp[i]._id}</h5>
                                    <h5 class="card-title">${resp[i].image_name}</h5>
                                    <p class="card-text">${resp[i].image_description}</p>
                                    <div class="d-grid gap-2">
                                        <button  id='btn-edit-image' class="btn btn-success">Editar</button>
                                        <button id='btn-delete-image' class="btn btn-danger">Eliminar</button>
                                    </div>
                                    
                                </div>
                            </div>
                        `
                    }
                    $('#imagenes-jquery').html(template1)
                }
            })
        }
        getUsers()
        
        $(document).on('click','#btn-delete-image',function(){
            $('#progress').show()
            var element=$(this)[0].parentElement.parentElement //optiene los elementos del boton
            var id = $(element).attr('image_id')//buscar el id de la tabla por el atributo
            $.ajax({
                url:'/delete-image',
                type:'POST',
                data:{id:id},
                success:resp=>{
                    $('#progress').hide()
                    alert(resp.message)
                    getUsers()
                },
                error:err=>{
                    $('#progress').hide()
                    alert(err.responseJSON.message)
                }
            })
            
            // confirm('estas seguro de eliminar')
        })
    }
})