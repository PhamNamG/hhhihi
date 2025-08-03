import Series from "./_components/Series";
export default function Page({ params }: { params: { slug: string } }) {
    return <Series params={params} />;
}
