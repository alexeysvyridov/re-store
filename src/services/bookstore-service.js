export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: 'Susan J.Fowler',
      price: 32,
      coverImage: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4919/9781491965979.jpg"
    },
    {
      id: 2,
      title: "Release It",
      author: 'Michael T.Nygard',
      price: 45,
      coverImage: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6805/9781680502398.jpg"
    },
  ];
  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
       resolve(this.data) 
      }, 700)
    });
  }
}