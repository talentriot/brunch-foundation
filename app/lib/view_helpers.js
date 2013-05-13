// Handlebars helpers go here

/**
 * commafies a number
 *
 * @example
 * {{commafy mySpecialNumber}}
 *
 * @param  {string} number number to commafy
 * @return {string}        commafied number
 */
Handlebars.registerHelper('commafy', function(number) {

  number = Handlebars.Utils.escapeExpression(number);
  return new Handlebars.SafeString(number.commafy());
});
