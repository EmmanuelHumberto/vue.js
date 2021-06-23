/*main.js = modulo, é um dos primeiros arquivos a serem carregados:
ele dirá por exemplo onde no arquivo index.html o componente app
deverá ser rendeirizado

/*importando o core do view = global view object*/
import Vue from 'vue'

/*importando do arquivo 'app.vue' o componente app*/
import App from './App.vue'

/*Criando uma vue instansce, criada com o auxilio da global view object
  vue instansce = a conexão entre a view e o componente,
  E é passado dentro de ({}) um objeto de configuração
*/
new Vue({

    /*objeto de configuração, composto por:
      propriedade el = elemento do index.html que receberá o componente app.
      seletor de css id = '#app'
    */
    el: '#app',

    /*propriedade render = função ()=>{}: recebe o paramentro 'h' passado pela vue instance.
      sendo que o parametro recebe o componetente App, que será rendeirizado no lugar de app
    */
    render: h => h(App)
})