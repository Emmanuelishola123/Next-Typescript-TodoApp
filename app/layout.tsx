"use client";

import { Navbar, Footer } from "@/components";
import { Box, Container } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <Container maxWidth='lg' sx={{ py: 4, px: 2 }}>{children}</Container>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
