console.log('no');
const storeData = [
    {
      name: "Everything I Want To Do Is Illegal Hardcover",
      price: "$27.61",
      description: "Joel Salatin and his family own and operate Polyface Farm in Virginia’s Shenandoah Valley. The farm produces pastured beef, pork, chicken, eggs, turkeys, rabbits, lamb and ducks, servicing roughly 6,000 families and 50 restaurants in the farm’s bioregion.",
      features: ["Logical Thinking", "tasty farm products without messing up our environment", "no importing off exotic plants and animals"],
      maps: 2017,
      photo: "https://images-na.ssl-images-amazon.com/images/I/51XYSR-K8CL._SX336_BO1,204,203,200_.jpg"
    },
    {
      name: "Refillable Pimple Popper",
      price: "$16.99",
      description: "The Official Pimple Popping Toy with Refillable Pimple Pus",
      features: ["Every Pop it Pal pimple popping toy comes with 16 pimples ready to be picked the minute you receive it.", "MOST SATISFYING stress relief toy. Ease worry, calm the mind, and discover a great fidget solution.", "Grab one for the PERFECT gift for the picker in your life. FREE, IMMEDIATE SHIPPING from the Pop it Pal."],
      maps: 2017,
      photo: "https://images-na.ssl-images-amazon.com/images/I/8182Mg3qtuL._SY355_.jpg"
    },
    {
      name: "From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen",
      price: "$39.99",
      description: "Looking for cookbooks with a little more personality? Welcome to tha Boss Dogg's Kitchen. The first cookbook and recipe book from Tha Dogg.",
      features: ["From Crook to Cook: Platinum Recipes from Tha Boss Dogg's Kitchen.", "You've seen Snoop Dogg work his culinary magic on VH1's Emmy-nominated Martha and Snoop's Potluck Dinner Party, and now Tha Dogg's up in your kitchen with his first cookbook."],
      maps: 2017,
      photo: "https://images-na.ssl-images-amazon.com/images/I/5160yyObJrL._SX417_BO1,204,203,200_.jpg"
    },
    {
      name: "Mini Fireshooter Magic Wrist",
      price: "$391.99",
      description: "Magic Wrist Device Shoots Fireballs from Your Empty Hands",
      features: ["Heat up your magic tricks! Based on the original viral smash-hit Pyro, Ellusionist has refined the Mini to make it easier to use, while packing in a host of new features!", "Less bulk. More fire. A smaller, sleeker and sexier magician MUST-HAVE that rivals anything you'd see in a James Bond movie.", "This is not a toy. This is a badass adult magician device. Tested for safety. Magicians have used flash paper in their acts for decades to get huge reactions!"],
      maps: 2017,
      photo: "https://images-na.ssl-images-amazon.com/images/I/51E8O4k9ALL.jpg"
    },
    {
      name: "The Zucker-Rug™️",
      price: "$89.99",
      description: "Thankfully Facebook has a close watch on every aspect of our lives except in the bathroom, until now. ",
      features: ["This revolutionary bathmat has moisture sensors to know when you shower.", "Sound recording for the sink", "It also has smell-o-vision for when you use the toilet - all reported back to Facebook!"],
      maps: 2017,
      photo: "https://790996.smushcdn.com/1544315/wp-content/uploads/2019/11/Zucker-Rugs-small.jpg?lossy=1&strip=1&webp=1"
    }
  ];
  
  //Sorry for the long image links, can't help it.

  function feature(features){
    return `
    <h4>Features</h4>
    <ul class="feature-list">
      ${features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    `
  }

  function storeTemplate(store){
    return `
    <div class="product">
      <img class="product-photo" src="${store.photo}">
      <h2 class="product-name">${store.name} <span class="price">(${store.price})</span></h2>
      <p><strong>${store.description}</strong></p>
      ${feature(store.features)}
    </div>
  `
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Weird Products (${storeData.length} Results)</h1>
    ${storeData.map(storeTemplate).join('')}
    <p class="footer">These ${storeData.length} were added recently. Check back soon for more updates.</p>
  `
