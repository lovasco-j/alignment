export const printStyles = (styles) => {
  // strip {}
  let formatted = styles.replace(/[{}]/g, '');

  // add space after colan
  formatted = formatted.replace(/([^:]+):([^\s])/g, '$1: $2');

  // convert style props from JS to css formatting
  formatted = formatted.replace(/([A-Z])/g, '-$1');
  formatted = formatted.toLowerCase();

  formatted = formatted.split(',');

  let formattedStr = '.image-conatainer {';

  formatted.forEach( style => {
    formattedStr += '<pre style="margin-left:10px;">' + style.replace(/"/g, '') + ';</pre>';
  } );

  return formattedStr += '<pre>}</pre>';
};
