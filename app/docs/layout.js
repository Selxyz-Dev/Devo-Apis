// app/docs/layout.js
// custom

export const metadata = {
  title: "Devo ~ Apis",
  description: "Coming Soon!",
  keywords: "Hello Word",
  openGraph: {
    title: "Devo || Apis",
    description:
      "Devo Is Rest Api Simple Using Nextjs And Swager",
    url: "https://chat.whatsapp.com/BkEvRBueF1NIAdxXJX14fU",
    type: "website",
    images: [
      {
        url: "https://files.catbox.moe/r25fud.jpg",
        width: 800,
        height: 600,
        alt: "Creator",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}