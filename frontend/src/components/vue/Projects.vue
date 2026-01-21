<template>
  <div class="h-full w-full flex flex-col justify-center px-8 relative overflow-hidden">
    <h2 class="text-4xl font-bold mb-8 text-center text-white z-10">Proyek Pilihan</h2>
    
    <div class="projects-container flex gap-4 md:gap-8 overflow-x-auto py-4 md:py-8 px-4 w-full">
      <a 
        v-for="(project, index) in projects" 
        :key="index"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card min-w-[280px] w-[75vw] md:w-auto md:min-w-[450px] h-auto md:h-[300px] bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group cursor-pointer flex-shrink-0"
      >
        <div>
           <div class="h-24 md:h-32 mb-3 md:mb-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative">
              <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span class="text-white font-bold tracking-widest text-xs md:text-sm">LIHAT REPO</span>
              </div>
           </div>
           <h3 class="text-lg md:text-xl font-bold text-cyan-400 mb-1 md:mb-2">{{ project.title }}</h3>
           <p class="text-xs md:text-sm text-gray-400 line-clamp-3 md:line-clamp-2">{{ project.desc }}</p>
        </div>
        <div class="flex gap-2 mt-3 md:mt-4 flex-wrap">
           <span v-for="tag in project.tags" :key="tag" class="px-2 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full bg-white/5 border border-white/5 text-gray-300 whitespace-nowrap">
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

// Horizontal Scroll Logic removed to prevent blocking vertical scroll
// Users can use Shift+Scroll or Touchpad or Touch to scroll horizontally
</script>

<style scoped>
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
