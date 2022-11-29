$(()=>{
    const getUsers=()=>{
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            type:'GET',
            success:(resp)=>{
                var template=''
                for(var i=0;i<resp.length;i++){
                    template=template+`
                    <tr>
                        <td>${resp[i].name}</td>
                        <td>${resp[i].username}</td>
                        <td>${resp[i].email}</td>
                    </tr>
                    `
                }
                $('#table-body').html(template)
            }
        })
    }
    getUsers()
})