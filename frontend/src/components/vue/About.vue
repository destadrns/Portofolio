<template>
  <div class="h-full w-full flex items-center justify-center p-4 md:p-8">
    <div class="glass-panel p-6 md:p-8 rounded-2xl max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto no-scrollbar">
      <div class="avatar-container w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 relative flex-shrink-0">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 opacity-50 animate-pulse"></div>
        <img src="/images/profile.jpg" alt="Avatar" class="w-full h-full object-cover relative z-10" />
      </div>
      <div class="text-content flex-1 text-justify">
        <h2 class="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tentang Saya</h2>
        <p class="text-gray-300 leading-relaxed text-lg">
        Saya Desta Adriyan Saputra, mahasiswa S1 Informatika di Universitas Amikom Yogyakarta dengan ketertarikan pada pengembangan teknologi berbasis data dan kecerdasan buatan. Saat ini, saya berfokus untuk mengembangkan pemahaman dan keterampilan di bidang Artificial Intelligence dan Data Analysis.

        Sebagai mahasiswa Informatika, saya terbiasa berpikir secara logis, analitis, dan terstruktur dalam menyelesaikan permasalahan. Saya menikmati proses mengolah data, membangun model, serta memahami pola dan insight yang dapat digunakan sebagai dasar pengambilan keputusan.

        Ke depannya, saya berkomitmen untuk terus mengembangkan kemampuan sebagai AI Engineer atau Data Analyst, dengan fokus pada pembelajaran berkelanjutan, pengerjaan proyek, dan penerapan teknologi secara nyata baik di lingkungan akademik maupun profesional.
        </p>
        <div class="stats mt-6 flex gap-8">
            <div class="stat">
                <span class="block text-3xl font-bold text-white">1+</span>
                <span class="text-sm text-gray-400">Tahun Pengalaman</span>
            </div>
            <div class="stat">
                <span class="block text-3xl font-bold text-white">10+</span>
                <span class="text-sm text-gray-400">Proyek</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.glass-panel', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});
</script>

<style scoped>
.glass-panel {
  transform-style: preserve-3d;
  perspective: 1000px;
}
</style>
