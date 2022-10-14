$('#modal').on('click', function(e){
    e.preventDefault()

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if(name == ""){
        $('#error-name').text('Enter your name');
        return false
    }else if(email == ""){
        $('#error-email').text('Enter your email');
        return false
    }

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'name': name},
        dataType: 'html',
        beforeSend: function(){
            $('#modal').prop('disabled', true)
        },
        success: function(){
            $('.modal-form-overlay').fadeIn();
            $('#name').val('');
            $('#error-name').text('');
            $('#email').val('');
            $('#error-email').text('');
            $('#modal').prop('disabled', false)
        }
    })
})