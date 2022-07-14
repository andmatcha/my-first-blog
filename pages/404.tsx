import Link from "../components/global/MyLink";

const Custom404 = () => {
    return (
        <>
            <h1>ページが見つかりません。</h1>
            <p>URLをご確認ください。</p>
            <Link href={'/'}>
                ブログトップ
            </Link>
        </>
    );
}

export default Custom404;
