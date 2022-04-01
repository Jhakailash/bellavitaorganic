var allproductdata = [
    {
        id:1,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1644478556",
        pname:"Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
        offprice:2,
        price:249
    },
    {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_1024x1024.jpg?v=1645422258",
        pname:"Vitamin C-Glow Natural Face Wash With Coffee, Neem & Mint, Oil Control, Acne, Brightening & Glow, Men & Women - 100 ml",
        offprice:249,
        price:3
    },
    {
        id:3,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-02_800x.jpg?v=1646821188",
        pname:"NicoLips Lip Lightening Scrub For Dark, Dry, Chapped & Damaged Lips Unisex - 20 gm",
        offprice:450,
        price: 4
    },
    {
        id:4,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceWash-02_f9aa022d-5d4e-4703-b889-7c62aa59b206_800x.jpg?v=1646289818",
        pname:"EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wrinkles, For Men & Women 20 gm",
        offprice:325,
        price:5
    },
    {
        id:5,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-02_800x.jpg?v=1646987586",
        pname:"Vitamin C - Glow Natural Face Cream For Brightening & Glowing skin - 50ml",
        offprice:375,
        price:325
    },
    {
        id:6,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacePack-01_1024x1024.jpg?v=1643821948",
        pname:"Vitamin C - Glow Face Pack for Skin Brightening, Nourishment & Hydration - 100 gm",
        offprice:399,
        price:349,
    },
    {
        id:7,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-01_1024x1024.jpg?v=1645509341",
        pname:"Vitamin C-Glow Face Serum for Skin Brightening, Anti-Blemishes & Pigmentation - 30ML",
        offprice:375,
        price:349,
    },
    {
        id:8,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ChakraCleanseBodyWash-01_1024x1024.jpg?v=1644304969",
        pname:"Chakra Cleanse - Aura Boosting Natural Body Wash With Himalayan Rock Salt & Essential Oils - 300 ML",
        offprice: 299,
        price: 275,
    },
    {
        id:9,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/MAN-PERFUMES-02_800x.jpg?v=1646891590",
        pname:"DeoWhite Underarm Whitening Natural Roll On Deodorant For Women - 50 ml",
        offprice:399,
        price:199
    },
    {
        id:10,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/MAN-PERFUMES-02_800x.jpg?v=1646891590",
        pname:"Rose Glow Face Gel For Pore Minimising, Oil Control & Skin Brightening - 85 gm",
        offprice:325,
        price:299
    },
    {
        id:11,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteMen-02_800x.jpg?v=1646291439",
        pname:"Oil Control Face Wash with Activated Charcoal For Deep Cleansing, Dirt Removal & Skin Brightening, 115ml",
        offprice:250,
        price:199
    },
    {
        id:12,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01_1024x1024.jpg?v=1645440592",
        pname:"Anti Acne, Pimple Scar Spots Removal Cream Gel For Men & Women - 85 gm",
        offprice:399,
        price:375,
    },
    {
        id:13,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Honey-02_800x.jpg?v=1648535921",
        pname:"Day Glow Sunscreen Face and Body Lotion SPF 30+for All Skin Types",
        offprice:399,
        price:349
    },
    {
        id:14,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_1024x1024.jpg?v=1634219952",
        pname:"Glowtion Face & Body Butter Lotion For Skin Brightening & Deep Moisturization - 100ml",
        offprice:288,
        price:199
    },
    {
        id:15,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_10f1cd4d-8c98-4205-a7a1-5cdfb6265622_800x.jpg?v=1647931600",
        pname:"Growth Protein Conditioning Shampoo Anti Frizz, Hairfall Control, Greying, Volumizing & Anti Dandruff, 225 ML Sls/Paraben/Sulfate Free",
        offprice:275,
        price:249,
    },
    {
        id:16,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_10f1cd4d-8c98-4205-a7a1-5cdfb6265622_800x.jpg?v=1647931600",
        pname:"Oil Control Shampoo For Oily Hair & Scalp Anti Dandruff, Neem, Tea Tree & Basil 225 ml--111",
        offprice:275,
        price:235,
    },
    {
        id:17,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-06_800x.jpg?v=1648122896",
        pname:"SilkyStrong Coffee Onion Ayurvedic Herbal Anti-Dandruff Natural Hair Growth Oil, Volume & Fall Control - 225ml",
        offprice:350,
        price:325,
    },
    {
        id:18,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Patchouli-02_800x.jpg?v=1648019068",
        pname:"Growth Protein Natural Hair Conditioner For Hair Fall, Dry & Frizzy Hair - 225 ml",
        offprice:399,
        price:275
    },
    {
        id:19,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-06_800x.jpg?v=1648122896",
        pname:"SilkyStrong Coffee Onion Ayurvedic Herbal Anti-Dandruff Natural Hair Growth Oil, Volume & Fall Control - 225ml",
        offprice:350,
        price:325
    },
    {
        id:20,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Patchouli-02_800x.jpg?v=1648019068",
        pname:"Growth Protein Natural Hair Conditioner For Hair Fall, Dry & Frizzy Hair - 225 ml",
        offprice:399,
        price:275
    },
    {
        id:21,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-06_800x.jpg?v=1648122896",
        pname:"Glowner Rose Water Face Toner & Mist - Natural Toner Spray for Glowing Skin for All Skin Type - 200 ml",
        offprice:299,
        price:225,
    },
    {
        id:22,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineNude_1_1024x1024.jpg?v=1632826340",
        pname:"Celeb Shine Body Shimmer Gloss Lotion For All Skin Types, Nude Shade - 50 ml",
        offprice:499,
        price:399
    },
    {
        id:23,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Senorita-1_8f04be71-857c-46de-8f18-3dce73e7dd6b_1024x1024.jpg?v=1632485196",
        pname:"Senorita Woman EDP - Fresh and Fruity Perfume for Women -100 ml",
        offprice:999,
        price:499,
    },
    {
        id:24,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-01_1_1024x1024.jpg?v=1621313274",
        pname:"Oil Control Shampoo For Oily Hair & Scalp Anti Dandruff, Neem, Tea Tree & Basil 225 ml",
        offprice:275,
        price:235
    },
    {
        id:25,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineNude_1_1024x1024.jpg?v=1632826340",
        pname:"CEO OUD Perfume For Men with Long Lasting Woody Fragrance, 100 ml",
        offprice:999,
        price:499
    },


    {
        id:26,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-01_1_1024x1024.jpg?v=1621313274",
        pname:"CEO OUD Perfume For Men with Long Lasting Woody Fragrance, 100 ml",
        offprice:999,
        price: 499
    },
    {
        id:27,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineNude_1_1024x1024.jpg?v=1632826340",
        pname:"CEO OUD Perfume For Men with Long Lasting Woody Fragrance, 100 ml",
        offprice:999,
        price:499
    },
    {
        id:28,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteWomen-02-1_a98c4605-4f9e-421a-8425-e729c455d952_800x.jpg?v=1647343065",
        pname:"CEO OUD Perfume For Men with Long Lasting Woody Fragrance, 100 ml",
        offprice:999,
        price:49911
    },
    {
        id:29,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GrowthProtinHairShampoo-03_800x.jpg?v=1646390966",
        pname:"CEO OUD Perfume For Men with Long Lasting Woody Fragrance, 100 ml",
        offprice:999,
        price:499
    },
    {
        id:31,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GrowthProtinHairShampoo-03_800x.jpg?v=1646390966",
        pname:"Gold Woman EDP - Luxury Perfume For Women With Long Lasting Fresh & Fruity Fragrance - 100 ml",
        offprice:999,
        price:499
    },
    {
        id:30,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineNude_1_1024x1024.jpg?v=1632826340",
        pname:"CEO Men Perfume Office Wear - 100 ml",
        offprice:999,
        price:499
    },
    {
        id:32,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Fresh-01_1024x1024.jpg?v=1632484618",
        pname:"Fresh Unisex Perfume For Men & Women with Woody Aquatic Scent EDT Fragrance, 100 ml",
        offprice:999,
        price:499
    },
    {
        id:41,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Lavender_1_1024x1024.jpg?v=1620633214",
        pname:"Lavender Essential Oil For Skin & Hair Care - 15ml Natural Can be Used as Fragrance Oil, Mixed with Beauty Products, Aromatherapy and Home Candle Soap Making",
        offprice:299,
        price:249
    },
    {
        id:33,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate_-Feetlove_1024x1024.jpg?v=1608116979",
        pname:"Foot Care Combo (Exfoliate + FeetLove)",
        offprice:898,
        price:489
    },
    {
        id:34,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Honey-02_800x.jpg?v=1648535921",
        pname:"Flaura Women Perfume Floral, Oriental And Bitter Sweet Fragrance Long Lasting Scent, 100 ml EDP",
        offprice:999,
        price: 499
    },
    {
        id:35,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteMen-02_800x.jpg?v=1646291439",
        pname:"Luxury Perfumes Gift Set for Women - 6x10 ml Mini",
        offprice:599,
        price:499
    },
    {
        id:36,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/product-thanking-501_8791ab36-7fed-496f-a413-7f3707a48e4b_1024x1024.jpg?v=1628751789",
        pname:"Thanking Gift Card Rs. 501",
        offprice:666,
        price:501
    },
    {
        id:37,
        img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/product-birthday-501_fd658ea4-67cc-4d7c-b5cf-c49e2821094e_1024x1024.jpg?v=1628752050",
        pname:"Celebrate Birthdays Gift Card Rs. 501",
        offprice:701,
        price:501
    },
    
];
localStorage.setItem("productData", JSON.stringify(allproductdata));