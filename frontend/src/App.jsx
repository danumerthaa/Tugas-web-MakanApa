import { useState } from 'react';

function App() {
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f7f9fa] text-[#333333]">
      <header className="bg-[#2e7d32] text-white py-[20px] px-[20px] sm:px-[40px] flex flex-col sm:flex-row justify-between items-center gap-[15px] sm:gap-0">
        <h1 className="m-0 text-[26px] font-bold">
          MakanApa <span className="hidden">🍲</span>
        </h1>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-col sm:flex-row m-0 p-0 gap-[10px] sm:gap-[15px] list-none w-full">
            <li>
              <button 
                onClick={() => setHalamanAktif('beranda')}
                className={`w-full block text-center font-bold py-[8px] px-[16px] border border-white rounded-[4px] cursor-pointer transition-colors ${halamanAktif === 'beranda' ? 'bg-white text-[#2e7d32]' : 'bg-transparent text-white hover:bg-white hover:text-[#2e7d32]'}`}
              >
                Beranda
              </button>
            </li>
            <li>
              <button 
                onClick={() => setHalamanAktif('daftar_menu')}
                className={`w-full block text-center font-bold py-[8px] px-[16px] border border-white rounded-[4px] cursor-pointer transition-colors ${halamanAktif === 'daftar_menu' ? 'bg-white text-[#2e7d32]' : 'bg-transparent text-white hover:bg-white hover:text-[#2e7d32]'}`}
              >
                Daftar Menu
              </button>
            </li>
            <li>
              <button 
                onClick={() => setHalamanAktif('tambah_menu')}
                className={`w-full block text-center font-bold py-[8px] px-[16px] border border-white rounded-[4px] cursor-pointer transition-colors ${halamanAktif === 'tambah_menu' ? 'bg-white text-[#2e7d32]' : 'bg-transparent text-white hover:bg-white hover:text-[#2e7d32]'}`}
              >
                Tambah Menu
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center p-[20px]">
        <div className="bg-white w-full max-w-[600px] p-[25px] border border-[#e1e4e8] rounded-[8px] box-border">
          
          {halamanAktif === 'beranda' && (
            <div className="text-center">
              <h2 className="text-[20px] text-[#2e7d32] mt-0 font-bold mb-4">Bingung mau MakanApa hari ini!?</h2>
              <p className="leading-[1.5] mb-6">Tenang!, Ayo acak menu sekarang!!</p>
              <img src="/miayam.jpg" alt="Ilustrasi Makanan" className="block mx-auto mb-6 rounded-[6px] max-h-[250px] w-full object-cover" />
              <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white border-none py-[10px] px-[20px] text-[16px] font-bold cursor-pointer rounded-[4px] w-full">
                Acak Menu Sekarang!
              </button>
            </div>
          )}

          {halamanAktif === 'daftar_menu' && (
            <div>
              <h2 className="text-[20px] text-center text-[#2e7d32] mt-0 font-bold mb-4">Daftar Menu Tersedia</h2>
              <p className="text-center leading-[1.5] mb-6">Berikut adalah daftar tempat makan yang akan diacak oleh sistem:</p>
              <input type="text" placeholder="Cari nama makanan..." className="w-full p-[10px] mt-[5px] mb-[15px] box-border border border-[#ccc] rounded-[4px]" />
              <table className="w-full border-collapse mt-[20px] mb-6">
                <thead>
                  <tr>
                    <th className="border-b border-[#ddd] p-[12px] text-left bg-[#f7f9fa] text-[#333]">No</th>
                    <th className="border-b border-[#ddd] p-[12px] text-left bg-[#f7f9fa] text-[#333]">Nama Makanan / Tempat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#ddd] p-[12px] text-left">1</td>
                    <td className="border-b border-[#ddd] p-[12px] text-left">Ayam Rempah Warisan</td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#ddd] p-[12px] text-left">2</td>
                    <td className="border-b border-[#ddd] p-[12px] text-left">Ayam Bagdhad</td>
                  </tr>
                </tbody>
              </table>
              <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white border-none py-[10px] px-[20px] text-[16px] font-bold cursor-pointer rounded-[4px] w-full">
                Acak Menu Sekarang
              </button>
            </div>
          )}

          {halamanAktif === 'tambah_menu' && (
            <div>
              <h2 className="text-[20px] text-center text-[#2e7d32] mt-0 font-bold mb-4">Tambah Tempat Makan</h2>
              <p className="text-center leading-[1.5] mb-6">Masukkan menu baru agar pilihan semakin beragam.</p>
              <form>
                <label className="font-bold text-[14px]">Nama Makanan / Restoran:</label>
                <input type="text" placeholder="Contoh: Sate Taichan Senayan" className="w-full p-[10px] mt-[5px] mb-[15px] box-border border border-[#ccc] rounded-[4px]" />
                <label className="font-bold text-[14px]">Kategori (opsional):</label>
                <input type="text" placeholder="Contoh: Berat, Ringan, Kuah" className="w-full p-[10px] mt-[5px] mb-[15px] box-border border border-[#ccc] rounded-[4px]" />
                <button type="button" className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white border-none py-[10px] px-[20px] text-[16px] font-bold cursor-pointer rounded-[4px] w-full mt-4">
                  Simpan Menu
                </button>
              </form>
            </div>
          )}

        </div>
      </main>

      <footer className="text-center text-[14px] text-[#777] py-[15px] bg-[#f7f9fa]">
        &copy; 2026 Putu Gede Danu Mertha Teja
      </footer>
      
    </div>
  );
}

export default App;