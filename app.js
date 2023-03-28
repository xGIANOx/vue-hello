const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'London',
        backgroundImg: { backgroundImage: "url(./london_001.jpg" } 
      }
    }
  }).mount('#app')