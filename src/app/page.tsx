import StyleGuide from "@/components/StyleGuide";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ style?: string }>;
}) {
  const { style } = await searchParams;
  return <StyleGuide initialStyle={style} />;
}
