import { reactive } from 'vue'

export const store = reactive({
  cart: [],
  count: 0,
  addToCart(present) {
    this.cart.push(present);
    this.count++;
  },
  removeFromCart(present) {
    let index = this.cart.indexOf(present);
    this.cart.splice(index, 1);
    this.count--;
  },
  presents: [
    {
      id: 1,
      href: '/presents/1',
      name: 'Misscosy Set + Pant Bundle (4 Pieces) - Rose',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-rose-misscosy-334.jpg?v=1663355816&width=1426',
      imageAlt: 'Front view of set.',
      price: '$1 MD',
      inStock: true,
      size: 'Small',
      color: 'Rose',
      rating: 5,
      images: [
        {
          id: 1,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-rose-misscosy-334.jpg?v=1663355816&width=1426',
          alt: 'Angled front view of top.',
        },
        {
          id: 1,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-rose-misscosy-916.jpg?v=1663355821&width=1426',
          alt: 'Angled front view of top.',
        },
        {
          id: 1,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-rose-misscosy-489.jpg?v=1663355824&width=1426',
          alt: 'Angled back view of pants.',
        },
      ],
      colors: [
        { name: 'Rose', bgColor: 'bg-pink-300', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' }
      ],
      description: `
      Take your lazy Sunday style up a notch with this matching 4-piece bundle!

      Made from soft, stretchy boucle yarn, it includes a long-sleeve cardigan, cropped tank, high waist shorts, and high waist long pant.
      
      Plus, it's machine washable for easy care.
      `,
      details: [
        {
          name: 'Includes',
          items: [
            'A long-sleeve cardigan',
            'Cropped tank',
            'High waist shorts',
            'High waist long pant',
          ],
        },
        // More sections...
      ],
    },
    {
      id: 2,
      href: '/presents/2',
      name: 'Misscosy Set + Pant Bundle (4 Pieces) - Lavender',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-lavender-misscosy-207.jpg?v=1669157860&width=1426',
      imageAlt: 'Front view of set.',
      price: '$1 MD',
      inStock: true,
      size: 'Small',
      color: 'Rose',
      rating: 5,
      images: [
        {
          id: 1,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-lavender-misscosy-207.jpg?v=1669157860&width=1426',
          alt: 'Angled front view of top.',
        },
        {
          id: 2,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-lavender-misscosy-617.jpg?v=1669157865&width=1426',
          alt: 'Angled front view of top.',
        },
        {
          id: 3,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0437/7421/4304/products/set-pant-bundle-4-pieces-lavender-misscosy-425.jpg?v=1669157869&width=1426',
          alt: 'Angled back view of pants.',
        },
      ],
      colors: [
        { name: 'Rose', bgColor: 'bg-pink-300', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' }
      ],
      description: `
      Take your lazy Sunday style up a notch with this matching 4-piece bundle!

      Made from soft, stretchy boucle yarn, it includes a long-sleeve cardigan, cropped tank, high waist shorts, and high waist long pant.
      
      Plus, it's machine washable for easy care.
      `,
      details: [
        {
          name: 'Includes',
          items: [
            'A long-sleeve cardigan',
            'Cropped tank',
            'High waist shorts',
            'High waist long pant',
          ],
        },
        // More sections...
      ],
    },
    {
      id: 3,
      href: '/presents/3',
      name: '7 Cup Food Processor',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0083/9578/4282/products/ER_EmpireRed_KFP0719_first_1480x_crop_center.jpg?v=1662958589',
      imageAlt: 'Front view of set.',
      price: '$1 MD',
      inStock: true,
      size: '7 Cup',
      color: 'Empire Red',
      rating: 5,
      images: [
        {
          id: 1,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0083/9578/4282/products/ER_EmpireRed_KFP0719_first_1480x_crop_center.jpg?v=1662958589',
          alt: 'Angled front view of top.',
        },
        {
          id: 2,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0083/9578/4282/products/ER_KitchenAid-FoodProcessor-KFP0719-Empire-Red_660x_crop_center.jpg?v=1569394340',
          alt: 'Angled front view of top.',
        },
        {
          id: 3,
          name: 'Angled view',
          src: 'https://cdn.shopify.com/s/files/1/0083/9578/4282/products/KitchenAid-FoodPro-KFP0719-Acc-1_660x_crop_center.jpg?v=1569394342',
          alt: 'Angled back view of pants.',
        },
      ],
      colors: [
        { name: 'Rose', bgColor: 'bg-pink-300', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' }
      ],
      description: `
      Elevate your everyday meals with the 3 speed options and the ability to knead, chop, shred, slice, and puree everything from fresh veggies to cheeses, doughs, sauces, baby food, salsa and so much more. The snap-and-go, easy-clean work bowl features a twist-free, one-click assembly and latched lid. In addition to being easy to use, all of the accessories nest easily inside the 7 cup work bowl.
      `,
      details: [
        {
          name: 'Features',
          items: [
            'All-in-one storage solution - store all blades and discs directly in the bowl.',
            'Snap-and-go, easy-clean work bowl - easy twist-free, one-click bowl assembly and latched lid; Add warm water and 1-2 drops of dish soap in the leak-resistant bowl to quickly clean bowl and blades.',
            'Chop, shred, slice, puree and knead - everything from cucumbers to tomatoes, cheeses and more with the reversible slicing/shredding disc, thick slicing disc or multi-purpose blade. Knead pizza and bread dough with the dough blade.',
            'Reduce prep time with the 2-in-1 feed tube - to process a variety of ingredient shapes and sizes - tomatoes, cucumbers, potatoes and more.',
            'Dough blade makes light work of kneading - from kneading fresh pizza dough to your favorite breads, the additional dough blade does the heavy lifting.',
          ],
        },
        // More sections...
      ],
    },
  ],
})
