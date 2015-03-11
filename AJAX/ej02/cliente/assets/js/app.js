$(function() {
    var $provincias = $('#provincias');
    var $municipios = $('#municipios');

    var fillSelect = function($select, values) {
        var options = [];
        for (var i in values) {
            options.push(new Option(values[i], i));
        }

        $select.children().remove();
        $select.append(options);
        $select.removeAttr('disabled');


    };

    $.getJSON('../servidor/cargaProvinciasJSON.php', {}, function(provincias) {

        fillSelect($provincias, provincias);

    });




    $provincias.on('change', function(e) {

        var provincias = $provincias.val();
        $.ajax('../servidor/cargaMunicipiosJSON.php', {

            method: 'POST',
            data: {

                provincia: provincias

            },

            dataType: 'json', // automáticamente convierte lo que viene del servidor en json
            success: function(municipios) {
                fillSelect($municipios, municipios);
            }

        });
    });

});
