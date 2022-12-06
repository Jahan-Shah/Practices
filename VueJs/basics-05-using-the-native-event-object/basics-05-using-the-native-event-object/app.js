const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    setName() {
      if (!this.name)
        return '';
      return this.name + ' ' + 'Sarfraz';
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
      // this.counter--;
    }
  }
});

app.mount('#events');
