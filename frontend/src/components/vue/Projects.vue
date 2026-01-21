<template>
  <div class="h-full w-full max-w-6xl mx-auto flex flex-col justify-center px-4 md:px-8 py-12 relative">
    <h2 class="text-4xl font-bold mb-12 text-center text-white z-10">Proyek Pilihan</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      <a 
        v-for="(project, index) in projects" 
        :key="index"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group cursor-pointer h-[350px]"
      >
        <div>
           <div class="h-40 mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative">
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span class="text-white font-bold tracking-widest text-sm">LIHAT REPO</span>
              </div>
           </div>
           <h3 class="text-xl font-bold text-cyan-400 mb-2">{{ project.title }}</h3>
           <p class="text-sm text-gray-400 line-clamp-3 leading-relaxed">{{ project.desc }}</p>
        </div>
        <div class="flex gap-2 mt-4 flex-wrap">
           <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/5 text-gray-300 whitespace-nowrap">
             {{ tag }}
           </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const projects = ref([
  { 
    title: 'Smart Home Analysis', 
    desc: 'Exploratory Data Analysis dan pemodelan prediktif untuk konsumsi energi rumah tangga.', 
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    link: 'https://github.com/destadrns/smart-home-energy-consumption-analysis'
  },
  { 
    title: 'ETH Price Prediction', 
    desc: 'Analisis tren harga Ethereum menggunakan Gradient Boosting dan evaluasi model Machine Learning.', 
    tags: ['Python', 'AI', 'Gradient Boosting'],
    link: 'https://github.com/destadrns/ETH-Price-Prediction-Gradient-Boosting'
  },
  { 
    title: 'Rentaliqra App', 
    desc: 'Aplikasi web front-end dengan desain responsif dan interaksi pengguna yang dinamis.', 
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/LavinaCaco/rentaliqra'
  },
]);

// Horizontal Scroll Logic
// Horizontal Scroll Logic removed to prevent blocking vertical scroll
// Users can use Shift+Scroll or Touchpad or Touch to scroll horizontally

onMounted(() => {
  // No custom scroll listener needed
});

onUnmounted(() => {
  // Cleanup
});
</script>

<style scoped>
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
}
</style>
