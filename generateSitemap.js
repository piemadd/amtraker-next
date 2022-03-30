const { data } = require("./public/data/trainNums");
const fs = require("fs");

const dataKeys = Object.keys(data);
//const rightNow = new Intl.DateTimeFormat('en-US').format(new Date()).replaceAll('/', '-');

const now = new Date();
const rightNow = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`
/*
<url><loc>https://amtraker.com/</loc><lastmod>${rightNow}</lastmod></url><url><loc>https://amtraker.com/about</loc><lastmod>${rightNow}</lastmod></url><url><loc>https://amtraker.com/privacy.html</loc><lastmod>${rightNow}</lastmod></url><url><loc>https://amtraker.com/trains/new</loc><lastmod>${rightNow}</lastmod></url>
*/

let siteMapBegin = "<?xml version='1.0' encoding='UTF-8'?><urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>";
let siteMapEnd = "</urlset>";
let siteMap = `<url><loc>https://amtraker.com/</loc><lastmod>${rightNow}</lastmod></url><url><loc>https://amtraker.com/about</loc><lastmod>${rightNow}</lastmod></url><url><loc>https://amtraker.com/privacy.html</loc><lastmod>${rightNow}</lastmod></url><url><loc>https://amtraker.com/trains/new</loc><lastmod>${rightNow}</lastmod></url>`;

for (let i = 0; i < dataKeys.length; i++) {
    siteMap += `<url><loc>https://amtraker.com/trains/${dataKeys[i]}</loc><lastmod>${rightNow}</lastmod></url>`;
}

fs.writeFileSync('public/sitemap.xml', siteMapBegin + siteMap + siteMapEnd);