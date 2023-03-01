import Layouts from "@/layouts/index";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>HEllo</h1>
    </>
  );
}

Home.Layout = Layouts;
