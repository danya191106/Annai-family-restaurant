import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 md:space-y-8">
                    {/* Restaurant Name Top */}
          <h2 className="text-xl md:text-4xl font-bold text-charcoal uppercase tracking-widest mb-2">
            Annai Family Restaurant
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 md:w-12 bg-terracotta"></div>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-terracotta uppercase font-semibold">
              Tiruchengode, With A Little Spice
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-charcoal leading-[1.1] tracking-tight">
            Come <br /> hungry.<br />
            Leave <span className="text-terracotta italic">glowing.</span>
          </h1>
          
          <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
            A neighborhood table for generous Indian cooking, the first clink of glasses, and one more story before you go.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <a href="#menu" className="w-full sm:w-auto text-center bg-terracotta text-cream px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-opacity-90 transition-all">
              View Menu
            </a>
            <a href="#contact" className="w-full sm:w-auto text-center border border-charcoal px-8 py-4 text-xs tracking-widest uppercase font-semibold hover:bg-charcoal hover:text-cream transition-all">
              Contact Us
            </a>
          </div>

          <div className="flex items-center gap-4 pt-8 md:pt-12">
            <div className="h-[1px] w-8 bg-border"></div>
            <p className="text-xs md:text-sm text-muted tracking-wide">
              Dinner, Tuesday through Sunday · Walk-ins welcome
            </p>
          </div>
        </div>

                      {/* Right Image */}
        <div className="relative h-[160px] md:h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0 overflow-hidden flex items-center justify-center">
          <img 
            src="/images/hero.jpeg" 
            alt="Annai Restaurant" 
            className="w-full h-full object-contain object-center" 
          />
          
          <div className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 origin-left">
            <p className="text-xs tracking-[0.3em] uppercase text-muted whitespace-nowrap">
              The Room, Just Before Service
            </p>
          </div>
        </div> 
</section>
      {/* ================= EVENTS SECTION ================= */}
      <section id="events" className="py-16 md:py-24 bg-cream border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">Celebrate With Us</h2>
            <div className="h-[1px] w-24 bg-terracotta mx-auto"></div>
            <p className="text-muted mt-4 text-sm md:text-base">Best Location For Your Special Occasions</p>
          </div>

          {/* Grid: Mobile la 1, Desktop la 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Event 1: Birthday */}
            <div className="group">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm mb-4">
                <img src="/images/event-birthday.jpg" alt="Birthday Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-charcoal text-center">Birthday Party</h3>
            </div>

            {/* Event 2: Wedding */}
            <div className="group">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm mb-4">
                <img src="/images/event-wedding.jpg" alt="Wedding Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-charcoal text-center">Wedding Party</h3>
            </div>

            {/* Event 3: College */}
            <div className="group">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm mb-4">
                <img src="/images/event-college.jpg" alt="College Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-charcoal text-center">College Party</h3>
            </div>

            {/* Event 4: Baby Shower */}
            <div className="group">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm mb-4">
                <img src="/images/event-babyshower.jpg" alt="Baby Shower" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-charcoal text-center">Baby Shower Function</h3>
            </div>

            {/* Event 5: DJ Party */}
            <div className="group">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm mb-4">
                <img src="/images/event-dj.jpg" alt="DJ Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-charcoal text-center">DJ Party Events</h3>
            </div>

            {/* Event 6: Fire Camp */}
            <div className="group">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm mb-4">
                <img src="/images/event-firecamp.jpg" alt="Fire Camp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-charcoal text-center">Fire Camp</h3>
            </div>

          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center bg-terracotta text-cream p-8 rounded-xl shadow-md">
            <p className="text-base md:text-lg font-serif italic">
              "We also undertake food orders for functions and special occasions."
            </p>
            <a href="#contact" className="inline-block mt-4 border border-cream px-6 py-2 text-xs tracking-widest uppercase hover:bg-cream hover:text-terracotta transition-colors">
              Contact Us for Booking
            </a>
          </div>

        </div>
      </section>

                  {/* ================= MENU SECTION ================= */}
      <section id="menu" className="bg-cream py-16 md:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-4">Our Menu</h2>
            <div className="h-[1px] w-24 bg-terracotta mx-auto"></div>
            <p className="text-muted mt-4 text-sm md:text-base">Freshly prepared, every single day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* 1. Starters & Fast Food */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Starters </h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/menu-fries.jpg" alt="Starters" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">French Fries</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Burger</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Pizza</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Fried Chicken</li>
                </ul>
              </div>
            </div>

            {/* 2. Soups */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Soups</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/mushroom-soup.jpg" alt="Soups" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mushroom Soup</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Veg Soup</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chicken Soup</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Nandu Soup</li>
                </ul>
              </div>
            </div>

            {/* 3. Egg Recipes */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Egg Recipes</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/egg-items.jpg" alt="Egg" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Egg Kaima</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Egg Gravy</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Egg Poriyal</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Boiled Egg</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Half Boil</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Omlet</li>
                </ul>
              </div>
            </div>

            {/* 4. Briyani & Rice */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Briyani & Rice</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/menu-briyani.jpg" alt="Briyani" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chicken Briyani</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mutton Briyani</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Fried Rice</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Noodles</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Special Curd Rice</li>
                </ul>
              </div>
            </div>

            {/* 5. Roll Items */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Roll Items</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/roll.jpg" alt="Rolls" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chicken Roll</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mushroom Roll</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Cauliflower Roll</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Paneer Roll</li>
                  
                </ul>
              </div>
            </div>

            {/* 6. Rice + Noodles Combo */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Rice + Noodles</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/chicken-rice-noodles.jpg" alt="Combo" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chicken Rice & Noodles</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Egg Rice & Noodles</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Veg Rice & Noodles</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Garlic Rice & Noodles</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Schezwan Rice & Noodles</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Zeera Rice & Noodles</li>
                </ul>
              </div>
            </div>

            {/* 7. Veg Dry & Gravy */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Veg 65'S</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/veg-gravy.jpg" alt="Veg Gravy" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Cauliflower Chilli</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mushroom Chilli</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Babycorn Chilli</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Paneer Manchuriyan</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Paneer Garlic Manchuriyan</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Hot Pepper Dry (Mushroom/Cauliflower/
                    Paneer/Babycorn)</li>
                </ul>
              </div>
            </div>

            {/* 8. Gravy Items */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase"> Gravy Items</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/chettinadu-chicken.jpg" alt="Gravy" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chettinadu Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Pepper Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Garlic Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Ginger Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Butter Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Pallipalayam Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Kadaai Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Pachamilagai Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Nandu Gravy</li>
                </ul>
              </div>
            </div>

            {/* 9.Dry Items */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Dry Items</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/dry-chicken.jpg" alt="Dry" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mothi Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Malabar Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Bangalore Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Lollipop Chicken - 5pcs</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Maharani Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Hot Pepper Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Schezwani Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chicken 65</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Chilli Chicken</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Ghee Podi Chicken</li>
                </ul>
              </div>
            </div>

            {/* 10. Coffee & Tea */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Coffee & Tea</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/coffee.jpg" alt="Coffee" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Coffee</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Black Coffee</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Lemon Tea</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Green Tea</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Tea</li>
                </ul>
              </div>
            </div>

            {/* 11. Milk Shakes & Mojitos */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Shakes & Mojitos</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/mojito.jpg" alt="Mojito" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Milk Shakes (Vanilla/Strawberry/Mango/
                    Butterscotch/Chocolate)
                  </li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mint Mojito</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Blue Lagoon</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Mango / Strawberry Mojito</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Blackcurrant Mojito</li>
                </ul>
              </div>
            </div>

            {/* 12. Fresh Juices */}
            <div className="bg-white border border-border rounded-xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 border-b-2 border-terracotta pb-2">
                <h3 className="text-2xl font-serif text-charcoal uppercase">Fresh Juices</h3>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <img src="/images/menu-juice.jpg" alt="Juice" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md flex-shrink-0" />
                <ul className="space-y-2 flex-grow pt-2">
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Seasonal Fresh Juices</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Pomegranate Juice</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Orange Juice</li>
                  <li className="text-sm md:text-base font-serif text-gray-700 border-b border-gray-100 pb-1">Sweet Lime Juice</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>



                 {/* ================= GALLERY SECTION ================= */}
      <section id="gallery" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">Gallery</h2>
            <div className="h-[1px] w-24 bg-terracotta mx-auto"></div>
            <p className="text-muted mt-4 text-sm md:text-base">A glimpse into our restaurant</p>
          </div>

          {/* Grid for 5 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Image 1 */}
            <div className="relative h-64 md:h-80 bg-[#F7F4EF] border border-border overflow-hidden rounded-xl shadow-sm p-2">
               <img src="/images/gallery-1.jpg" alt="Annai Grand Opening" className="w-full h-full object-contain" />
            </div>

            {/* Image 2 */}
            <div className="relative h-64 md:h-80 bg-[#E5E0D8] border border-border overflow-hidden rounded-xl shadow-sm group">
               <img src="/images/gallery-2.jpg" alt="Annai Grand Opening" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Image 3 */}
            <div className="relative h-64 md:h-80 bg-[#E5E0D8] border border-border overflow-hidden rounded-xl shadow-sm group">
               <img src="/images/gallery-3.jpg" alt="Dining Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Image 4 */}
            <div className="relative h-64 md:h-80 bg-[#E5E0D8] border border-border overflow-hidden rounded-xl shadow-sm group">
               <img src="/images/gallery-4.jpg" alt="Garden Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Image 5 */}
            <div className="relative h-64 md:h-80 bg-[#E5E0D8] border border-border overflow-hidden rounded-xl shadow-sm group">
               <img src="/images/gallery-5.jpg" alt="Outdoor View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Empty box for grid balance (optional) */}
            <div className="hidden lg:flex items-center justify-center h-64 md:h-80 bg-cream border border-border rounded-xl">
                <a href="#contact" className="text-terracotta font-serif hover:underline">Visit Us Today</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="bg-cream py-16 md:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">Find Your Way</h2>
            <div className="h-[1px] w-24 bg-terracotta mx-auto"></div>
            <p className="text-muted mt-4 text-sm md:text-base">We'd love to host you. Walk-ins are always welcome.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-8 md:space-y-10">
              <div>
                <h3 className="text-xs tracking-[0.2em] text-terracotta uppercase font-semibold mb-3">Address</h3>
                <p className="text-base md:text-lg text-charcoal leading-relaxed font-serif">
                  Annai Family Restaurant,<br/>
                  OPP: Bank of Baroda,<br/>
                  Near Govt.Boys School Play Ground,
                  Pattaraimedu, Tiruchengode, Namakkal, Tamil Nadu 637209
                </p>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] text-terracotta uppercase font-semibold mb-3">Phone</h3>
                <p className="text-base md:text-lg text-charcoal font-serif">Saravanan: <a href="tel:9976259199" className="hover:text-terracotta transition-colors">9976259199</a></p>
                <p className="text-base md:text-lg text-charcoal font-serif mt-1">Balaji: <a href="tel:8072410238" className="hover:text-terracotta transition-colors">8072410238</a></p>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.2em] text-terracotta uppercase font-semibold mb-3">Hours</h3>
                <p className="text-base md:text-lg text-charcoal font-serif">Monday – Sunday</p>
                <p className="text-muted mt-1 text-sm md:text-base">11:00 AM – 11:00 PM</p>
              </div>
            </div>

            <div className="h-[300px] md:h-[400px] w-full border border-border p-1 md:p-2 bg-white shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.4894751411414!2d77.89430142028263!3d11.387514524971934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba961a323d7c711%3A0xf5f107a8e50f9d5b!2s9VQV%2B2Q%2C%20Pattaraimedu%2C%20Tiruchengode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1792428087012!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Annai Family Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}