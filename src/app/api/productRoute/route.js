import { NextResponse } from "next/server"
import Products from "../../model/Products"
import dbConnect from "../../utils/dbConnect"
dbConnect()

export async function POST(request) {
    const {name, brand, price, quantity} = await request.json()
    let newProduct = new Products({
        name, brand, price, quantity
    })
    await newProduct.save()
    return NextResponse.json({message: "Product Saved"})
}

export async function GET(request) {
    let product = await Products.findOne({})
    return NextResponse.json(product)
}