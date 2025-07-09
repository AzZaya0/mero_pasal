import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  
  return (
   <>
   <Link href={'/about'}  data="hgello"  > tep Me  </Link>
   <Link href={'/contact'} > contact me   </Link>
   </>
  );
}
