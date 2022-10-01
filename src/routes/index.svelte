<script>
  import Header from '../components/header.svelte'
  import Section from '../components/section.svelte'
  import Cta from '../components/cta.svelte'
</script>

<Header initTransparent={true} />
<Cta />
<div>
  <div>
    <Section>
      <div class="text-center pt-10">
        <div
          class="lg:mt-32 mt-20 flex-col text-primary font-poppins font-bold
          xl:text-6xl text-4xl px-5">
          <div class="lg:mb-5 mb-10">How sustainable is your closet?</div>
          <div class="">Explore 2500+ brands below.</div>
        </div>
      </div>
    </Section>
  </div>
</div>
