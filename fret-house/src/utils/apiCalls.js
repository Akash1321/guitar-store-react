

export const getWishList = (encodedToken) => {
    return fetch("/api/user/wishlist", {
        method: "GET",

        headers: {
            "authorization": encodedToken
        }
    })
}

export const postToWishlist = (token, product) => {
    return fetch("/api/user/wishlist", {
        method: "POST",

        headers: {
            "authorization": token,
        },


        body: JSON.stringify({product})
    })
}

export const removeFromWishlist = (token, selectedId) => {
    return fetch(`/api/user/wishlist/${selectedId}`, {
        method: "DELETE",

        headers: {
            "authorization": token,
        },
    })
}


export const getCartlist = (encodedToken) => {
    return fetch("/api/user/cart", {
        method: "GET",

        headers: {
            "authorization": encodedToken,
        }
    })
}

export const postToCartlist = (token, product) => {
    return fetch("/api/user/cart", {
        method: "POST",

        headers: {
            "authorization": token,
        },


        body: JSON.stringify({product})
    })
}

export const removeFromCartlist = (token, selectedId) => {
    return fetch(`/api/user/cart/${selectedId}`, {
        method: "DELETE",

        headers: {
            "authorization": token,
        },
    })
}


export const increaseQuantity = (token, selectedId) => {
    return fetch(`/api/user/cart/${selectedId}`, {
        method: "POST",

        headers: {
            "authorization": token,
        },

        body: JSON.stringify({
            action: {
                type: "increment"
            }
        })
    })
}

export const decreaseQuantity = (token, selectedId) => {
    return fetch(`/api/user/cart/${selectedId}`, {
        method: "POST",

        headers: {
            "authorization": token,
        },

        body: JSON.stringify({
            action: {
                type: "decrement"
            }
        })
    })
}




