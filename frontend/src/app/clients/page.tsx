import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({ pageId: "clients" });
export { generateMetadata };
export default Page;
