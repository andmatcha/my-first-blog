import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="m-4">
            <h1 className="text-red-600 text-xl">ポートフォリオサイト</h1>
            <p>ただいま準備中...</p>
            <Link href={"/blog"}>
                <a className=" text-blue-600 underline">ブログはこちら</a>
            </Link>
        </div>
    );
}
