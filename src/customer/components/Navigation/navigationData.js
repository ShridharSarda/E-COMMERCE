export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id: 'top', href: '/products/women/clothing/tops' },
              { name: 'Dresses', id: 'women_dress', href: '/products/women/clothing/women_dress' },
              { name: 'Women Jeans', id: 'women_jeans', href: '/products/women/clothing/women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli', href: '/products/women/clothing/lengha_choli' },
              { name: 'Sweaters', id: 'sweater', href: '/products/women/clothing/sweater' },
              { name: 'T-Shirts', id: 't-shirt', href: '/products/women/clothing/t-shirt' },
              { name: 'Jackets', id: 'jacket', href: '/products/women/clothing/jacket' },
              { name: 'Gouns', id: 'gouns', href: '/products/women/clothing/gouns' },
              { name: 'Sarees', id: 'saree', href: '/products/women/clothing/saree' },
              { name: 'Kurtas', id: 'kurtas', href: '/products/women/clothing/kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch', href: '/products/women/accessories/watch' },
              { name: 'Wallets', id: 'wallet', href: '/products/women/accessories/wallet' },
              { name: 'Bags', id: 'bag', href: '/products/women/accessories/bag' },
              { name: 'Sunglasses', id: 'sunglasse', href: '/products/women/accessories/sunglasse' },
              { name: 'Hats', id: 'hat', href: '/products/women/accessories/hat' },
              { name: 'Belts', id: 'belt', href: '/products/women/accessories/belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', id: 'full_nelson', href: '/products/brands/full_nelson' },
              { name: 'My Way', id: 'my_way', href: '/products/brands/my_way' },
              { name: 'Re-Arranged', id: 're_arranged', href: '/products/brands/re_arranged' },
              { name: 'Counterfeit', id: 'counterfeit', href: '/products/brands/counterfeit' },
              { name: 'Significant Other', id: 'significant_other', href: '/products/brands/significant_other' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            href: '/',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            href: '/',
            imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta', href: '/products/men/clothing/mens_kurta' },
              { name: 'Shirt', id: 'shirt', href: '/products/men/clothing/shirt' },
              { name: 'Men Jeans', id: 'men_jeans', href: '/products/men/clothing/men_jeans' },
              { name: 'Sweaters', id: 'sweater', href: '/products/men/clothing/sweater' },
              { name: 'T-Shirts', id: 't-shirt', href: '/products/men/clothing/t-shirt' },
              { name: 'Jackets', id: 'jacket', href: '/products/men/clothing/jacket' },
              { name: 'Activewear', id: 'activewear', href: '/products/men/clothing/activewear' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: 'watch', href: '/products/men/accessories/watch' },
              { name: 'Wallets', id: 'wallet', href: '/products/men/accessories/wallet' },
              { name: 'Bags', id: 'bag', href: '/products/men/accessories/bag' },
              { name: 'Sunglasses', id: 'sunglasses', href: '/products/men/accessories/sunglasses' },
              { name: 'Hats', id: 'hat', href: '/products/men/accessories/hat' },
              { name: 'Belts', id: 'belt', href: '/products/men/accessories/belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: 're_arranged', href: '/products/brands/re_arranged' },
              { name: 'Counterfeit', id: 'counterfeit', href: '/products/brands/counterfeit' },
              { name: 'Full Nelson', id: 'full_nelson', href: '/products/brands/full_nelson' },
              { name: 'My Way', id: 'my_way', href: '/products/brands/my_way' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/', href: '/company' },
      { name: 'Stores', id: '/', href: '/stores' },
    ],
  };