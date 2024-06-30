const products = [
    {
        id: 1,
        nama: "laptop",
        Image: "https://tse4.mm.bing.net/th?id=OIP.mMgywNDrD-Qwe846MwHD3AHaD_&pid=Api&P=0&h=180",
        price: "Rp. 8000.000"
    },
    {
        id: 2,
        nama: "laptop",
        Image: "https://tse3.mm.bing.net/th?id=OIP.ysAtVUSVgu57S2fXl5slFQHaE9&pid=Api&P=0&h=180",
        price: "Rp. 6000.000"
    },
    {
        id: 3,
        nama: "laptop",
        Image: "https://tse3.mm.bing.net/th?id=OIP.9znJvLlECQ-emykoT1fX1AHaGk&pid=Api&P=0&h=180",
        price: "Rp. 5000.000"
    },
    {
        id: 4,
        nama: "laptop",
        Image: "https://tse3.mm.bing.net/th?id=OIP.J2ERwGU_nYDVU041IPHS3wHaGT&pid=Api&P=0&h=180",
        price: "Rp. 7000.000"
    },
    {
        id: 5,
        nama: "laptop",
        Image: "https://tse1.mm.bing.net/th?id=OIP.XzbjH1QwBRtfGqg_Uf10hgHaGj&pid=Api&P=0&h=180",
        price: "Rp. 10.000.000"
    }
]

products.forEach((products) => {
    document.write(`
            <figure>
                <img src= ${products.Image} alt="gambar laptop">
                <figcaption>
                    <h1>${products.nama}</h1>
                    <h2>${products.price}</h2>
                    <button onclick="confirm('Apakah anda yakin membeli produk ini?')">Beli Sekarang</button>
                    <button onclick ="alert('anda menyukai produk ini')">Like</button>
                    <button onclick = "prompt('berikan ulasan anda mengenai produk ini')">Komentar</button>
                </figcaption>
            </figure>
        `)
})
   
