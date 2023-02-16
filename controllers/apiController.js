const { default: axios } = require("axios");

const getProductsApi = async (req, res) => {
    try {
        const productsApi = await axios.get(
            "https://api.escuelajs.co/api/v1/products",
            // {headers: {"Accept-Encoding": "gzip, deflate, compress"},}
        );
        res.status(200).json({ products: productsApi.data ,msg: "Ok"})
    } catch (error) {
        res.status(500).json({msg: "Error", error: error.message})
    }
}

module.exports = {getProductsApi};