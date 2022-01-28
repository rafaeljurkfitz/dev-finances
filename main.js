const newTransaction = document.getElementsByClassName('button new');
const cancelTransaction = document.getElementsByClassName('button cancel');

const modal = {
    open(){
        //abrir o modal
        //adicionar a class active ao modal
        document
                .querySelector('.modal-overlay')
                .classList
                .add('active')
    },
    close() {
        //fechar o modal
        //remover a class active do modal
        document
                .querySelector('.modal-overlay')
                .classList
                .remove('active')
    }
};

newTransaction[0].addEventListener("click", event => {
    modal.open();
});

cancelTransaction[0].addEventListener("click", event => {
    modal.close();
});

