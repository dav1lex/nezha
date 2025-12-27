"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
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
                <div className="relative aspect-video w-full overflow-hidden bg-white">
                    {/* SKELETON LOADER: Shows while image is loading */}
                    {isLoading && (
                        <Skeleton className="h-full w-full absolute inset-0 z-10" />
                    )}

                    <Link href={`/products/${machine.slug}`}>
                        <Image
                            src={machine.images[0]}
                            alt={machine.name}
                            fill
                            className={`object-contain transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                                }`}
                            onLoad={() => setIsLoading(false)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </Link>
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
