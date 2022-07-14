import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string | URL;
    as?: string;
};

export default function MyLink(props: Props) {
    return (
        <Link href={props.href} as={props.as} passHref>
            {props.children}
        </Link>
    );
}
