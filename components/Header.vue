<template>
  <header
    class="px-[4.625rem] flex justify-center sm:justify-between items-center bg-[#D9D9D9] h-[6.313rem] gap-4 sm:gap-0 sm:h-[6.313rem] flex-col sm:flex-row"
    id="nav"
  >
    <h1 class="font-medium text-[25px]">LOGO</h1>
    <nav class="gap-8 font-bold flex">
      <NuxtLink class="nav-link" href="#main-section"><h3>NAV 1</h3></NuxtLink>
      <NuxtLink class="nav-link" href="#second-section"
        ><h3>NAV 2</h3></NuxtLink
      >
      <NuxtLink class="nav-link" href="#slides-section"
        ><h3>NAV 3</h3></NuxtLink
      >
    </nav>
  </header>
</template>

<style lang="postcss">
.nav-link {
  @apply hover:text-[#FF0000];
}
</style>
