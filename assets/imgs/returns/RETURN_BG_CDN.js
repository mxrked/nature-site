/**
 *
 *  This is used to return a bg image cdn source
 *
 */

export default function ReturnBGCDN(typeFolder, typeSubFolder, fileExt) {
  const SERVER =
    "https://raw.githubusercontent.com/mxrked/nature-site-cdn/main/";

  let bgSrc;

  if (typeFolder) {
    if (typeSubFolder) {
      bgSrc = `${SERVER}/bgs/${typeFolder}/${typeSubFolder}/${typeSubFolder}.${fileExt}`;
    }
  }

  return bgSrc;
}
