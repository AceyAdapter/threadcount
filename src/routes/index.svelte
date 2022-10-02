<script>
  import Header from '../components/header.svelte'
  import Section from '../components/section.svelte'
  import Cta from '../components/cta.svelte'
  import GoodOnYou from '../components/icons/good_on_you.svelte'
</script>

<div class="min-h-screen">
  <Header initTransparent={true} />
  <Cta />
  <div class="text-center my-20">
    <div
      class="lg:mt-32 flex-col text-primary font-poppins font-bold xl:text-6xl
      text-4xl px-5">
      <div class="lg:mb-5 mb-20">How sustainable is your closet?</div>
    </div>
  </div>
  <div class="flex flex-col items-center py-20 my-20 bg-secondary px-4">
    <div class="text-base-100 text-center px-3 text-3xl font-bold">
      Explore sustainability and ethical ratings of 2500+ brands
    </div>
    <div class="flex flex-row mt-2 items-center">
      <div class="mr-2 text-sm text-white">Powered by</div>
      <a href="https://goodonyou.eco/" target="_blank">
        <GoodOnYou style={'w-24 fill-white'} />
      </a>
    </div>
  </div>
  <div class="flex flex-col items-center my-20 px-4">
    <div class="text-primary text-center px-3 text-3xl font-bold">
      Gain insights into your fashion footprint.
    </div>
    <a
      class="btn btn-primary text-white lg:w-40 w-2/3 h-14 font-bold
      font-poppins mt-10"
      href="/app">
      Get Your ThreadScore
    </a>
    <a
      class="btn btn-secondary text-white lg:w-40 w-2/3 h-14 font-bold
      font-poppins mt-10"
      href="/app">
      Dive Into the data
    </a>

  </div>
</div>
