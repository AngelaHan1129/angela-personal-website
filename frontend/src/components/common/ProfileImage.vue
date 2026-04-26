<template>
  <div class="profile-img-wrapper">
    <img 
      src="@/assets/images/Angela.webp" 
      alt="Han Pei Hxuan" 
      loading="lazy" 
      width="400" 
      height="400" 
    />
  </div>
</template>

<style scoped>
.profile-img-wrapper {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.profile-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.profile-img-wrapper:hover img {
  transform: scale(1.05);
}
</style>