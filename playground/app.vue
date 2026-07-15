<template>
  <div>
    <header>
      <nav>
        <NuxtLinkLocale to="/">
          Home
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/dashboard">
          Dashboard
        </NuxtLinkLocale>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

main {
  padding: 1rem;
}
</style>
