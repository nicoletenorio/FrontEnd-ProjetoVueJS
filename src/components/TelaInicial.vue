<template>
<div class= "totalPagina">
        <header class="navbar">
                        <section class="navbar-section">
                          <img class="img-responsive img-logo" src="@/assets/logo-learning-memory.png">
                        </section>
        </header>

                  <div class="columns">
                      <div class="column col-text col-6">
                          <h2>
                            REGISTRE SUAS MEMÓRIAS<br> EM TEMPO REAL E <br> FACILITE SEUS ESTUDOS
                          </h2>

                          <router-link to="/cadastro"><button class="btn btn-primary bg-dark btn-lg">COMEÇAR</button></router-link>
                      </div>
                      <div class="column col-6 col-ft ">
                        <ul class="tab tab-block">
                            <li class="tab-item">
                              <router-link to="/memorias-de-aula"><a href ="#">Memória de Aula</a></router-link>
                            </li>
                            <li class="tab-item">
                              <router-link to="/cadastro-de-disciplina"><a href ="#">Cadastro de disciplina</a></router-link>
                            </li>
                            <li class="tab-item">
                              <router-link to="/login"><a href ="#">Login</a></router-link>
                            </li>
                            <li class="tab-item">
                              <router-link to="/cadastro"><a href ="#">Cadastro</a></router-link>
                            </li>
                        </ul>
                        <img class="img-responsive img-inicial" src="@/assets/imagem-inicial.png">
                      </div>



                  </div>
                      <div class="rodape">

                        <h3 style="margin-top: 120px; font-size: 15px; margin-left: 60px">© Copyright 2000-2020 LearningMemory</h3>


                      </div>
</div>

</template>

<script>
export default {
  name: "inicial"

}
</script>

<style scoped>
            .col-text{
            border-right: 1px solid black;
            margin-top: 60px
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

            h2{
            margin-top:  300px;
            margin-left: 60px;
            font-family:  'Roboto', sans-serif;
            font-size: 60px;
            }

            .btn{
            margin-left: 60px;
            border: none;
            width: 180px;
            font-family: 'Roboto', sans-serif;
            }

            .img-inicial{
            margin-top: 30px;
            }

            .tab-item{
              font-family: 'Roboto', sans-serif;

            }

@media (max-width: 960px){

            .columns{
            flex-direction: column;
            }

            .img-inicial{
            padding-top: 0 auto;
            text-align: center;
          }

            h2{
            font-size: 40px;
            margin-top: 30px;
            border-bottom:1px solid black;
            width: 70%;

            }

            .img-inicial{
            max-width: 500px;
            max-height: 300px;
            }

            .col-text{
            width: 100%;
            }
                  .col-ft{
              font-size: 14px;
              margin-left: 60px;
            }


  }

 @media (max-width: 420px){

            h2{
            font-size: 18px;
            margin-top: 55px;
            white-space: nowrap;
            border-bottom:1px solid black;
            width: 70%;
            }

            .col-text{
            width: 100%;
            border-right: none;
            }

            .btn{
             margin-top: 15px;
            }



}


</style>
