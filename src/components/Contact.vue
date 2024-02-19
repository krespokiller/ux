<template>
    <section class="bg-white py-12 px-4">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h2>
            <p class="text-gray-600">¿Tienes alguna pregunta o necesitas más información? No dudes en ponerte en contacto con nosotros.</p>
            <form class="mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" class="border border-gray-300 p-3 rounded-md" placeholder="Nombre">
                    <input type="email" class="border border-gray-300 p-3 rounded-md" placeholder="Correo electrónico">
                </div>
                <textarea class="border border-gray-300 p-3 rounded-md mt-4 w-full" rows="5" placeholder="Mensaje"></textarea>
                <button type="submit" class="mt-4 inline-block bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600">Enviar Mensaje</button>
            </form>
        </div>
    </section>
</template>
