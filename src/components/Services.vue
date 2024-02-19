<template>
    <section class="bg-gray-100 py-12 px-4">
        <div class="container mx-auto">
            <h2 class="text-3xl font-semibold text-gray-800 mb-6">Nuestros Servicios</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card de servicio 1: Consulta Médica -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-6 py-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Consulta Médica</h3>
                        <p class="text-gray-600">Ofrecemos consultas médicas especializadas con profesionales altamente calificados.</p>
                    </div>
                    <div class="bg-gray-200 px-6 py-4">
                        <router-link to="/consulta-medica" class="text-blue-500 font-semibold">Más información ></router-link>
                    </div>
                </div>
                
                <!-- Card de servicio 2: Exámenes de Laboratorio -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-6 py-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Exámenes de Laboratorio</h3>
                        <p class="text-gray-600">Realizamos una amplia gama de análisis clínicos y pruebas de laboratorio para un diagnóstico preciso.</p>
                    </div>
                    <div class="bg-gray-200 px-6 py-4">
                        <router-link to="/examenes-laboratorio" class="text-blue-500 font-semibold">Más información ></router-link>
                    </div>
                </div>
                
                <!-- Card de servicio 3: Vacunación -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-6 py-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Vacunación</h3>
                        <p class="text-gray-600">Proporcionamos vacunación para todas las edades, incluyendo vacunas preventivas y de viaje.</p>
                    </div>
                    <div class="bg-gray-200 px-6 py-4">
                        <router-link to="/vacunacion" class="text-blue-500 font-semibold">Más información ></router-link>
                    </div>
                </div>
                
                <!-- Card de servicio 4: Rehabilitación Física -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-6 py-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Rehabilitación Física</h3>
                        <p class="text-gray-600">Brindamos terapias y programas de rehabilitación personalizados para recuperación de lesiones y afecciones físicas.</p>
                    </div>
                    <div class="bg-gray-200 px-6 py-4">
                        <router-link to="/rehabilitacion-fisica" class="text-blue-500 font-semibold">Más información ></router-link>
                    </div>
                </div>
                
                <!-- Card de servicio 5: Salud Mental -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="px-6 py-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Salud Mental</h3>
                        <p class="text-gray-600">Ofrecemos servicios de psicología y psiquiatría para el tratamiento de trastornos mentales y emocionales.</p>
                    </div>
                    <div class="bg-gray-200 px-6 py-4">
                        <router-link to="/salud-mental" class="text-blue-500 font-semibold">Más información ></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
