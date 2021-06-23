<!--Arquivo App.vue = single file template ou template de unico arquivo
que tambem é um modulo e declara dentro dele um componente chamado "app "
que divide-se em 3 tags:

* <template></template> = Aparencia,

* <script></script> = comportamento,

* <style></style> = estilo -->

<template>
<!--Qnado há mais de um elemento dentro da tag template,
  é necessario o uso da tag <div></div> ou <contener></contener>-->
<div>
<h1>{{ titulo }}</h1>

<!--Interpolação usando 'V-bind' ou ':' = directiva do veu.js
para fazer um interpolação em um atributo -->
<img v-bind:src="foto.url " :alt="foto.titulo" >
</div>
</template>

<script>
export default{
  data(){
    return{
      titulo: 'Galeriapic',
      foto: {
        url: 'https://www.agrosete.com.br/wp-content/uploads/2020/12/Cachorro-com-a-l%C3%ADngua-de-fora-%C3%A9-sede-1.jpg',
        titulo: 'cachorro'
      }
    }
  }
}
</script>


<style>

</style>
