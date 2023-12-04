<template>
<div>
    <h1>filter</h1>
</div>
  
</template>

<script>


export default {
  name: 'FilterView',
    data(){
        return{
            products: []
        }
    },
    updated(){
        this.requisicao();
    },
    mounted(){
        this.requisicao();
    },
    methods: {
        requisicao(){
            fetch('https://api.escuelajs.co/api/v1/products')
            //Transforma requisição em JSON
            .then( response => response.json() )
            //A resposta da promessa em data
            .then( data => {
                //Criar uma constante para receber os valores filtrados
                const sociosFiltrados = data.filter(
                    socio => {
                        return socio.plano === this.filtro;
                    }
                )
                //Atribui os valores filtrados a propriedade reativa.
                this.socios = sociosFiltrados;
            }
            )
            .catch( error =>  {
                console.log("Deu erro na requisição", error);
            })
        }
    }
}
</script>