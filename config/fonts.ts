import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Exo_2 as Exo,
  Titillium_Web as Teli,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
});
