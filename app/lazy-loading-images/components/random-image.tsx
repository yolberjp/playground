"use client"

import { useState } from "react"
import { imageIds } from "../data"
import LazyLoadImage from "./lazy-load-image"

export default function RandomImage({id}: {id: number}) {
    const randomImageId = imageIds[Math.floor(Math.random() * imageIds.length)]
    const [imageId, setImageId] = useState(id ?? randomImageId)
    const image = {
        width: 200,
        height: 200,
        url: `https://picsum.photos/id/${imageId}/1200/1200`
    }

    return (
        <LazyLoadImage image={image} blurImageUrl={`https://picsum.photos/id/${imageId}/10/10`} onClick={() => setImageId(randomImageId)}/>
    )

}