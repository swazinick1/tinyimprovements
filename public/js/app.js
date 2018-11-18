const getKudos = function (){
    $.get(`/api/kudos`).then(function(data){
        renderKudos(data);
    })
}

const renderKudos = function (dataList){

    $('#kudoCard').empty();

    for (let i = 0; i < dataList.length; i++){
        $('#kudos').append(
            `<div class=' card kudoCard'>
            <h5 id="from" >Fro: ${datalist[i].from[0].name}</h5>
            <h5 id="to" > To: ${dataList[i].to[0].name}</h5>
            <h3>${dataList[i].title}</h3>
            <p>${dataList[i].body}</p>
            </div>
            `
        );
    }
}

const renderUsers = function () {
    $.get(`/api/users`).then (function(data){
        for (let i = 0; i < data.length; i++){
            $('#kudo-from').append(`<option value='${data[i]._id}'>${data[i].name}</option>`)
            $('#kudo-to').append(`<option value='${data[i]._id}'>${data[i].name}</option>`)
        }
    })
}

const sendKudos = function (event){
    event.preventDefault();
    if($('#kudo-from').val() && $('#kudo-to').val()){
        $('.userRow').empty();

        const newKudo = {
            title: $('#kudo-title').val(),
            body: $('#kudo-body').val(),
            from: $('#kudo-from').val(),
            to: $('#kludo-to').val()
        }

        if ($('#kudo-title').val() && $('#kudo-body').val()) {

            $.post('/api/kudos', newKudo).then(function (data) {
    
                $('#kudo-title').val('');
                $('#kudo-body').val('');
                $('#kudo-from').val('');
                $('#kudo-to').val('');
                
               
    
                getKudos();
    });
}
}
}

$('#send-kudo').on('click', sendKudos);
renderUsers();
getKudos();