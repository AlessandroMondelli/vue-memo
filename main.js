var app = new Vue({
    el: "#app",
    data: {
        empty : false,
        newMemo : false,
        newMemoText : "",
        memos : ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut "]
    },
    methods: {
        hideShow() { //Mostro o Nascondo elemento
            this.newMemo = !this.newMemo;
        },

        createMemo() { //creo memo
            if (!this.newMemoText == "") { //Se non è stato inserito testo vuoto
                this.memos.push(this.newMemoText); //Inserisco contenuto in array
                this.newMemoText = ""; //Svuoto textbox
                this.empty = false; //La sezione memo non è più vuota
            }
        }
    }
});
