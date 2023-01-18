/**
 *
 *  This is used to return a regular image cdn source
 *
 */

export default function ReturnImgCDN(typeFolder, typeSubFolder, fileExt) {
  const SERVER =
    "https://raw.githubusercontent.com/mxrked/nature-site-cdn/main/";

  let imgSrc;

  if (typeFolder) {
    if (typeSubFolder) {
      imgSrc = `${SERVER}/imgs/${typeFolder}/${typeSubFolder}/${typeSubFolder}.${fileExt}`;
    }
  }

  return imgSrc;
}
