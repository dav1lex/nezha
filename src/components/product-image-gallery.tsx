"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductImageGalleryProps {
    images: string[]
    name: string
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = React.useState(0)

    return (
        <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border bg-white group">
                {/* Main Image with Zoom Effect */}
                <Image
                    src={images[selectedImage]}
                    alt={name}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-125 cursor-zoom-in"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Thumbnail Grid */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={cn(
                                "relative aspect-square overflow-hidden rounded-lg border bg-muted transition-all hover:ring-2 hover:ring-primary",
                                selectedImage === index && "ring-2 ring-primary ring-offset-2"
                            )}
                        >
                            <Image
                                src={image}
                                alt={`${name} thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 25vw, 12vw"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
