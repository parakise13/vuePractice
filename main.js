/* CDN으로 VUE를 불러와서 사용하는 법*/
/* 1. const으로 app을 선언하고 그뒤에 Vue.createApp을 생성 해준다.
이미 vue를 설치했기 때문에 이렇게 접근이 가능함 
  2. createApp 안에 object 형식으로 data 전달
  
  const app = Vue.createApp({}) 정리 하자면 vue를 사용하기 위해서는 이 식을 사용하는데 {}안에는 최소 비어있는 object라도 하나 들어가 있어야함. */
const app = Vue.createApp({
  // data: function () { 이 식을 더 간단하게 쓰는 방법👇
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      // image: "./assets/images/socks_blue.jpg",
      selectedVariant: 0,
      // inventory: 100,
      // inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
      // 여기서 this.cart는 위에서 data로 작성해준 cart를 의미함
    },
    // updateImage(variantImage) {
    //   this.image = variantImage;
    /* 그리고 upateImage라는 method의 인자로 variantImage가 들어오고 
      this(variant).image 가 인자로 받은 variantImage가 되는 것 */
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
