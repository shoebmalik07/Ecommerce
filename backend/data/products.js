const products = [
  {
  
    name: 'Quilted Zip-Front Jacket with Detachable Hood',
    image: '/images/Fur_lined_hood.jpg',
    description:
      'Fur-lined hood, Insert pockets, Hand wash, 100% nylon',
    brand: 'Burberry',
    category: 'women',
    price: 7500,
    countInStock: 28,
    rating: 5,
    numReviews: 21,
  },
  {

    name: 'Women Floral Print Lounge T-Shirt',
    image: '/images/female_img_3.jpg',
    description:
      'Kangaroo pockets, Machine wash cold, 74% cotton, 26% polyester',
    brand: 'Burberry',
    category: 'women',
    price: 12000,
    countInStock: 22,
    rating: 2.6,
    numReviews: 4,
  },
  {

    name: 'Zip Front High-Neck Jacket',
    image: '/images/Zip_Front_High_Neck_Jacket.jpg',
    description:
      'Fur-lined hood, Insert pockets, Hand wash, 100% polyester',
    brand: 'zara',
    category: 'women',
    price: 3300,
    countInStock: 8,
    rating: 3.8,
    numReviews: 24,
  },
  {

    name: 'Zip-Front Hooded Sweatshirt',
    image: '/images/Zip_Front_Hooded_Sweatshirt.jpg',
    description:
      'Fleece, Hand wash',
    brand: 'puma',
    category: 'women',
    price: 5200,
    countInStock: 8,
    rating: 3.8,
    numReviews: 14,
  },
  {

    name: 'CL Patina Crew-Neck Sweatshirt',
    image: '/images/CL_Patina_Crew_Neck_Sweatshirt.jpg',
    description:
      'Kangaroo pockets, Machine wash cold, 74% cotton, 26% polyester',
    brand: 'superdry',
    category: 'women',
    price: 9200,
    countInStock: 24,
    rating: 4.8,
    numReviews: 54,
  },
  {
    
    name: 'Print Crop Lounge Top',
    image: '/images/female_img_1.jpg',
    description:
    'Machine wash, 100% cotton, Loose Fit',
    brand: 'Gucci',
    category: 'women',
    price: 21000,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    
    name: 'Floral Print Flared Kurta',
    image: '/images/Floral_Print_Flared_Kurta.jpg',
    description:
    'Package contains: 1 kurta, Rayon, Machine wash, No Darts',
    brand: 'Brand Baaja Bride',
    category: 'women',
    price: 1000,
    countInStock: 8,
    rating: 2.8,
    numReviews: 12,
  },
  {
    
    name: 'Floral Print Round Neck Straight Kurta',
    image: '/images/Floral_Print_Round_Neck_Straight_Kurta.jpg',
    description:
    'Package contains: 1 kurta, Rayon, Machine wash, No Darts',
    brand: 'Brand Baaja Bride',
    category: 'women',
    price: 1500,
    countInStock: 8,
    rating: 3.8,
    numReviews: 12,
  },
  {
    
    name: 'Tie & Dye Crew-Neck Oversized T-shirt',
    image: '/images/Tie_&_Dye_Crew_Neck_Oversized_T-shirt.jpg',
    description:
    'Machine wash, 100% cotton, Loose Fit',
    brand: 'basic',
    category: 'women',
    price: 1600,
    countInStock: 20,
    rating: 3.8,
    numReviews: 1,
  },
  {
    
    name: 'Printed Crew-Neck Oversized T-shirt',
    image: '/images/Printed_Crew_Neck_Oversized_T_shirt.jpg',
    description:
    'Machine wash, 100% cotton, Loose Fit',
    brand: 'superdry',
    category: 'women',
    price: 3200,
    countInStock: 18,
    rating: 4.9,
    numReviews: 2,
  },
  {
    
    name: 'Crochet Detail Lightweight Top',
    image: '/images/female_img_2.jpg',
    description:
    'Machine wash, 100% cotton, Loose Fit',
    brand: 'Chanel',
    category: 'women',
    price: 43000,
    countInStock: 6,
    rating: 4.9,
    numReviews: 8,
  },
  {
    
    name: 'Cotton Crew-Neck T-shirt',
    image: '/images/Cotton_Crew_Neck_T_shirt.jpg',
    description:
    'Product color may slightly vary due to photographic lighting sources or your device settings. Model is 6ft and is wearing Size M.',
    brand: 'Supreme',
    category: 'men',
    price: 1500,
    countInStock: 25,
    rating: 4.2,
    numReviews: 5,
  },
  {
    
    name: 'Logo Applique Hoodie with Kangaroo Pocket',
    image: '/images/Logo_Applique_Hoodie_with_Kangaroo_Pocket.jpg',
    description:
    '77% cotton, 14% polyester, 9% recycled polyester fleece',
    brand: 'gap',
    category: 'men',
    price: 6600,
    countInStock: 25,
    rating: 4.2,
    numReviews: 25,
  },
  {
    
    name: 'Slim Fit Denim Jacket with Flap Pocket',
    image: '/images/Slim_Fit_Denim_Jacket_with_Flap_Pockets.jpg',
    description:
    'Slim Fit, Package contains: 1, jacket, Machine wash 100% Cotton',
    brand: 'high star',
    category: 'men',
    price: 6100,
    countInStock: 5,
    rating: 4.1,
    numReviews: 5,
  },
  {
    
    name: 'Superhero Printed Regular Fit T-shirt',
    image: '/images/Superhero_Printed_Regular_Fit_T_shirt.jpg',
    description:
    'Slim Fit, Package contains: 1, t-shirt, Machine wash 100% Cotton',
    brand: 'high star',
    category: 'men',
    price: 1700,
    countInStock: 5,
    rating: 2.1,
    numReviews: 5,
  },
  {
    
    name: 'Full Sleeves Slim Fit Shirt',
    image: '/images/DENNISLINGO.jpg',
    description:
    'Enhance your look by wearing this Casual Stylish Mens shirt, Team it with a pair of tapered denims Or Solid Chinos and Loafers for a fun Smart Casual look',
    brand: 'DENNISLINGO',
    category: 'men',
    price: 3100,
    countInStock: 5,
    rating: 4.9,
    numReviews: 25,
  },
  
  {
    
    name: 'Juventus Henley Neck Jersey',
    image: '/images/male_img_1.jpg',
    description:
    ' Full Sleeve Stylish Casual Hooded Sweatshirts',
    brand: 'Tom Ford',
    category: 'men',
    price: 16000,
    countInStock: 21,
    rating: 4.1,
    numReviews: 3,
  },
  {
    
    name: 'Slim Fit Hooded Sweatshirt',
    image: '/images/Slim_Fit_Hooded_Sweatshirt.jpg',
    description:
    'John Players Full Sleeve Stylish Casual Hooded Sweatshirts',
    brand: 'John Players',
    category: 'men',
    price: 6200,
    countInStock: 25,
    rating: 3.2,
    numReviews: 21,
  },
  {
    
    name: 'Mavericks Drake Tank Top',
    image: '/images/male_img_3.jpg',
    description:
    'Sleeveless Stylish Casual Hooded Sweatshirts',
    brand: 'Calvin Klein',
    category: 'men',
    price: 7500,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    
    name: 'Printed Polo Collar T-shirt',
    image: '/images/female_img_4.jpg',
    description:
    'Ausk Mens Solid Full Sleeve, Regular Fit ,Machine wash',
    brand: 'Chanel',
    category: 'women',
    price: 9500,
    countInStock: 0,
    rating: 4.2,
    numReviews: 5,
  },
  {
    
    name: 'Solid Collar Neck Polo T-shirt',
    image: '/images/Solid_Collar_Neck_Polo_T_shirt.jpg',
    description:  
    'Ausk Mens Solid Full Sleeve, Dark Green T-shirt ,Regular Fit ,Machine wash',
    brand: 'superDry',
    category: 'men',
    price: 6000,
    countInStock: 10,
    rating: 4.5,
    numReviews: 3,
  },
  {
    
    name: 'Striped Slim Fit Shirt',
    image: '/images/Striped_Slim_Fit_Shirt.jpg',
    description:
    'Fabric - 100% Premium Cotton, Pre-Washed for extremely soft finish and Guaranteed 0% Shrinkage Post Washing',
    brand: 'allen solly',
    category: 'men',
    price: 2500,
    countInStock: 12,
    rating: 3.2,
    numReviews: 1,
  },
  {
  
    name: 'Pack of 2 Round Neck T-Shirts',
    image: '/images/male_img_4.jpg',
    description:
    'Kangaroo pockets, Machine wash cold, 74% cotton, 26% polyester',
    brand: 'Urban Outfitters',
    category: 'men',
    price: 8500,
    countInStock: 42,
    rating: 4.4,
    numReviews: 2,
  },
  {
    
    name: 'Native Youth',
    image: '/images/male_img_2.jpg',
    description:
      'Machine wash, 100% cotton, Loose Fit',
    brand: 'Ralph Lauren',
    category: 'men',
    price: 6000,
    countInStock: 18,
    rating: 4.5,
    numReviews: 2,
  },
];

export default products;
// module.exports = products
