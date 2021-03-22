var app = new Vue ({
    el : '#root',
    data : {
        itemArray : [
            'fare l\'esercizio',
            'rendere bello l\'esercizio',
            'aspettare il bonus di Mistretta'
        ],
        newItem : ''
    },
    methods : {
        addItem() {
            if(this.newItem != '')
            this.itemArray.push(this.newItem);
            this.newItem = ''
        },
        removeItem(index){
            this.itemArray.splice(index,1)
        }
    }
})