<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="nav-link">
            <img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_of_life2.svg/1200px-Star_of_life2.svg.png" alt="Logo">
          </RouterLink>
        </div>
        <div class="hidden md:flex">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/services" class="nav-link">Servicios</RouterLink>
        </div>
        <button @click="toggleModal" class="md:hidden lg:hidden focus:outline-none">
          <svg class="h-6 w-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Modal -->
  <transition name="fade">
    <div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="toggleModal"></div>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-left">
                <div class="mt-2">
                  <RouterLink to="/" class="modal-link" @click="toggleModal">Home</RouterLink>
                  <RouterLink to="/services" class="modal-link" @click="toggleModal">Servicios</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- End Modal -->
  <RouterView/>
</template>



<style>
.nav-link {
  color: #333;
  display: inline-block;
  margin-right: 20px;
  line-height: 16px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #0070c9;
}

.modal-link {
  display: block;
  padding: 10px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.modal-link:hover {
  background-color: #f5f5f5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>