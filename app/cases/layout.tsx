// app/cases/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHIN SATSUKI | PORTFOLIO',
  description: 'UXUI and Graphic Design portfolio collection',
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}