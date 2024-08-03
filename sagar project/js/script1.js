let listOfProducts = [
  {
    id: 1,
    title: "Acer",
    subTitle: `Acer Nitro 5 AN515-45 Gaming Laptop, AMD Ryzen 7 5800H (8-Core) | NVIDIA GeForce RTX 3060 Laptop Graphics |15.6" QHD 165Hz IPS Display | 16GB DDR4 | 256GB SSD | 1TB HDD| WiFi 6 | RGB Backlit Keyboard`,
    description: `Dominating Performance : Conquer games and tasks alike, powered by an AMD Ryzen 7 5800H Mobile Processor, run your most demanding apps all at once with lightning-fast responsiveness. Experience hyper-efficient battery life thanks to industry-leading technology that keeps you productive and entertained from anywhere.
    The NVIDIA GeForce RTX 3060 laptop GPU is powered by the award-winning Ampere architecture—NVIDIA’s 2nd gen RTX—with new Ray Tracing Cores, Tensor Cores, & streaming multiprocessors for the most realistic ray-traced graphics & cutting-edge AI features. The ultimate performance for gamers & creators.
    Made for Speed : Explore games in greater detail with the sharp visuals of a 15.6” FHD 1920 x 1080 IPS display with 144Hz refresh rate, improved screen-to-body ratio to 80% with narrow bezels. Its hard-edged sleek lines evoke the gaming spirit of the Acer Nitro 5. The Nitro 5 looks and feels like it will help you take control.
    Cooling Perfected : When heavy use requires an added boost, chill out with twin fans, Acer CoolBoost technology and quad exhaust port design. CoolBoost will also help monitor fan speed and increase when necessary to optimize total performance. Monitor and manage your system in real time with NitroSense, covering temperatures, fan speeds and more`,
    imageSrc: 'images1/lap-1.jpg',
    price: 69000,
    filePath: 'product acer.html',
    type: 'product'

  },
  {
    id: 2,
    title: "HP Chromebook",
    subTitle: `HP Chromebook x360 AMD 3015CE-4GB SDRAM/64GB eMMC Storage 14-inch (35.56 cm) Thin & Light 2-in-1 Laptop (Chrome OS/Backlit Keyboard/ AMD Radeon Graphics/Google Assistant/1.49 kg), 14a-cb0007AU`,
    description: `Google Assistant: Voice-Enabled Google Assistant built-in, work faster and smarter without lifting a finger or switching screens. Ask questions, set reminders, play videos, control your home, and more. Make Google do it. Audio features : Dual speakers
    Boots in Seconds: Powered by Chrome OS with automatic software updates so you'll always have the latest virus protection. It starts up in less than 10 seconds, stays fast throughout the day, and wonât slow down over time
    Touch Screen: Reach out and control your PC with just a touch. Pinch, zoom, tap, and swipe right from the screen
    Microsoft Office compatible: With access to Microsoft Word, Excel, and Powerpoint from the Google Play Store, you can be confident that your Chromebook will allow you to use the productivity software you need
    Hassle-free device: Secure updates in the background deliver new fixes and features and enhanced experiences.
    Processor: AMD 3015Ce (up to 2.3 GHz max boost clock, 4 MB L3 cache, 2 cores, 4 threads) with AMD Radeon Graphics`,
    imageSrc: 'images1/lap-2.jpg',
    price: 63900,
    filePath: 'product hp.html',
    type: 'product'
  },
  {
    id: 3,
    title: "Dell Gaming Laptop",
    subTitle: `Dell 15 (2021) I5-10200H Gaming Laptop, 8Gb RAM, 512Gb SSD, 15.6” (39.62 Cms) FHD 120Hz 250 Nits Display, NVIDIA GTX 1650 4GB Graphics, Win 10, Ascent Solid Color (G15 5510, D560452WIN9A)`,
    description: `Free upgrade to Windows 11 when available. Disclaimer-Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device
    Processor:10th Generation Intel Core i5-10200H (8MB Cache, up to 4.1 GHz, 4 cores), Memory & Storage:8GB, 8Gx1, DDR4, 2933MHz | 512GB M.2 PCIe NVMe Solid State Drive
    Display:15.6 inch FHD (1920 x 1080) 120Hz 250 nits WVA Anti- Glare LED Backlit Narrow Border Display
    Graphics:NVIDIA GeForce GTX 1650 4GB GDDR6 | Game Shift Technology
    Operating System & Software:Windows 10 Home Plus Single Language | McAfee Security Center 15 month subscription
    Keyboard & Battery: Orange Backlit keyboard | 3-Cell Battery, 56WHr| Laptop weight 2.4 Kg
    I/O Ports:1xUSB 3.2 Gen 1 port | 1x USB 2.0 ports | 1x HDMI 2.0 port | 1x SD-card slot | 1x RJ45 port | 1x headset port
    Others :Nahimic 3D audio | Intel Wi-Fi 6 2x2 (Gig+) | Bluetooth 5 |1Yr Premium Support: Onsite Service`,
    imageSrc: 'images1/lap-3.jpg',
    price: 86000,
    filePath: 'product dell gaming.html',
    type: 'product'
  },
  {
    id: 4,
    title: "Charger Dell",
    subTitle: `Dell Charger (2021) I5-10200H Gaming Laptop, 8Gb RAM, 512Gb SSD, 15.6” (39.62 Cms) FHD 120Hz 250 Nits Display, NVIDIA GTX 1650 4GB Graphics, Win 10, Ascent Solid Color (G15 5510, D560452WIN9A)`,
    description: `Free upgrade to Windows 11 when available. Disclaimer-Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device
    Processor:10th Generation Intel Core i5-10200H (8MB Cache, up to 4.1 GHz, 4 cores), Memory & Storage:8GB, 8Gx1, DDR4, 2933MHz | 512GB M.2 PCIe NVMe Solid State Drive
    Display:15.6 inch FHD (1920 x 1080) 120Hz 250 nits WVA Anti- Glare LED Backlit Narrow Border Display
    Graphics:NVIDIA GeForce GTX 1650 4GB GDDR6 | Game Shift Technology
    Operating System & Software:Windows 10 Home Plus Single Language | McAfee Security Center 15 month subscription
    Keyboard & Battery: Orange Backlit keyboard | 3-Cell Battery, 56WHr| Laptop weight 2.4 Kg
    I/O Ports:1xUSB 3.2 Gen 1 port | 1x USB 2.0 ports | 1x HDMI 2.0 port | 1x SD-card slot | 1x RJ45 port | 1x headset port
    Others :Nahimic 3D audio | Intel Wi-Fi 6 2x2 (Gig+) | Bluetooth 5 |1Yr Premium Support: Onsite Service`,
    imageSrc: 'images1/lap-3.jpg',
    price: 186000,
    filePath: 'product dell gaming.html',
    type: 'asses'
  },
]
let listOfAsses = listOfProducts.filter(item => item.type === "asses")
var cartVisible = false;
var cartItems = [];
// Check if there are any cart items stored in localStorage
var storedCartItems = localStorage.getItem("cartItems");
if (storedCartItems) {
    try {
        cartItems = JSON.parse(storedCartItems);
        if (!Array.isArray(cartItems)) {
            cartItems = [];
        }
    } catch (error) {
        cartItems = [];
    }
};
function saveCartItems() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// alert message
var alertQueue = []; // Queue to store the alert messages
function showAlert(message) {
    alertQueue.push(message); // Add the message to the queue

    if (!document.getElementById("alert").classList.contains("show")) {
        displayNextAlert();
    }
}
function displayNextAlert() {
    var alertElement = document.getElementById("alert");
    var alertMessage = document.getElementById("alert-message");

    if (alertQueue.length > 0) {
        var message = alertQueue.shift(); // Get the next message from the queue

        alertMessage.textContent = message;
        alertElement.classList.add("show");

        setTimeout(function () {
            alertElement.classList.remove("show");
            alertElement.classList.add("hide");

            setTimeout(function () {
                alertElement.classList.remove("hide");
                displayNextAlert(); // Display the next alert in the queue
            }, 300); // Delay before showing the next alert
        }, 3000); // Time for each alert to be displayed
    }
}
function addToCart(data) {
  let obj = listOfProducts.find(item => item.id === data);
  if(obj){
    showAlert("Added to cart successfully!");
    cartItems.push(obj);
    saveCartItems(); // Save cart items to localStorage
  }

}
function renderProducts(){
  let html = `        <div class="box">
  <a href="#" class="fas fa-heart"></a>
  <a href="%filePath%" class="fas fa-eye"></a>
  <img src="%imageSrc%" alt="">
  <h3>%title%</h3>
  <p>%subTitle%</p>
  <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
  </div>
  <span>₹%price%
  </span>
  <button onclick="addToCart(%pd%)" class="btn">add to cart</button>
</div>`;

  listOfProducts.forEach(item => {
    let newHTML = html.replace('%filePath%', item.filePath);
    newHTML = newHTML.replace('%imageSrc%', item.imageSrc);
    newHTML = newHTML.replace('%title%', item.title);
    newHTML = newHTML.replace('%subTitle%', item.subTitle);
    newHTML = newHTML.replace('%price%', item.price);
    newHTML = newHTML.replace('%pd%', item.id);
    document.getElementById('product-lists').insertAdjacentHTML('beforeend', newHTML);
  })
  
}
// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }
function renderAsses(){
  let html = `        <div class="box">
  <a href="#" class="fas fa-heart"></a>
  <a href="%filePath%" class="fas fa-eye"></a>
  <img src="%imageSrc%" alt="">
  <h3>%title%</h3>
  <p>%subTitle%</p>
  <div class="stars">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
  </div>
  <span>₹%price%
  </span>
  <button onclick="addToCart(%pd%)" class="btn">add to cart</button>
</div>`;

  listOfAsses.forEach(item => {
    let newHTML = html.replace('%filePath%', item.filePath);
    newHTML = newHTML.replace('%imageSrc%', item.imageSrc);
    newHTML = newHTML.replace('%title%', item.title);
    newHTML = newHTML.replace('%subTitle%', item.subTitle);
    newHTML = newHTML.replace('%price%', item.price);
    newHTML = newHTML.replace('%pd%', item.id);
    document.getElementById('product-asses-lists').insertAdjacentHTML('beforeend', newHTML);
  })
  
}
function addAllItemsToStorage(){
  let getAllStorageProducts = localStorage.getItem('listOfProducts')
  if(!getAllStorageProducts)
    localStorage.setItem('listOfProducts', JSON.stringify(listOfProducts))
}
function fadeOut(){
  // setInterval(loader, 3000);
  renderProducts();
  renderAsses();
  addAllItemsToStorage();
  
}

window.onload = fadeOut;