"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "./contact-form"
import { useTranslations } from "next-intl"

interface ContactDialogProps {
    productName: string
    triggerText?: string
}

export function ContactDialog({ productName, triggerText }: ContactDialogProps) {
    const t = useTranslations('ProductDetails')
    const tContact = useTranslations('Contact')
    const [open, setOpen] = React.useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg" className="w-full text-lg h-12">
                    {triggerText || t('getQuote')}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>{tContact('title')}</DialogTitle>
                    <DialogDescription>
                        {tContact('description')}
                    </DialogDescription>
                </DialogHeader>
                <div className="pt-4">
                    <ContactForm
                        productName={productName}
                        onSuccess={() => setOpen(false)}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
