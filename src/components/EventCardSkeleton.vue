<template>
  <div class="skeleton-fbbbso3md3z heightForSkeleton-fbbbso3md3z"></div>
</template>


<style scoped>
.skeleton-fbbbso3md3z:empty {
  background-color: #ffffff;
}
.skeleton-fbbbso3md3z:empty.heightForSkeleton-fbbbso3md3z {
  height: 400px;
}
.skeleton-fbbbso3md3z:empty {
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(#e8e8e8 40px, transparent 0),
    linear-gradient(#eeeeee 40px, transparent 0),
    linear-gradient(#f2eded 400px, transparent 0);
  background-repeat: repeat-y;
  background-size: 50px 600px, 100px 600px, 100px 600px, 236px 600px;
  background-position: 0 0, 143px 25px, 26px 25px, 20px 81px;
  animation: shineForSkeleton-fbbbso3md3z 3s infinite;
}
@keyframes shineForSkeleton-fbbbso3md3z {
  to {
    background-position: 100% 0, 143px 25px, 26px 25px, 20px 81px;
  }
}
</style>