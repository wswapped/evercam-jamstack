import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import sanityConfig from "@/sanity.json";

const sanity = sanityClient({
  projectId: "rjtq1dgw",
  dataset: "production",
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});
export default sanity;

const imageBuilder = imageUrlBuilder(sanity);
export  const imageUrl = source => {
  return imageBuilder.image(source);
};
