<script>
  import Instagram from './icons/instagram.svelte'
  import Mail from './icons/mail.svelte'
  import ThreadcountLogo from './icons/threadcount_logo.svelte'

  export let initTransparent = false

  let y = 0
</script>

<div
  class="sticky top-0 flex flex-row lg:justify-between justify-center py-3
  lg:py-4 lg:px-10 px-6 bg-base-100 z-50 {initTransparent || y > 70 ? 'border-b-2 border-primary' : ''}">
  <div>
    <a class="flex flex-row items-end" href="/">
      <ThreadcountLogo style={'lg:w-8 w-6 mr-2'} />
      <div class="text-primary font-poppins font-bold text-xl lg:text-2xl">
        Thread
        <span class="ml-[-2px] text-secondary">Count</span>
      </div>
    </a>
  </div>
  <div class="lg:block hidden">
    <a
      href="https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"
      target="_blank">
      <Instagram style={'w-5 h-5 fill-base-100'} />
    </a>
  </div>
  <div class="lg:hidden absolute right-5 top-2">
    <a
      href="https://www.linkedin.com/in/nicholas-kreitz-3a13531a0/"
      target="_blank">
      <Instagram style={'w-5 h-5 fill-base-100'} />
    </a>
  </div>
</div>

<svelte:window bind:scrollY={y} />
