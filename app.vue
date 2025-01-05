<template>
  <div
    class="min-w-screen flex min-h-screen flex-col text-silver-50 antialiased md:mx-auto md:w-1/2"
  >
    <Navbar />

    <NuxtLayout>
      <div class="flex-1 *:p-2">
        <NuxtPage />
      </div>
    </NuxtLayout>

    <Footer />
  </div>
</template>
