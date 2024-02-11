const botResponses = (userMessage) => {

    let botResponse = 'Przepraszam, nie rozumiem, czy mógłbyś zmodyfikować swoje pytanie?';

    if (userMessage.toLowerCase().includes('rozmiar') || userMessage.toLowerCase().includes('format')) {
        botResponse = 'W naszej ofercie znajdują się wizytówki w formatach: 9x5 cm, 8,5x5,5 cm oraz 9x5,5 cm';
    } else if (userMessage.toLowerCase().includes('cen')) {
        botResponse = 'Cena wizytówek zależy od ilości zamówionych sztuk, formatu oraz rodzaju papieru. W przypadku korzystania z naszego systemu: cena zmienia się na bieżąco.';
    } else if (userMessage.toLowerCase().includes('dzięk')) {
        botResponse = 'Również dziękuję za rozmowę. Pozdrawiam!';
    } else if (userMessage.toLowerCase().includes('status') || userMessage.toLowerCase().includes('zamówien')) {
        botResponse = 'Aby sprawdzić status swojego zamówienia, proszę podać numer zamówienia.';
    } else if (userMessage.toLowerCase().includes('płatność') || userMessage.toLowerCase().includes('opłat')) {
        botResponse = 'Za zamówienie możesz zapłacić przelewem, przelewem na telefon lub przy odbiorze.';
    } else if (userMessage.toLowerCase().includes('ofer'))  {
        botResponse = 'Nasza oferta jest dość szeroka, proszę sprecyzuj czego szukasz, a postaram się pomóc.';
}

    return botResponse;
};
export default botResponses;