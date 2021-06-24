<template>

	<div class="painel">
		<h2 class="painel-titulo">{{ titulo }}</h2>
		<!--slot é um elemento HTML - parte do pacote de tecnologia de Web Components 
		- é um espaço reservado dentro de um componente da Web que você pode 
		preencher com sua própria marcação, o que permite criar árvores DOM 
		separadas e apresentá-las juntas.<slot>quando o vue substirui o componente
		meu-painel pela marcação é retirado no processo a tag img, por isso 
		deve-se usar no lugar ta tag div a tag slot.-->
		<slot class="painel-conteudo"></slot>
	</div>

</template>

<script>
export default {

	props:['titulo']
  
}
</script>

<!--scoped propiedade de style que aplica os efeitos de estilização 
somente no componete-->

<style scoped>

.painel 
{
padding: 0 auto;
border: solid 4 px grey;
display: inline-block;
margin: 5px;
box-shadow: 5px 5px 10px grey;
width: 200px;
height: 100%;
vertical-align: top;
text-align: center;
}

.painel .painel-titulo 
{
text-align: center;
border: solid 2px;
background: lightblue;
margin: 0 0	 0;
padding: 9px;
text-transform: uppercase;
}
*{

	box-shadow: 5px 5px 5px;
}
</style>
