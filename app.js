const app = Vue.createApp({
    // Data, Functions
    data(){
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'Gone with the wind', author: 'some name', img: 'assets/me.png', isFav: true},
                {title: 'Gone with the wind', author: 'some name', img: 'assets/me.png', isFav: false},
                {title: 'Gone with the wind', author: 'some name', img: 'assets/me.png', isFav: true}
            ],
            url: 'https://aedevdesigns.com'
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        evaluateShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e.type)
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
           book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')