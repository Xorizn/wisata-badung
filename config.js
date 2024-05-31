function renderEjs(res, req, templateName, data) {
  const { active, ...rest } = data;
  const _act = req.originalUrl.split("/")[1];

  const newData = { active: _act, ...rest };
  res.render(templateName, newData);
}
function chunk(array, size) {
  return array.reduce((chunks, element, index) => {
    if (index % size === 0) {
      chunks.push([element]);
    } else {
      chunks[chunks.length - 1].push(element);
    }
    return chunks;
  }, []);
}

const data_sekbid = {
  1: {
    anggota: ["fadil", "made", "dilan"],
    foto: ["", "", ""],
    visi_misi: ["blabla", "blabla"],
  },
  2: {
    anggota: ["fadil", "made", "dilan"],
    foto: ["", "", ""],
    visi_misi: ["blabla", "blabla"],
  },
  3: {
    anggota: ["fadil", "made", "dilan"],
    foto: ["", "", ""],
    visi_misi: ["blabla", "blabla"],
  },
  4: {
    anggota: ["fadil", "made", "dilan"],
    foto: ["", "", ""],
    visi_misi: ["blabla", "blabla"],
  },
};

const data_galery = [
  {
    image:
      "https://images.unsplash.com/photo-1678704545122-ae40f39f8ed1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "GWK",
  },
  {
    image:
      "https://images.unsplash.com/photo-1708935077487-17b873f91428?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "GWK",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544096259-b9cb279f67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a3V0YXxlbnwwfHwwfHx8MA%3D%3D",
    nama: "Kuta",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551008475-4533d141425b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Kuta",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592193771842-4ba215221444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Kuta",
  },
  {
    image:
      "https://www.rentalmobilbali.net/wp-content/uploads/2021/03/Air-Terjun-Nungnung-Feature-Image.jpg",
    nama: "Air Terjun Nung Nung",
  },
  {
    image:
      "https://images.unsplash.com/photo-1700512825795-2ca409433399?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1667752485851-a31111296a1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MS4lMDlQdXJhJTIwVWx1d2F0dXxlbnwwfHwwfHx8MA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590767633205-1c235491a1b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596273214323-a8486cce7c9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604842937136-1648761a6256?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612013581566-21878c8d39a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576478198149-2011c15b172e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Pantai Jimbaran",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582551145495-ae6ba5c11013?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Uluwatu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573232211028-7e71e753efdb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Canggu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1705197427048-a6245a3ccf6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "I Gusti Ngurah Rai Bali International Airport",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591449036230-d6488a59a19f?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Water Blow",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592065289359-7f20aec44239?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Canggu",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574966297599-f2cfa1864a8c?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nama: "Green Bowl Beach",
  },
];

const penginapan = [
  {
    nama: "The Apurva Kempinski Bali",
    desc: "The Apurva Kempinski Bali adalah akomodasi di lokasi yang baik, tepatnya berada di Nusa Dua Beach.  Lokasi hotel sangat strategis karena hanya berjarak 10,57 km dengan Bandar Udara Internasional Ngurah Rai (DPS).  Dari Benoa Harbour, akomodasi ini hanya berjarak sekitar 9,25 km.  Selain letaknya yang strategis, The Apurva Kempinski Bali juga merupakan akomodasi dekat Museum Bali berjarak sekitar 19,04 km dan Taman Werdhi Budaya Art Center berjarak sekitar 19,33 km..",
    image: [
      "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20019601-ca9412f3959a40d357077c60d6b85789.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67749940-3963x2973-FIT_AND_TRIM-990ab9dd71e762c7ec874bdbadfa3e01.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67749940-3408x2640-FIT_AND_TRIM-6efe2dde24ac228e7b38af79a7658c15.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
    ],
    rating: "4.8",
    price: "5.500.000",
    map: "Jalan Raya Nusa Dua Selatan, Sawangan, Nusa Dua, Bali, Nusa Dua, Nusa Dua Beach, Bali, Indonesia, 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.547099003369!2d115.21300307579702!3d-8.828546490357086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25cc0e01a2dfb%3A0x486d1b655b87ed9c!2sThe%20Apurva%20Kempinski%20Bali!5e0!3m2!1sid!2sid!4v1717153411732!5m2!1sid!2sid",
  },
  {
    nama: "Brits Hotel Legian",
    desc: " Brits Hotel Legian merupakan hotel rekomendasi untuk Anda, seorang backpacker yang tak hanya mengutamakan bujet, tapi juga kenyamanan saat beristirahat setelah menempuh petualangan seharian penuh.Bagi Anda yang menginginkan kualitas pelayanan oke dengan harga yang ramah di kantong, Brits Hotel Legian adalah pilihan yang tepat. Karena meski murah, akomodasi ini menyediakan fasilitas memadai dan pelayanan yang tetap terjaga mutunya.Brits Hotel Legian memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega.Brits Hotel Legian adalah tempat bermalam yang tepat bagi Anda yang berlibur bersama keluarga. Nikmati segala fasilitas hiburan untuk Anda dan keluarga.hotel ini adalah pilihan tepat bagi Anda dan pasangan yang ingin menikmati liburan romantis. Dapatkan pengalaman yang penuh kesan bersama pasangan dengan menginap di Brits Hotel Legian.Pengalaman menginap Anda tak akan terlupakan berkat pelayanan istimewa yang disertai oleh berbagai fasilitas pendukung untuk kenyamanan Anda.Pusat kebugaran menjadi salah satu fasilitas yang wajib Anda coba saat menginap di tempat ini.Tersedia kolam renang untuk Anda bersantai sendiri maupun bersama teman dan keluarga.Manjakan diri Anda dengan menikmati fasilitas spa yang memberikan harga dan kualitas pelayanan terbaik.Resepsionis siap 24 jam untuk melayani proses check-in, check-out dan kebutuhan Anda yang lain. Jangan ragu untuk menghubungi resepsionis, kami siap melayani Anda.Terdapat restoran yang menyajikan menu lezat ala Brits Hotel Legian khusus untuk Anda.WiFi tersedia di seluruh area publik properti untuk membantu Anda tetap terhubung dengan keluarga dan teman.Brits Hotel Legian adalah akomodasi dengan fasilitas baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.Nikmati pelayanan mewah dan pengalaman tak terlupakan ala Brits Hotel Legian selama Anda menginap di sini. ",
    image: [
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20024643-a7ad4669ef0ce58cb88c00d9ba2e5d30.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20024643-244ebd8ee0f2aef580b6628cf4715c3b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20024643-abaa328b57c28c005a4953c07e12b703.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
    ],
    rating: "4.3",
    price: "444.215",
    map: "Jl. Sunset Road No 150 Legian Bali , Legian, Kuta, Bali, Indonesia, 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.944071529561!2d115.17321727579514!3d-8.69686148860566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246d9c3be0f21%3A0x416720ecfb30f58!2sBrits%20Hotel%20Legian!5e0!3m2!1sid!2sid!4v1717153592219!5m2!1sid!2sid",
  },
  {
    nama: "Fashion Hotel Legian",
    desc: " Fashion Hotel Legian merupakan hotel rekomendasi untuk Anda, seorang backpacker yang tak hanya mengutamakan bujet, tapi juga kenyamanan saat beristirahat setelah menempuh petualangan seharian penuh.Fashion Hotel Legian memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega.hotel ini adalah pilihan tepat bagi Anda dan pasangan yang ingin menikmati liburan romantis. Dapatkan pengalaman yang penuh kesan bersama pasangan dengan menginap di Fashion Hotel Legian.Jika Anda berniat menginap dalam jangka waktu yang lama, Fashion Hotel Legian adalah pilihan tepat. Berbagai fasilitas yang tersedia dan kualitas pelayanan yang baik akan membuat Anda merasa sedang berada di rumah sendiri.Menikmati perjalanan sendiri adalah hal yang menyenangkan. Untuk menginap, Fashion Hotel Legian adalah pilihan pas bagi Anda yang membutuhkan waktu sendiri setelah puas berkeliling kota.Pengalaman menginap Anda tak akan terlupakan berkat pelayanan istimewa yang disertai oleh berbagai fasilitas pendukung untuk kenyamanan Anda.Tersedia kolam renang untuk Anda bersantai sendiri maupun bersama teman dan keluarga.Resepsionis siap 24 jam untuk melayani proses check-in, check-out dan kebutuhan Anda yang lain. Jangan ragu untuk menghubungi resepsionis, kami siap melayani Anda.Terdapat restoran yang menyajikan menu lezat ala Fashion Hotel Legian khusus untuk Anda.WiFi tersedia di seluruh area publik properti untuk membantu Anda tetap terhubung dengan keluarga dan teman.Fashion Hotel Legian adalah akomodasi dengan fasilitas baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.Pengalaman berkesan dan tak terlupakan akan Anda dapatkan selama menginap di hotel Fashion Hotel Legian. ",
    image: [
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10000886-1d9f0932f983b93f4a65533cd92e6138.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10000886-032e0fa215136bde74c3a3f6bee5780b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10000886-00ac20d6a61361166c0ba2f299f5b0e0.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
    ],
    rating: "4.2",
    price: "490.909",
    map: "Jl Raya Legian No. 121 Kuta, Legian, Kuta, Bali, Indonesia, 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.768412033479!2d115.17095367579545!3d-8.713528488825746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246c77acd9407%3A0x72cd716a5a5c28c8!2sFashion%20Hotel%20Legian!5e0!3m2!1sid!2sid!4v1717153738675!5m2!1sid!2sid",
  },
  {
    nama: "The Kanjeng Hotel Kuta",
    desc: "The Kanjeng Hotel Kuta adalah hotel dekat bandara Bandar Udara Internasional Ngurah Rai (DPS) dan merupakan pilihan tepat untuk bermalam sambil menunggu jadwal penerbangan berikutnya. Dapatkan tempat untuk istirahat yang nyaman di tengah persinggahan sementara Anda.The Kanjeng Hotel Kuta memiliki segala fasilitas penunjang bisnis untuk Anda dan kolega.Pelayanan memuaskan serta fasilitas hotel yang memadai akan membuat Anda nyaman berada di The Kanjeng Hotel Kuta.Terdapat restoran yang menyajikan menu lezat ala The Kanjeng Hotel Kuta khusus untuk Anda.WiFi tersedia di seluruh area publik properti untuk membantu Anda tetap terhubung dengan keluarga dan teman.Dengan fasilitas yang memadai, The Kanjeng Hotel Kuta menjadi pilihan yang tepat untuk menginap. ",
    image: [
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20055326-5337730414056a8f9569d518fb62fe9c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20055326-f8718e46445a2458c5df74260ec0e74f.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20055326-83bcfe8acc577513d208cb18fae9c50c.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
    ],
    rating: "3.7",
    price: "375.758",
    map: "Jalan Dewi Sartika No. 3 Kuta, Tuban, Kuta, Bali, Indonesia, 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.696219062302!2d115.16057711378194!3d-8.736250325811376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2441f2a95a6d7%3A0xcfb57b58552b30b7!2sThe%20Kanjeng%20Hotel%20Kuta!5e0!3m2!1sid!2sid!4v1717153902209!5m2!1sid!2sid",
  },
  {
    nama: "YELLO Hotel Kuta Beachwalk Bali",
    desc: " YELLO Hotel Kuta Beachwalk Bali merupakan hotel rekomendasi untuk Anda, seorang backpacker yang tak hanya mengutamakan bujet, tapi juga kenyamanan saat beristirahat setelah menempuh petualangan seharian penuh.Bagi Anda yang menginginkan kualitas pelayanan oke dengan harga yang ramah di kantong, YELLO Hotel Kuta Beachwalk Bali adalah pilihan yang tepat. Karena meski murah, akomodasi ini menyediakan fasilitas memadai dan pelayanan yang tetap terjaga mutunya.Anda gemar berbelanja? Jangan ragu untuk menginap di YELLO Hotel Kuta Beachwalk Bali. Lokasi yang strategis dan dekat berbagai tempat perbelanjaan akan sangat memanjakan Anda saat menginap di hotel ini.Pelayanan memuaskan serta fasilitas hotel yang memadai akan membuat Anda nyaman berada di YELLO Hotel Kuta Beachwalk Bali.Resepsionis siap 24 jam untuk melayani proses check-in, check-out dan kebutuhan Anda yang lain. Jangan ragu untuk menghubungi resepsionis, kami siap melayani Anda.Terdapat restoran yang menyajikan menu lezat ala YELLO Hotel Kuta Beachwalk Bali khusus untuk Anda.WiFi tersedia di seluruh area publik properti untuk membantu Anda tetap terhubung dengan keluarga dan teman.YELLO Hotel Kuta Beachwalk Bali adalah akomodasi dengan fasilitas baik dan kualitas pelayanan memuaskan menurut sebagian besar tamu.Dengan fasilitas yang memadai, YELLO Hotel Kuta Beachwalk Bali menjadi pilihan yang tepat untuk menginap. ",
    image: [
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67808297-f8ff76eb9444a6f95b58f14ce05e2625.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67808297-a8129cfbf7a18c4723434ccd74dba8e3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
      "https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20048314-c323e5f8db53a4ccfecd2cbc016bd2ff.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
    ],
    rating: "4.6",
    price: "1.115.702",
    map: "Jalan Pantai Kuta, Kuta, Badung, Bali, Indonesia, 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.873734899661!2d115.16867416645668!3d-8.715658964676583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247f1fc390e7f%3A0xae0b10d93450dfb0!2sYello%20Hotel%20Kuta%20Beachwalk!5e0!3m2!1sid!2sid!4v1717154114055!5m2!1sid!2sid",
  },
];

const restoran = [
  {
    nama: "Daily Social Bali",
    map: "Sheraton Bali Kuta Resort, Jl. Pantai Kuta 2nd Floor, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14053.82669549589!2d115.16057202085372!3d-8.71793536671454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247af2754e895%3A0x4530fdd47c889aeb!2sDaily%20Social%20Bali!5e0!3m2!1sid!2sid!4v1717158072059!5m2!1sid!2sid",
    desc: "Terletak di Jalan Pantai Kuta, tempat makan di tepi kolam renang ini menyajikan pemandangan megah Pantai Kuta yang terkenal dan mataharinya terbenam. Daily Social Bali adalah tempat berkumpul yang sempurna untuk merayakan acara-acara khusus bersama keluarga, teman, jaringan bisnis, dan komunitas, dengan enam hub interaktif yang beragam mulai dari Asian Comfort hingga Seafood Bar.",
    image: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/9c/72/b1/daily-social-bali-sunday.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/7d/15/daily-social-seafood.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/79/7d/07/daily-social-energized.jpg?w=1200&h=-1&s=1",
    ],
    rating: "4.8",
  },
  {
    nama: "Bondi Restaurant",
    map: "Jl. Pantai Berawa No.99, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43350.21809696016!2d115.13427627451462!3d-8.698167396789817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24714e81c36f9%3A0xf2c529869626d87c!2sBondi%20Restaurant!5e0!3m2!1sid!2sid!4v1717157819512!5m2!1sid!2sid",
    desc: "Restoran Bondi menawarkan hidangan internasional modern dengan bahan-bahan segar untuk menciptakan hidangan yang menggugah selera dari pagi hingga malam. Kunjungi display showcase yang menampilkan roti segar yang dipanggang setiap hari, croissant, donat, brownies, kue kering, cruffin, kue, tartlet, dan banyak lagi. Pilihan bersantap sepanjang hari termasuk salad segar, bagian grazing yang lengkap, pizza kayu bakar yang luar biasa, dan berbagai pilihan platter yang dirancang untuk berbagi. Bondi berfokus pada kesegaran dan rasa, memanfaatkan bahan-bahan segar yang bersumber secara lokal jika memungkinkan.",
    image: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/31/e4/15/takes-too-long-to-think.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/96/ea/bb/bondi-bakehouse-bali.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/31/e4/b1/chef-s-signature-berawa.jpg?w=1200&h=-1&s=1",
    ],
    rating: "4.8",
  },

  {
    nama: "Tanah Liat Restaurant",
    map: "Renaissance Bali Nusa Dua Resort, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13261.92343155635!2d115.20570146380449!3d-8.805453211171704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24388fc99be93%3A0x86dc11302606d900!2sTanah%20Liat!5e0!3m2!1sid!2sid!4v1717157961992!5m2!1sid!2sid",
    desc: "Tanah Liat adalah sebuah atelier keramik dan lab memasak pada siang hari, yang berubah menjadi restoran bertema seni dan kerajinan pada malam hari, dengan fokus pada makanan eksperimental yang menonjolkan hidangan laut segar dan musiman serta masakan nabati yang bersumber dari Bali.",
    image: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/88/55/c2/tanah-liat.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/88/72/ef/fresh-beverages.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/88/72/23/fresh-beverages.jpg?w=1200&h=-1&s=1",
    ],
    rating: "4.7",
  },
  {
    nama: "Pondok Rasa",
    map: "Jalan Raya Kapal Lukluk.16, Kapal, Kec. Mengwi, Kabupaten ",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68839.95272214309!2d115.12407769366366!3d-8.556793952047219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2394d2f89c23d%3A0x35b6518846fa453f!2sPondok%20Rasa!5e0!3m2!1sid!2sid!4v1717157280082!5m2!1sid!2sid",
    desc: "Warung ini spesial masakan laut (seafood) bakar khas Jimbaran. Rasanya sangat enak, jauh lebih enak dari yang ada di pinggir pantai di daerah Jimbaran atau Kedonangan. Yang paling favorit adalah ikan bakar dan kerang bakar.Saat ini warungnya sedang direnovasi jadi agak berantakan, tapi tempat makannya di belakang sudah selesai dan cukup luas dan nyaman. Ada pemandangan sawah di belakang warungnya.Harganya agak mahal dibanding warung di dalam kota (semacam warung subak), tetapi sebanding dengan rasanya. Namun demikian, masih lebih murah dibanding di warung pinggir pantai daerah Jimbaran/Kedonganan.",
    image: [
      "https://media-cdn.tripadvisor.com/media/photo-s/04/d0/2d/f5/1-porsi-sate-cumi-bakar.jpg",
      "https://lh3.googleusercontent.com/p/AF1QipPLWYfYqejSJR0UXHFpKvNX7_jfA8W0zUGXu_5f=s680-w680-h510",
      "https://lh3.googleusercontent.com/p/AF1QipP5DtLrcKrN19aWGs9TFCODIxaIXmBqBvXYuYRi=s680-w680-h510",
    ],
    rating: "4.5",
  },
  {
    nama: "Roxy Restaurant & Bar",
    map: "Jl. Raya Uluwatu No.200X, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361",
    maplink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6422697051485!2d115.14947367579697!3d-8.819637190237678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25b6d23a5c42f%3A0xefa37f88f0455f58!2sRoxy%20Restaurant%20%26%20Bar!5e0!3m2!1sid!2sid!4v1717157734149!5m2!1sid!2sid",
    desc: "Selamat datang di The Roxy Gastro Pub & Shi Sha Lounge, di mana seni bersantap dan hiburan yang luar biasa menemukan tempat sempurna di surga pantai yang mempesona di Uluwatu, Bali. The Roxy lebih dari sekadar restoran dan bar; ini adalah perjalanan kuliner dan tujuan itu sendiri, menggabungkan kehangatan gastro pub klasik dengan daya tarik lounge Shi Sha. Filosofi inti kami berpusat pada keunggulan kuliner. Koki ahli dan koki selebriti kami di The Roxy berdedikasi untuk menyusun menu yang luas yang menggabungkan cita rasa global dengan esensi Bali. Dari hidangan pub gaya gourmet yang lezat hingga pizza artisanal dan hidangan fusi inovatif, menu kami adalah bukti dari hasrat kami terhadap gastronomi.",
    image: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e3/46/09/the-roxy-gastro-pub-shi.jpg?w=1000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e3/4d/d4/get-a-delicious-taste.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e3/4b/1b/taste-the-delights-of.jpg?w=1100&h=-1&s=1",
    ],
    rating: "4.2",
  },
];

module.exports = {
  restoran,
  penginapan,
  renderEjs,
  chunk,
  data_sekbid,
  data_galery,
};
