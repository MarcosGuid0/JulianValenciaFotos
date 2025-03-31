import Page from "@/components/page";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
  return <Page />;

}
