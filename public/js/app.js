



const sendKudo = function (event){
    event.preventDefault();
    const sender = $("#kudo-from").val();
    const reciever = $("kudo-to").val();
    const msgTitle = $("#kudo-title").val().trim();
    const msg = $("#kudo-body").val().trim();


    $.post('api/users',{})

}

