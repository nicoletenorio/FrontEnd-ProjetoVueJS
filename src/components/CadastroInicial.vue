<template>
    <div>
        <header class="navbar">
                        <section class="navbar-section">
                          <img class="img-responsive img-logo" src="@/assets/logo-learning-memory.png">
                        </section>
        </header>
            <div class="column col-4 container-login col-mx-auto"><h3>CADASTRO</h3>
                <div class="form-group container-form">
                    <label class="form-label label-email" for="input-example-1">E-mail</label>
                    <input class="form-input input-email bg-gray" type="text" id="input-example-1" v-model="campoEmail" placeholder="Email">
                    <small id="erro-email" v-show="deuErro"> O E-mail é inválido!</small>
                    <label class="form-label label-senha" for="input-example-1">Senha <h7> °6 a 12 dígitos°</h7></label>
                    <input class="form-input input-senha bg-gray" type="password" id="input-example-1" v-model="campoSenha" placeholder="Senha">
                    <button @click="validaLogin()" class="btn btn-primary bg-dark btn-lg">Cadastrar</button>
                        <div class="retorno">
                            <h5>Já tem uma conta?</h5><router-link to="/login"><button class="btn btn-link" id="cadastre-se">Entre</button></router-link>
                        </div>
                </div>
            </div>
    </div>

</template>
<script>
export default {
    name: "cadastro"
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
                    margin-top: 20px;
                    font-family:  'Roboto', sans-serif;
                }
                .label-email {
                    text-align: initial;
                    font-family:  'Roboto', sans-serif;

                }
                .label-senha {
                    text-align: initial;
                    font-family:  'Roboto', sans-serif;
                }
                .container-form {
                    padding: 20px;
                }
                .input-email {
                    margin-bottom: 40px;
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
                #erro-email {
                    padding: 4px 20px;
                    border: 1px solid#ff6666;
                    border-radius: 3px;
                    background-color:#ff8080;
                    color: black;
                    font-size: 18px;
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

                h7 {
                    font-size: 11px;
                }


</style>
