/**
 *
 *  This is used to return a bg image cdn source
 *
 */

export default function ReturnIconCDN(fileName, fileExt) {
  const SERVER =
    "https://raw.githubusercontent.com/mxrked/nature-site-cdn/main/";

  let iconSrc;

  iconSrc = `${SERVER}/icons/${fileName}.${fileExt}`;

  return iconSrc;
}
