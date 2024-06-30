
// membuat objeck literasi
let car = {
    // properti (variable)
    type: "Fiat",
    model: "500",
    color: "white",
    // method (function)
    start: function () {
        // kalo aksesnya masi di dala function yg sama pake this aja
        console.log("Ini adalah methode Start untuk mobil " + this.type) 
    },
    drive: function () {
        console.log("Ini adalah methode Drive")
    },
    brake: function () {
        console.log("Ini adalah methode Brake")
    },
    stop: function () {
        console.log("Ini adalah methode Stop")
    }
}

const mahasiswa = {
    name: "Ajeng",
    prodi: "Akuntansi",
    hobi: ["nonton", "belajar", "main"],
    alamat: {
        kota: "Bandung",
        jalan: "cililin"
    }
}

// function declaration
function newObject(name, prodi, hobi, alamat){
    let mahasiswa = {}
    mahasiswa.name = name;
    mahasiswa.prodi = prodi;
    mahasiswa.hobi = hobi;
    mahasiswa.alamat = alamat;
    return mahasiswa;

}

let mhs1 =  newObject("Ajeng", "Akuntansi", ["nonton", "belajar", "main"], {
    kota: "Bandung",
    jalan: "Ciliin"
});

let cars = ['Ferrari', 'D 1703 ADX'];
cars.push(mhs1);