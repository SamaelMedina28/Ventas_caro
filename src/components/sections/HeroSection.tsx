export default function HeroSection() {
    return (
        <section className="bg-purple-50">
            <div className="flex flex-col lg:flex-row items-center justify-center pb-12 px-6 md:px-12 min-h-screen gap-12 max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="lg:w-1/2 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif">
                        <span className="block text-gray-800">Ventas</span>
                        <span className="block text-purple-400 bg-purple-100 px-4 py-2 rounded-lg w-max">Caro</span>
                    </h1>

                    <div className="h-12 overflow-hidden mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap border-r-4 border-r-purple-300 pr-2 animate-typewriter animate-blink text-purple-600">
                            Fresco desde nuestros campos
                        </h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Cultivados con cuidado y cosechados en su punto máximo de madurez, nuestras fresas orgánicas rebosan de dulzura natural y un sabor vibrante.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-purple-400 text-white rounded-lg hover:bg-purple-500 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-purple-200">
                            Contáctame
                        </button>
                        <button className="px-8 py-3 border-2 border-purple-300 text-purple-500 rounded-lg hover:bg-purple-50 transition-all hover:border-purple-400">
                            Productos
                        </button>
                    </div>

                    <div className="mt-12 flex items-center space-x-8">
                        <div className="flex flex-col bg-white/50 p-4 rounded-xl backdrop-blur-sm">
                            <span className="text-2xl font-bold text-purple-500">100%</span>
                            <span className="text-gray-600">Orgánico</span>
                        </div>
                        <div className="flex flex-col bg-white/50 p-4 rounded-xl backdrop-blur-sm">
                            <span className="text-2xl font-bold text-purple-500">24h</span>
                            <span className="text-gray-600">De la granja a tu mesa</span>
                        </div>
                        <div className="flex flex-col bg-white/50 p-4 rounded-xl backdrop-blur-sm">
                            <span className="text-2xl font-bold text-purple-500">5★</span>
                            <span className="text-gray-600">Valoración</span>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 relative animate-slide-left delay-200">
                    <div className="absolute -inset-4 bg-purple-100/40 rounded-3xl -z-10"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                        <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Fresh strawberries"
                            className="w-full h-auto object-cover" />
                    </div>

                    {/* Floating Berry Elements */}
                    <div className="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-300 border border-purple-100">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center mb-2">
                            <i className="fas fa-seedling"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm">Sin pesticidas</h4>
                        <p className="text-xs text-gray-600">100% Natural</p>
                    </div>

                    <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-400 border border-purple-100">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center mb-2">
                            <i className="fas fa-truck"></i>
                        </div>
                        <h4 className="font-bold text-gray-800 text-sm">Envío rápido</h4>
                        <p className="text-xs text-gray-600">Disponible al día siguiente</p>
                    </div>
                </div>
            </div>
        </section>
    )
}