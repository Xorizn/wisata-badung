function renderEjs(res, req, templateName, data) {
  const { active, ...rest } = data;
  const _act = req.originalUrl.split('/')[1];

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

module.exports = {
  renderEjs,
  chunk,
  data_sekbid,
  data_galery,
};