<template>
  <div class="skeleton-kxwzl9ck2bp heightForSkeleton-kxwzl9ck2bp"></div>
</template>

<style scoped>
.skeleton-kxwzl9ck2bp:empty {
  background-color: #ffffff;
}
.skeleton-kxwzl9ck2bp:empty.heightForSkeleton-kxwzl9ck2bp {
  height: 700px;
}
.skeleton-kxwzl9ck2bp:empty {
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(#fff9f9 200px, transparent 0),
    linear-gradient(#faf7f7 20px, transparent 0),
    linear-gradient(#faf6f6 400px, transparent 0);
  background-repeat: repeat-y;
  background-size: 50px 700px, 700px 700px, 300px 700px, 1000px 700px;
  background-position: 0 0, 0px 490px, 20px 438px, 0px 20px;
  animation: shineForSkeleton-kxwzl9ck2bp 3s infinite;
}
@keyframes shineForSkeleton-kxwzl9ck2bp {
  to {
    background-position: 100% 0, 0px 490px, 20px 438px, 0px 20px;
  }
}
</style>