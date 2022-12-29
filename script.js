// let data = '{"id":"1", "name":"Ram", "description": "Developer"}';
// const newData = JSON.parse(data);

// console.log(newData.id);

// const newData1 = JSON.parse(dummyData);
// console.log(newData1.id);


// '{"results":[{"gender":"male","name":{"title":"Mr","first":"Danilo","last":"Paunović"},"location":{"street":{"number":8647,"name":"Milana Praizovića"},"city":"Titel","state":"Central Banat","country":"Serbia","postcode":81827,"coordinates":{"latitude":"63.2103","longitude":"-5.7728"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"danilo.paunovic@example.com","login":{"uuid":"281d8d1c-1278-44e2-ab5e-f537d075b358","username":"greenwolf959","password":"reload","salt":"hiBHr4kP","md5":"1228ebc60c0b3daf682cf47d41278c66","sha1":"4c7c0387433f437979d47fbc7c439c30b6d0d476","sha256":"ed7de6551a0597f8c9a9152a540db548a49d7865369d3dd21b5d8f7615424c15"},"dob":{"date":"1964-12-29T04:59:08.646Z","age":58},"registered":{"date":"2006-06-01T11:11:44.676Z","age":16},"phone":"030-4372-353","cell":"066-5136-983","id":{"name":"SID","value":"795541521"},"picture":{"large":"https://randomuser.me/api/portraits/men/45.jpg","medium":"https://randomuser.me/api/portraits/med/men/45.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/45.jpg"},"nat":"RS"}],"info":{"seed":"2851491eef779305","results":1,"page":1,"version":"1.4"}}';

let data = [
    {id:1, img:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name:"Shoes", price:1000, rating:3.5, inStock:true},
    {id:2, img:"https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ,name:"Pen", price:10, rating:2.5, inStock:false},
    {id:3, img:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", name:"Mobile", price:10000, rating:4, inStock:true},
    {id:4, img:"https://media.istockphoto.com/id/1364822585/photo/creative-flat-lay-of-workspace-desk-notepad-on-wooden-background.jpg?s=612x612&w=is&k=20&c=Q-f24XTLK3F_VLRmAkR2KQ0UdZMAqJuRJNRfJ-BrJ98=", name:"Paper", price:1, rating:1.5, inStock:false},
    {id:5, img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", name:"Laptop", price:100000, rating:5, inStock:true},
];

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

let products = document.getElementById("products");
let sortPriceInc = document.getElementById("sortPriceInc");
let sortPriceDec = document.getElementById("sortPriceDec");
let showStocksBtn = document.getElementById("showStocksBtn");

sortPriceInc.addEventListener("click",sortIncreasing);
sortPriceDec.addEventListener("click",sortDecreasing);
showStocksBtn.addEventListener("click", showStocks);
searchBtn.addEventListener("click", searchItem);

let id = document.getElementById("Id");
let image = document.getElementById("Image");
let name = document.getElementById("Name");
let price = document.getElementById("Price");
let rating = document.getElementById("Rating");
let stock = document.getElementById("Stock");

function loadData(data) {
    products.innerHTML="";
    data.map((item) => {
        let row = document.createElement("tr");
        row.innerHTML=`
          <td>  ${item.id} <td>
           <td> <img src="${item.img}" height="80" width="100"  alt=""/> <td>
           <td> ${item.name} <td>
           <td> ${item.price} <td>
           <td> ${item.rating} <td>
           <td> ${item.inStock ? "In Stock": "Out of Stock"}<td> `
        products.append(row);

    })
}

loadData(data);

function sortIncreasing(){
    let increasingData = data.sort((a,b) => {
        if(a.price < b.price) return -1;
        else if(a.price > b.price) return 1;
        else return 0;
    })
    loadData(increasingData);
}

function sortDecreasing(){
    let decreasingData = data.sort((a,b) => {
        if(a.price < b.price) return 1;
        else if(a.price > b.price) return -1;
        else return 0;
    })
    loadData(decreasingData);
}

function showStocks(){
    let inStocksData = data.filter((item) => {
        console.log(item.inStock);
        return item.inStock;
    })
    loadData(inStocksData);
}

function searchItem(){
    let s = searchInput.value;
    let matchedItems = data.filter(item => {
        return item.name.toLowerCase().includes(s.toLowerCase());
    }) 
    loadData(matchedItems);
}
