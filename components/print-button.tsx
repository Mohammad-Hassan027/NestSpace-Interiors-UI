"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handlePrint}
      className="gap-2 text-xs h-8 cursor-pointer shrink-0"
    >
      <Printer className="h-3.5 w-3.5" />
      <span>Print / Save as PDF</span>
    </Button>
  )
}
