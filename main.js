var app = new Vue({
    el: "#app",
    data: {
        empty : true,
        newMemo : false,
    },
    methods: {
        hideShow() {
            this.newMemo = !this.newMemo;
        }


    }
});
