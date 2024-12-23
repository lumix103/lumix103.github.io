<template>
  <div class="flex min-h-screen flex-col text-silver-50 antialiased">
    <Navbar />

    <NuxtLayout>
      <div class="flex-1 *:p-2">
        <NuxtPage />
      </div>
    </NuxtLayout>

    <Footer />
  </div>
</template>
