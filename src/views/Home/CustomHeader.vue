<template>
  <header class="flex justify-center w-full header bg-brand-main">
    <div class="flex flex-col w-4/5 max-w-6xl header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img
            class="w-full"
            src="../../assets/images/logo_white.png"
            alt="Logo"
          />
        </div>
        <div class="flex">
          <button
            class="px-6 py-2 font-bold text-white rounded-full  focus:outline-none"
          >
            Criei minha conta
          </button>
          <button
            class="px-6 py-2 font-bold bg-white rounded-full  text-brand-main focus:outline-none"
          >
            Entrar
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Tenha um feecback. <br />
          E faca seus cliente mais <br class="hidden lg:inline-block" />
          felizes!
        </h1>
        <p class="text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks com um
          <br class="hidden lg:inline-block" />simples widget na página.
        </p>

        <div>
          <button
            class="px-6 py-2 mt-10 font-bold bg-white rounded-full  text-brand-main focus:outline-none"
          >
            Crie uma conta grátis
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 700px;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url("../../assets/images/blue_balloons.png");
    background-size: 628px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>