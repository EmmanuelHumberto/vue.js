<template>

  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <!--key: atributo especial é usado principalmente como uma dica 
        para o algoritmo DOM virtual do Vue para identificar VNodes 
        ao comparar a nova lista de nós com a lista antiga-->

      <li v-for="foto of fotos" v-bind:key="foto.id">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>

  </div>
</template>

<script>
export default {

  data() {

    return {

      titulo: 'AppVallum',
      fotos: []
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}

</script>

<style>
</style>
