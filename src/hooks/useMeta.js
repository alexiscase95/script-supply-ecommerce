import { Helmet } from 'react-helmet';

/**
 * A custom hook for managing meta tags in the document head using `react-helmet`.
 *
 * This hook sets various meta tags that are useful for SEO, social media sharing, and improving the overall user experience.
 *
 * @param {string} [title] - The title of the page. If provided, it will be set in the `<title>` tag.
 * @param {string} [description] - A description of the page content. This will be set in the `<meta name="description">` tag.
 * @param {string} [keywords] - Keywords relevant to the page content. This will be set in the `<meta name="keywords">` tag.
 * @param {string} [author] - The author of the page content. This will be set in the `<meta name="author">` tag.
 * @param {string} [robots] - Directives for search engine crawlers. This will be set in the `<meta name="robots">` tag. Common values are "index, follow", "noindex, nofollow", etc.
 * @param {string} [ogTitle] - The Open Graph title for social media sharing. This will be set in the `<meta property="og:title">` tag.
 * @param {string} [ogDescription] - The Open Graph description for social media sharing. This will be set in the `<meta property="og:description">` tag.
 * @param {string} [ogImage] - The Open Graph image URL for social media sharing. This will be set in the `<meta property="og:image">` tag.
 * @param {string} [ogUrl] - The Open Graph URL for the page. This will be set in the `<meta property="og:url">` tag.
 * @param {string} [twitterCard] - The Twitter card type. This will be set in the `<meta name="twitter:card">` tag. Common values are "summary", "summary_large_image", etc.
 * @param {string} [twitterTitle] - The Twitter card title. This will be set in the `<meta name="twitter:title">` tag.
 * @param {string} [twitterDescription] - The Twitter card description. This will be set in the `<meta name="twitter:description">` tag.
 * @param {string} [twitterImage] - The Twitter card image URL. This will be set in the `<meta name="twitter:image">` tag.
 * @param {string} [canonical] - The canonical URL of the page to avoid duplicate content issues. This will be set in the `<link rel="canonical">` tag.
 *
 * @returns {JSX.Element} - A `Helmet` component from `react-helmet` that updates the document head with the provided meta tags.
 */
function useMeta(title,
    description,
    keywords,
    author,
    robots,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonical) {

    return (
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {author && <meta name="author" content={author} />}
        {robots && <meta name="robots" content={robots} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        {twitterCard && <meta name="twitter:card" content={twitterCard} />}
        {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
        {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
        {twitterImage && <meta name="twitter:image" content={twitterImage} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
    );
}

export default useMeta;