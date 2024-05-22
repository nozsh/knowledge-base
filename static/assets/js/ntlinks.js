// New tab edit page link

llinks_editpage = document
  .querySelectorAll(
    "a[href*='https://github.com/nozsh/knowledge-base/tree/master/content/']"
  )
  .forEach((llinks_editpage) => {
    let llinks_editpage_href = llinks_editpage.href;
    llinks_editpage.setAttribute("href", llinks_editpage_href + "?nt");
  });

// New tab links

llinks_moredetail = document
  .querySelectorAll("a[href*='?nt']")
  .forEach((llinks_moredetail) => {
    llinks_moredetail.setAttribute("target", "moredetail");
    llinks_moredetail.setAttribute("rel", "noreferrer nofollow noopener");

    let llinks_moredetail_href = llinks_moredetail.href.toString().slice(0, -3);
    llinks_moredetail.setAttribute(
      "href",
      "https://href.li/?" + llinks_moredetail_href
    );
  });
