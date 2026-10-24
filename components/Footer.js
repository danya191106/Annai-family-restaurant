 export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif mb-4">Annai Family Restaurant</h3>
          <p className="text-sm text-gray-400">Good Food • Happy Family • Together Always</p>
        </div>
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 text-terracotta">Contact</h4>
          <p className="text-sm text-gray-400 mb-2">Annai Family Restaurant,<br />Pattaraimedu, Tiruchengode, Tamil Nadu 637209</p>
          <p className="text-sm text-gray-400">Saravanan: 9976259199</p>
          <p className="text-sm text-gray-400">Balaji: 8072410238</p>
        </div>
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 text-terracotta">Hours</h4>
          <p className="text-sm text-gray-400">Mon – Sun</p>
          <p className="text-sm text-gray-400">11:00 AM – 11:00 PM</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Annai Family Restaurant. All rights reserved.
      </div>
    </footer>
  );
}