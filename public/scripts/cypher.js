$(function() {
    $('form.api-form').each(function() {
        var $form = $(this);
		var $group = $form.parents('.conversion-grouping');
		console.log($group);
        var $input = $('*[name=input]', $group);
        var api_url = $form.attr('data-action');
		var $result = $('.encryption-result', $group);

        $form.submit(function(e) {
            e.preventDefault();
			$result.hide();
            $.ajax({

                type: 'POST',
                contentType: "application/json; charset=utf-8",
                url: api_url,

                data: JSON.stringify({
                    input: $input.val()
                }),

                success: function(data) {
                    $result.text(data.output).slideDown();
                },

                dataType: 'json'
            });
        });
    });
});
