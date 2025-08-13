export default function HeroSection() {
  return (
    <section className="min-h-screen pb-12 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Ventas</span>
                <span className="block text-purple-500">Caro</span>
            </h1>
            
            <div className="h-12 overflow-hidden mb-6">
                <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap border-r-4 border-r-purple-500 pr-2 animate-typewriter animate-blink">
                    Fresh from our fields
                </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
                Grown with care and harvested at peak ripeness, our organic strawberries are bursting with natural sweetness and vibrant flavor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all transform hover:-translate-y-1 shadow-lg">
                    Contactame
                </button>
                <button className="px-8 py-3 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500/10 transition-all">
                    Productos
                </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-berry-red">100%</span>
                    <span className="text-gray-600">Organic</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-berry-red">24h</span>
                    <span className="text-gray-600">From Farm to Table</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-berry-red">5★</span>
                    <span className="text-gray-600">Customer Rated</span>
                </div>
            </div>
        </div>
        
        {/* Image Content */}
        <div className="lg:w-1/2 relative animate-slide-left delay-200">
            <div className="absolute -inset-4 bg-berry-green/20 rounded-3xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                     alt="Fresh strawberries" 
                     className="w-full h-auto object-cover"/>
            </div>
            
            {/* Floating Berry Elements */}
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-300">
                <div className="w-8 h-8 rounded-full bg-berry-red/20 text-berry-red flex items-center justify-center mb-2">
                    <i className="fas fa-seedling"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-sm">No Pesticides</h4>
                <p className="text-xs text-gray-600">100% Natural</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-400">
                <div className="w-8 h-8 rounded-full bg-berry-green/20 text-berry-green flex items-center justify-center mb-2">
                    <i className="fas fa-truck"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-sm">Fast Delivery</h4>
                <p className="text-xs text-gray-600">Next Day Available</p>
            </div>
        </div>
    </section>
  )
}