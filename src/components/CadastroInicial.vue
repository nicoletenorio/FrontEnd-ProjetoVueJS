<template>
    <div>
        <header class="navbar">
            <section class="navbar-section">
                <img class="img-responsive img-logo" src="@/assets/logo-learning-memory.png">
            </section>
        </header>


        <form id="form" @submit="validaCadastro" action="" method="">
            <div class="column col-4 container-login col-mx-auto"><h3>CADASTRO</h3>
                <div class="form-group container-form">
                    <p v-if="erros.length">
                        <b>Por favor, corrija o(s) seguinte(s) erro(s): </b>
                        <ul>
                            <li id="erros" v-for="erro in erros" :key="erro.id">{{erro}}</li>
                        </ul>
                    </p>

                    <label class="form-label label-email" for="input-example-1">Nome</label>
                    <input class="form-input input-email bg-gray" type="text" id="campoNome" v-model="campoNome" placeholder="Nome">

                    <label class="form-label label-email" for="input-example-1">E-mail</label>
                    <input class="form-input input-email bg-gray" type="text" id="campoEmail" v-model="campoEmail" placeholder="Email">

                    <label class="form-label label-email" for="input-example-1">Senha <h4>°de 6 a 12 dígitos°</h4></label>
                    <input class="form-input input-senha bg-gray" type="password" id="campoSenha" v-model="campoSenha" placeholder="Senha">

                    <button @click="CadastraInputs" class="btn btn-primary bg-dark btn-lg">Cadastrar</button>

                        <div class="retorno">
                            <h5>Já tem uma conta?</h5><router-link to="/login"><button class="btn btn-link" id="cadastre-se">Entre</button></router-link><br>
                            <br>
                            <br>
                             <router-link to="/"><button class="btn btn-link" id="cadastre-se">Página Inicial</button></router-link>
                        </div>


                </div>
            </div>
         </form>
    </div>

</template>
<script>
export default {
    name: "cadastro",

     data() {
        return{
            id: Date.now(),
            erros: [],
            campoEmail: null,
            campoSenha: null,
            campoNome: null,

        }
    },

    methods: {

        CadastraInputs: function(){


            let campoE = document.getElementById("campoEmail");
            let campoS = document.getElementById("campoSenha");
            let campoN = document.getElementById("campoNome")

            let dados = JSON.parse(localStorage.getItem("dadosCadastro"));

            if(dados == null){
                localStorage.setItem("dadosCadastro", "[]");
                dados = [];
            }

            let registro = {
                email: campoE.value,
                senha: campoS.value,
                nome: campoN.value
            }

            dados.push(registro);

            localStorage.setItem("dadosCadastro", JSON.stringify(dados));

            campoE.value = "",
            campoS.value = "",
            campoN.value = ""


        },

    }
};
</script>
<style scoped>

                .container-login {
                    height: 550px;
                    text-align: center;
                    min-width: 350px;
                    border-radius: 3px;
                }
                h3 {
                    font-size: 40px;
                    margin-top: 20px;
                    font-family:  'Roboto', sans-serif;
                }
                .label-email {
                    margin-top: 20px;
                    text-align: initial;
                    font-family:  'Roboto', sans-serif;

                }
                .label-senha {
                    margin-top: 20px;
                    text-align: initial;
                    font-family:  'Roboto', sans-serif;
                }
                .container-form {
                    padding: 20px;
                }
                .input-email {

                    border-color: #5A6978;
                }
                .input-senha {
                    border-color: #5A6978;
                }
                .btn {
                    margin-top: 40px;
                    border: none;
                }
                h5 {
                    margin-top: 40px;
                }
                .btn-link {
                    font-size: 20px;
                    margin-top: 3px;
                }
                #erros {
                    color:#ff6666;
                    font-family:  'Roboto', sans-serif;
                }


                .img-logo {
                max-width: 200px;
                margin: 0 auto;
                }
                .navbar {
                width: 100%;
                background-color: #47525E;
                height: 100px;
                margin-bottom: 60px;

                }

                h4 {
                    font-size: 14px;
                    float: right;
                }


</style>
