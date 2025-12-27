"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import type { Machine } from "@/lib/data"
import { useLocale } from "next-intl"

interface ProductCardProps {
    machine: Machine
}

export function ProductCard({ machine }: ProductCardProps) {
    const t = useTranslations('Products')
    const locale = useLocale() as 'en' | 'ar' | 'tr'
    const [isLoading, setIsLoading] = React.useState(true)

    return (
        <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardHeader className="p-0">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    {/* SKELETON LOADER: Shows while image is loading */}
                    {isLoading && (
                        <Skeleton className="h-full w-full absolute inset-0 z-10" />
                    )}

                    <Image
                        src={machine.image}
                        alt={machine.name}
                        fill
                        className={`object-cover transition-all duration-300 group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                        onLoad={() => setIsLoading(false)}
                        // We use sizes to tell the browser how large the image will be at different breakpoints
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold">{machine.name}</CardTitle>
                    <Badge variant="secondary" className="capitalize">{machine.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {machine.description[locale]}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                    <Link href={`/products/${machine.slug}`}>
                        {t('viewDetails')}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
