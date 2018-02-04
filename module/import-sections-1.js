button.addEventListener('click', event => {
    import ('./dialogBox.js')
    .then(dialogBox => {
            dialogBox.open();
        })
        .catch(error => {
            /* Error handling */
        })
});