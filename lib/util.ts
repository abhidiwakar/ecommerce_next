import Product from '../interface/product'
const generateProductSchema = (product: Product) => {
    return {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": product.ProductImage.map(e => `${process.env.CLOUDINARY_URL}${e.url}`),
        "description": product.description,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": product.brand?.name
        },
        "offers": {
            "@type": "Offer",
            "url": `${process.env.NEXT_APP_URL}/p/${product.slug}`,
            "priceCurrency": "INR",
            "price": product.sellingPrice,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": `https://schema.org/${product.stock ? "InStock" : "OutStock"}`
        }
    }
}

export {
    generateProductSchema
}