<script>
  let y = 0
</script>

<style>
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .bounce {
    animation: bounce 3s infinite;
  }

  .dissolve {
    animation: disappear 1s ease-in-out forwards;
  }
</style>

<div
  class="{y > 50 ? 'dissolve' : ''} z-40 absolute bottom-4 left-1/2 transform
  -translate-x-1/2">
  <div class="bounce flex flex-row items-center justify-center">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 fill-white"
        viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8
          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32
          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0
          45.3l160 160z" />
      </svg>
    </div>
    <div class="text-xl text-white font-semibold mx-2">Learn More</div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 fill-white"
        viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8
          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32
          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0
          45.3l160 160z" />
      </svg>
    </div>
  </div>
</div>

<svelte:window bind:scrollY={y} />
