$(function() {
    $encryptionResult = $('#encryption-result');

    $('form.api-form').each(function() {
        var $form = $(this);
        var $plaintext = $('*[name=plaintext]');
        var api_url = $form.attr('data-action');
        $form.submit(function(e) {
            e.preventDefault();
            $encryptionResult.hide();
            $.ajax({
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                url: api_url,
                data: JSON.stringify({
                    plaintext: $plaintext.val()
                }),
                success: function(data) {
                    $encryptionResult.text(data.encoded).slideDown();
                },
                dataType: 'json'
            });
        });
    });
});
