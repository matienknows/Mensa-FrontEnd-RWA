<template>
  <section class="landing">
      <div class="container-fluid h-100 background vegan">
        <div class="row h-100 align-items-center">
          <div class="col-12 slogan">
            <h1>MEAL TABLE</h1>
            <h3>Daily fresh food</h3>
            <router-link type="button" class="btn btn-outline-light add-button"
                         to="/login" tag="button">Login
            </router-link>
          </div>
        </div>
      </div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <h1>Our Cafeteria</h1>
          </div>
        </div>
        <div class="row mx-auto justify-content-center">
          <div class="col-12 col-lg-3 offset-lg-1 slide-in from-left">
            <h4 class="opening-time">Öffnungszeiten</h4>
            <p>Montag - Freitag: 10:00 - 19:00 Uhr</p>
          </div>
          <div class="col-12 col-lg-3 offset-lg-1 fade-in">
            <h4 class="calendar">Kontakt</h4>
            <p>Rufen Sie an oder schreiben Sie uns:</p>
            <p>Telefon: <a href="tel:+491788913553">+49 178 891 35 53</a><br/>
              E-Mail: &nbsp;<a href="mailto:said.m.sadat@stud.leuphana.de">said.m.sadat@stud.leuphana.de</a></p>
          </div>
          <div class="col-12 col-lg-3 offset-lg-1 slide-in from-right">
            <h4 class="place">Lage & Anfahrt</h4>
            <p>Besuchen Sie uns gern in Bergedorf</p>
            <p>Boberger Aue 22, 21031 Hamburg</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid h-100 background veggy"></div>
  </section>
</template>

<script>

export default {
  name: "LandingComponent",
}
</script>

<style scoped lang="scss">

section {
  margin-top: 0;

  a {
    color: white;
  }

  h1 {
    margin-bottom: 20px;
  }

  .background {
    min-height: 90vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .slogan {
      position: relative;
      top:35px;
      left: 50%;
      transform: translate(-50%, 150%);
      text-align: center;
      color: white;
      font-weight: bolder;
    }
  }

  .vegan {
    background-image: url('../../src/assets/images/vegan.jpg');
  }

  .veggy {
    background-image: url('../../src/assets/images/emiliano.jpg');
  }

  .jumbotron {
    margin-bottom: 0;
    padding-bottom: 35px;
    background: rgb(219, 3, 123);
    background: linear-gradient(16deg, rgba(219, 3, 123, 1) 0%, rgba(219, 3, 218, 1) 81%);
    color: white;
  }

  @media only screen and (max-width: 600px) {
    [class*="col-"] {
      margin-bottom: 30px;
    }
  }
}



</style>