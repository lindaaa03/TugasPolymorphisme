class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }
  infokapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
  }
}

class KapalPenumpang extends Kapal {
  constructor(nama, panjang, lebar, kapasitasPenumpang, kapasitasKendaraan) {
    super(nama, "Penumpang", panjang, lebar);
    this.kapasitasPenumpang = kapasitasPenumpang;
    this.kapasitasKendaraan = kapasitasKendaraan;
  }
  infokapal() {
    return `${super.infokapal()} Kapal ini memiliki kapasitas ${
      this.kapasitasPenumpang
    } orang dan ${this.kapasitasKendaraan} kendaraan.`;
  }
}

class KapalKargo extends Kapal {
  constructor(nama, panjang, lebar, kapasitasKargo) {
    super(nama, "Kargo", panjang, lebar);
    this.kapasitasKargo = kapasitasKargo;
  }
  infokapal() {
    return `${super.infokapal()} Kapal ini memiliki kapasitas kargo ${
      this.kapasitasKargo
    } ton.`;
  }
}

class KapalPesiar extends Kapal {
  constructor(nama, panjang, lebar, fasilitas) {
    super(nama, "Pesiar", panjang, lebar);
    this.fasilitas = fasilitas;
  }
  infokapal() {
    return `${super.infokapal()} Kapal ini dilengkapi dengan fasilitas: ${this.fasilitas.join(
      ", "
    )}.`;
  }
}

class KapalMewah extends KapalPesiar {
  constructor(nama, panjang, lebar, fasilitas, hargaSewa) {
    super(nama, panjang, lebar, fasilitas);
    this.hargaSewa = hargaSewa;
  }
  infokapal() {
    return `${super.infokapal()} Dapat disewa dengan harga ${
      this.hargaSewa
    } per hari.`;
  }
}

class KapalFerry extends KapalPenumpang {
  constructor(nama, panjang, lebar, kapasitasPenumpang, kapasitasKendaraan) {
    super(nama, panjang, lebar, kapasitasPenumpang, kapasitasKendaraan);
  }
  infokapal() {
    return `${super.infokapal()} Dirancang untuk mengangkut penumpang dan kendaraan dengan efisiensi tinggi.`;
  }
}

class Pesawat {
  constructor(nama, jenis, kapasitasPenumpang) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitasPenumpang = kapasitasPenumpang;
  }
  infoPesawat() {
    return `Pesawat ${this.nama} adalah jenis ${this.jenis} dengan kapasitas ${this.kapasitasPenumpang} penumpang.`;
  }
}

class PesawatKomersial extends Pesawat {
  constructor(nama, kapasitasPenumpang) {
    super(nama, "Komersial", kapasitasPenumpang);
  }
  infoPesawat() {
    return `${super.infoPesawat()} Cocok untuk penerbangan jarak jauh.`;
  }
}

class PesawatPribadi extends Pesawat {
  constructor(nama, kapasitasPenumpang, fasilitas) {
    super(nama, "Pribadi", kapasitasPenumpang);
    this.fasilitas = fasilitas;
  }
  infoPesawat() {
    return `${super.infoPesawat()} Fasilitas: ${this.fasilitas.join(", ")}.`;
  }
}

class Mobil {
  constructor(nama, jenis, kapasitasPenumpang) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitasPenumpang = kapasitasPenumpang;
  }
  infoMobil() {
    return `Mobil ${this.nama} adalah jenis ${this.jenis} dengan kapasitas ${this.kapasitasPenumpang} penumpang.`;
  }
}

class MobilSedan extends Mobil {
  constructor(nama, kapasitasPenumpang) {
    super(nama, "Sedan", kapasitasPenumpang);
  }
}

class MobilSport extends Mobil {
  constructor(nama, kapasitasPenumpang, kecepatanMaksimum) {
    super(nama, "Sport", kapasitasPenumpang);
    this.kecepatanMaksimum = kecepatanMaksimum;
  }
  infoMobil() {
    return `${super.infoMobil()} Kecepatan maksimum: ${
      this.kecepatanMaksimum
    } km/jam.`;
  }
}

class MobilSUV extends Mobil {
  constructor(nama, kapasitasPenumpang) {
    super(nama, "SUV", kapasitasPenumpang);
  }
}

class Truk {
  constructor(nama, jenis, kapasitasMuatan) {
    this.nama = nama;
    this.jenis = jenis;
    this.kapasitasMuatan = kapasitasMuatan;
  }
  infoTruk() {
    return `Truk ${this.nama} adalah jenis ${this.jenis} dengan kapasitas muatan ${this.kapasitasMuatan} ton.`;
  }
}

class TrukBerat extends Truk {
  constructor(nama, kapasitasMuatan) {
    super(nama, "Berat", kapasitasMuatan);
  }
}

class TrukBox extends Truk {
  constructor(nama, kapasitasMuatan, ukuranBox) {
    super(nama, "Box", kapasitasMuatan);
    this.ukuranBox = ukuranBox;
  }
  infoTruk() {
    return `${super.infoTruk()} Ukuran box: ${this.ukuranBox} m³.`;
  }
}

function tampilkanInfoTransportasi(transportasi) {
  if (transportasi instanceof Kapal) {
    console.log(transportasi.infokapal());
  } else if (transportasi instanceof Pesawat) {
    console.log(transportasi.infoPesawat());
  } else if (transportasi instanceof Mobil) {
    console.log(transportasi.infoMobil());
  } else if (transportasi instanceof Truk) {
    console.log(transportasi.infoTruk());
  }
}

const kapalFerry = new KapalFerry("Milik Linda Apriyani", 240, 32, 600, 400);
const kapalKargo = new KapalKargo(
  "Kargo Maersk Triple E Class",
  400,
  59,
  100000
);
const kapalPesiar = new KapalPesiar("Norwegian Bliss", 333, 41, [
  "Kolam Renang",
  "Restoran dan Bar",
]);
const kapalMewah = new KapalMewah(
  "Oceania Riviera",
  245,
  32,
  ["Spa", "Restoran Mewah"],
  20000
);

const pesawatKomersial = new PesawatKomersial("Boeing 737", 180);
const pesawatPribadi = new PesawatPribadi("Gulfstream G650", 14, [
  "WiFi",
  "Kursi Mewah",
]);

const mobilSedan = new MobilSedan("Toyota Camry", 5);
const mobilSport = new MobilSport("Ferrari F8", 2, 340);
const mobilSUV = new MobilSUV("Honda CR-V", 7);

const trukBerat = new TrukBerat("Hino 500", 10);
const trukBox = new TrukBox("Truk Box Isuzu", 5, 30);

const transportasiList = [
  kapalFerry,
  kapalKargo,
  kapalPesiar,
  kapalMewah,
  pesawatKomersial,
  pesawatPribadi,
  mobilSedan,
  mobilSport,
  mobilSUV,
  trukBerat,
  trukBox,
];

transportasiList.forEach(tampilkanInfoTransportasi);
