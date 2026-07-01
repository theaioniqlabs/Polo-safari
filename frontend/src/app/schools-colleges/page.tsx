import { createContentPage } from "@/content/create-content-page";

const { Page, generateMetadata } = createContentPage({
  pageId: "schools-colleges",
  rfpType: "education",
});
export { generateMetadata };
export default Page;
