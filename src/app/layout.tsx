import RouteProgress from "@/molecules/RouteProgress";
import "@/styles/globals.css";
import 'flowbite'

export const metadata = {
  title: 'Revaly',
  description: 'Revaly - Your Book Review Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RouteProgress />
      <body>{children}</body>
    </html>
  )
}
