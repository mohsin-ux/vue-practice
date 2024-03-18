console.log("hello vue");

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url: "https://vue-http-demo.firebaseapp.com/posts",
      // title: "the final empire",
      // author: "srandon sanderson",
      // age: 45,
      // x: 0,
      // y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of king",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "patrick rothfuss",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowButton() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
      console.log("clicked");
    },
  },
  computed: {
    filteredBooks(){
      return  this.books.filter((book)=> book.isFav)
    }
  },
});

app.mount("#app");
