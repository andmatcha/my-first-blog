import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="m-4">
            <h1>ポートフォリオサイト</h1>
            <p>ただいま準備中...</p>
            <Link href={"/blog"}>
                <a>ブログはこちら</a>
            </Link>
        </div>
    );
}
