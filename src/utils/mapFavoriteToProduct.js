export const mapFavoritesToProduct = (favorites, products) => {
    if (favorites && products) {
        return products.map((product) => ({ ...product, isFavorited: !!favorites.find((fav) => fav.product.id === product.id) || false }))
    }
    else return []
}