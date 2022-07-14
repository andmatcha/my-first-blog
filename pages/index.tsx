import Head from "next/head";
import Image from "next/image";
import Link from "../components/global/MyLink";

export default function Home() {
    return (
        <>
            <h1>ポートフォリオサイト</h1>
            <p>ただいま準備中...</p>
            <Link href={"/blog"}>
                <a>ブログはこちら</a>
            </Link>
        </>
    );
}
