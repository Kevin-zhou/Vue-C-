import Vue from 'vue'
import Home from 'src/views/home'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Home)
    })
    expect(vm.$el.querySelector('.logo').textContent)
  })
})
