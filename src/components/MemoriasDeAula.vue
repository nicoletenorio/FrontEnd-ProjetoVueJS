<template>
<div class= "totalPagina">
        <header class="navbar">
                        <section class="navbar-section">
                          <img class="img-responsive img-logo" src="@/assets/logo-learning-memory.png">
                        </section>
        </header>
                        <div class="container">
                            <div class="columns">
                                <div class="column col-4 col-mx-auto">
                                    <h2>Memórias de Aula</h2>
                                    <p>Escolha a disciplina que deseja cadastrar uma memória.</p>
                                    <div class="form-group">
                                        <select class="form-select">
                                            <option>Disciplinas</option>
                                            <option>Disciplinas</option>
                                            <option>Teste2</option>
                                            <option>Teste3</option>
                                        </select>
                                    </div>

                                    <div class="form-group">

                                        <label class="form-label" for="input-example-14">Data</label>
                                        <input class="form-input" id="input-example-14" type="date" value="2016-12-31" v-model="data">

                                        <p>Digite neste campo todo o conteúdo que deseja registrar.</p>
                                        <div class="form-group">
                                            <label class="form-label" for="input-example-3">Conteúdo</label>
                                            <textarea class="form-input" id="cont" placeholder="Textarea" rows="3" v-model="conteudo"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="input-example-3">Observações Gerais</label>
                                            <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3" v-model="obsGerais"></textarea>
                                        </div>

                                         <div class="form-group">
                                                <label class="form-checkbox form-inline">
                                                    <input type="checkbox" v-model="checkCamera"><i class="form-icon"></i> Ligou a câmera
                                                </label>

                                                <label class="form-checkbox form-inline">
                                                    <input type="checkbox" checked="" v-model="checkAudio"><i class="form-icon"></i> Interagiu por áudio
                                                </label>
                                                <br>
                                                 <label class="form-checkbox form-inline">
                                                    <input type="checkbox" v-model="checkChat"><i class="form-icon"></i> Interagiu por chat
                                                </label>

                                                <label class="form-checkbox form-inline">
                                                    <input type="checkbox" checked="" v-model="checkAlunos"><i class="form-icon"></i> Interagiu com outros alunos
                                                </label>
                                            </div>

                                            <button type="button" class=" btn btn-primy bg-dark btn-lg">Cadastrar</button>

                                    </div>


                                </div>

                            </div>
                        </div>



</div>

</template>

<script>
export default {

     name: "memorias",

    data() {
        return{

            cadastroMemorias: [],
            data: "",
            conteudo: "",
            obsGerais: "",
            checkCamera: "",
            checkAudio: "",
            checkChat: "",
            checkAlunos: "",

        }
    },
    watch:{
        conteudo(valorConteudo){
            this.cadastroMemorias.push({conteudo: valorConteudo})
        }

    },


    }

</script>

<style scoped>

            *{
                font-family: 'Roboto', sans-serif;
            }

            .img-logo {
            max-width: 200px;
            margin: 0 auto;
            }

            .navbar {
            width: 100%;
            background-color: #47525E;
            height: 100px;
            }

            .col-6{
                text-align: center;
            }

            .btn {

                 margin-top: 20px;
                 border: none;
                }

</style>
