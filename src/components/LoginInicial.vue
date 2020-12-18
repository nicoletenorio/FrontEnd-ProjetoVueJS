<template>
    <div>
                <header class="navbar">
                        <section class="navbar-section">
                          <img class="img-responsive img-logo" src="@/assets/logo-learning-memory.png">
                        </section>
                </header>
        <div class="column col-4 container-login col-mx-auto"><h3>LOGIN</h3>
            <form id="form" @submit="validaCadastro" action="" method="">
                <div class="form-group container-form">
                    <p v-if="erros.length">
                        <b>Por favor, corrija o(s) seguinte(s) erro(s): </b>
                        <ul>
                            <li id="erros" v-for="erro in erros" :key="erro.id">{{erro}}</li>
                        </ul>
                    </p>

                     <label class="form-label label-email" for="input-example-1">Nome</label>
                    <input class="form-input input-email bg-gray" type="text" id="nome" v-model="campoNome" placeholder="Nome">

                    <label class="form-label label-email" for="input-example-1">E-mail</label>
                    <input class="form-input input-email bg-gray" type="text" id="campoEmail" v-model="campoEmail" placeholder="Email">

                    <label class="form-label label-senha" for="input-example-1">Senha</label>
                    <input class="form-input input-senha bg-gray" type="password" id="campoSenha" v-model="campoSenha" placeholder="Senha">

                    <button @click="validaInputs" class="btn btn-primary bg-dark btn-lg">Entrar</button>
                        <div>
                            <h5>Ainda não tem conta?</h5>
                            <router-link to="/cadastro"><button class="btn btn-link" id="cadastre-se">Cadastre-se</button></router-link><br>
                            <br>

                            <router-link to="/"><button class="btn btn-link" id="cadastre-se">Página Inicial</button></router-link>
                        </div>

                </div>
            </form>
        </div>
    </div>

</template>

<script>
export default {

    name: 'login',

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


        validaCadastro: function(e) {

            if(this.campoEmail && this.campoSenha){
                return true;
            }



            this.erros = [];

            if(!this.campoEmail ){
                this.erros.push('O campo email é obrigatório!')
            }

            if(!this.campoSenha){
                this.erros.push('O campo senha é obrigatório!');
            }

            if(!this.campoNome){
                this.erros.push('O campo nome é obrigatório!')
            }
            e.preventDefault();
        },

        validaInputs: function(e){
            if(this.campoSenha.length < 6 || this.campo.length > 12){
                this.erros.push('A senha deve possuir no mínimo 6 caracteres e no máximo 12!')
            }

            if(this.campoEmail.search("@") !== 1){
                this.erros.push('O campo e-mail deve ser válido! ')
            }
             e.preventDefault();


            let nome = document.getElementById("nome").value;
            let padrao = /[^a-zà-ú]/gi;

            let valida_nome = nome.match(padrao);

            if( valida_nome || !nome ){
            this.erros.push("O campo nome possui caracteres inválidos ou é vazio!")
            }else{
            return true;
            }



            if(this.campoEmail && this.campoSenha && this.campoNome == true){

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

         }
        }
    }


}

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


</style>
