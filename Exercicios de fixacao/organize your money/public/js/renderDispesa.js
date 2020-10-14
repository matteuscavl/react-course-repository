const btnDispesa = $('.btn-new-aba')
const divForm = $('.campos-input');

btnDispesa.click(function(e) {
    e.preventDefault();
    divForm.append(renderNewDispesa());
})

const renderNewDispesa = () => {
    const newFormDispesa = $('<input type="number">');
    newFormDispesa.addClass('campo-form')

    const labelDispesa = $('<h3>')
    labelDispesa.html('Digite uma nova despesa: ')

    divForm.append(labelDispesa)
    return newFormDispesa;
}