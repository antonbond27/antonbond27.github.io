$(()=> {
    $('#download').click(()=> {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', (data) => {
            $('#dane-programisty').after(
                '<br><div>Imię: ' + data.imie +
                '<br> Nazwisko: ' + data.nazwisko +
                '<br> Zawód: ' + data.zawod +
                '<br> Firma: ' + data.firma);

        });
    });
});
