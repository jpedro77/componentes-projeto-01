import Vue from 'vue'
export default new Vue({
  methods: {
    setUsuarioSelecionado(usuario) {
      this.$emit('usuarioSelecionado', usuario)
    },
    onUsuarioSelecionado(usuario) {
      this.$on('usuarioSelecionado', usuario)
    }
  }
})