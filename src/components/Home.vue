<template>
    <section class="bg-gray-100 py-12 px-4">
      <!-- Sección de presentación -->
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Bienvenido a Medic Care</h1>
            <p class="text-lg text-gray-600 mb-8">Tu salud es nuestra prioridad. Ofrecemos servicios médicos de alta calidad para cuidarte a ti y a tu familia.</p>
            <router-link to="/services" class="inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600">Explorar Servicios</router-link>
        </div>
    </section>
    <div class="flex flex-col center">

      <!-- Sección de servicios -->
       <section class="py-16 px-4">
        <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Nuestros Servicios</h2>
        <!-- Card de servicio -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer testimonial-card" @click="openModal('Consulta Médica', 'Ofrecemos consultas médicas especializadas con profesionales altamente calificados.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-plana-concepto-servicio-hospital_1150-50287.jpg?w=2000&t=st=1708301568~exp=1708302168~hmac=47b339ae41acda17d832373e5fea47baa6a1b35436400fc4ca800989a456266e" alt="Consulta Médica" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Consulta Médica</h3>
                <p class="text-gray-600">Ofrecemos consultas médicas especializadas con profesionales altamente calificados.</p>
            </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer testimonial-card" @click="openModal('Consulta de Laboratorio', 'Realizamos análisis clínicos y pruebas de laboratorio con equipos de última generación.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-plana-concepto-servicio-hospital_1150-50287.jpg?w=2000&t=st=1708301568~exp=1708302168~hmac=47b339ae41acda17d832373e5fea47baa6a1b35436400fc4ca800989a456266e" alt="Consulta de Laboratorio" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Consulta de Laboratorio</h3>
                <p class="text-gray-600">Realizamos análisis clínicos y pruebas de laboratorio con equipos de última generación.</p>
            </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer testimonial-card" @click="openModal('Cirugía Especializada', 'Contamos con un equipo quirúrgico altamente capacitado para realizar procedimientos quirúrgicos complejos.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-plana-concepto-servicio-hospital_1150-50287.jpg?w=2000&t=st=1708301568~exp=1708302168~hmac=47b339ae41acda17d832373e5fea47baa6a1b35436400fc4ca800989a456266e" alt="Cirugía Especializada" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Cirugía Especializada</h3>
                <p class="text-gray-600">Contamos con un equipo quirúrgico altamente capacitado para realizar procedimientos quirúrgicos complejos.</p>
            </div>
            </div>
        </div>
        </div>
       </section>
  
      <!-- Sección de testimonios -->
      <section class="bg-gray-100 py-16 px-4">
        <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Lo que nuestros clientes dicen</h2>
        <!-- Testimonios -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Testimonio 1 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden testimonial-card p-6">
            <p class="text-gray-600 mb-4">"Excelente atención médica. Me sentí muy bien atendido y cuidado en todo momento. ¡Gracias Medic Care!"</p>
            <p class="text-gray-800 font-semibold">- Juan Pérez</p>
            </div>
            <!-- Testimonio 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden testimonial-card p-6">
            <p class="text-gray-600 mb-4">"Excelente atención médica. Me sentí muy bien atendido y cuidado en todo momento. ¡Gracias Medic Care!"</p>
            <p class="text-gray-800 font-semibold">- Juan Pérez</p>
            </div>
            <!-- Testimonio 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden testimonial-card p-6">
            <p class="text-gray-600 mb-4">"Excelente atención médica. Me sentí muy bien atendido y cuidado en todo momento. ¡Gracias Medic Care!"</p>
            <p class="text-gray-800 font-semibold">- Juan Pérez</p>
            </div>
            <!-- Testimonio 4 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden testimonial-card p-6">
            <p class="text-gray-600 mb-4">"Excelente atención médica. Me sentí muy bien atendido y cuidado en todo momento. ¡Gracias Medic Care!"</p>
            <p class="text-gray-800 font-semibold">- Juan Pérez</p>
            </div>
        </div>
        </div>
      </section>
  
      <!-- Sección de información del equipo médico -->
      <section class="py-16 px-4 bg-gray-100">
        <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Nuestro Equipo Médico</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Médico 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" @click="openModal('Dr. Juan Martínez', 'Especialista en cardiología con más de 10 años de experiencia.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-medico-dibujado-mano_23-2150680327.jpg?w=1800&t=st=1708301524~exp=1708302124~hmac=6f48be4bb718875e38053259ab6bf931b5cad30730a6322f454cc5ad252818e5" alt="Dr. Juan Martínez" class="w-full h-64 object-cover rounded-t-lg">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Dr. Juan Martínez</h3>
                <p class="text-gray-600">Especialista en cardiología</p>
            </div>
            </div>

            <!-- Médico 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" @click="openModal('Dr. Ana López', 'Especialista en pediatría enfocada en el bienestar infantil.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-medico-dibujado-mano_23-2150680327.jpg?w=1800&t=st=1708301524~exp=1708302124~hmac=6f48be4bb718875e38053259ab6bf931b5cad30730a6322f454cc5ad252818e5" alt="Dr. Ana López" class="w-full h-64 object-cover rounded-t-lg">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Dr. Ana López</h3>
                <p class="text-gray-600">Especialista en pediatría</p>
            </div>
            </div>

            <!-- Médico 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" @click="openModal('Dr. Pablo Ramirez', 'Experto en cirugía ortopédica y traumatología deportiva.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-medico-dibujado-mano_23-2150680327.jpg?w=1800&t=st=1708301524~exp=1708302124~hmac=6f48be4bb718875e38053259ab6bf931b5cad30730a6322f454cc5ad252818e5" alt="Dr. Pablo Ramirez" class="w-full h-64 object-cover rounded-t-lg">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Dr. Pablo Ramirez</h3>
                <p class="text-gray-600">Experto en cirugía ortopédica</p>
            </div>
            </div>

            <!-- Médico 4 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" @click="openModal('Dra. Marta González', 'Especialista en oncología con enfoque en tratamientos personalizados.')">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-medico-dibujado-mano_23-2150680327.jpg?w=1800&t=st=1708301524~exp=1708302124~hmac=6f48be4bb718875e38053259ab6bf931b5cad30730a6322f454cc5ad252818e5" alt="Dra. Marta González" class="w-full h-64 object-cover rounded-t-lg">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Dra. Marta González</h3>
                <p class="text-gray-600">Especialista en oncología</p>
            </div>
            </div>
        </div>
        </div>
      </section>

  
    </div>
    <!-- Modal -->
    <div class="fixed inset-0 flex items-center justify-center z-50" v-if="modalOpen">
        <div class="absolute inset-0 bg-black opacity-50" @click="modalOpen = false"></div>
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-md z-10">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ modalTitle }}</h3>
            <p class="text-gray-600">{{ modalContent }}</p>
            <button @click="modalOpen = false" class="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600">Cerrar</button>
        </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      modalOpen: false,
      modalTitle: '',
      modalContent: ''
    };
  },
  methods: {
    openModal(title, content) {
      this.modalOpen = true;
      this.modalTitle = title;
      this.modalContent = content;
    }
  }
}
</script>
<style scoped>
.testimonial-card {
  transition: transform 0.3s ease-in-out;
}

.testimonial-card:hover {
  transform: scale(1.05);
}
</style>