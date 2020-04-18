define(['./_apply', './_baseRest', './_mergeDefaults', './mergeWith'], function(apply, baseRest, mergeDefaults, mergeWith) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
   * // => { 'a': { 'b': 2, 'c': 3 } }
   */
  var defaultsDeep = baseRest(function(args) {
    args.push(undefined, mergeDefaults);
    return apply(mergeWith, undefined, args);
  });

  return defaultsDeep;
});
