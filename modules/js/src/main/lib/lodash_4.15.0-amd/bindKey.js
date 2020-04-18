define(['./_baseRest', './_createWrap', './_getHolder', './_replaceHolders'], function(baseRest, createWrap, getHolder, replaceHolders) {

  /** Used to compose bitmasks for function metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      PARTIAL_FLAG = 32;

  /**
   * Creates a function that invokes the method at `object[key]` with `partials`
   * prepended to the arguments it receives.
   *
   * This method differs from `_.bind` by allowing bound functions to reference
   * methods that may be redefined or don't yet exist. See
   * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
   * for more details.
   *
   * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Function
   * @param {Object} object The object to invoke the method on.
   * @param {string} key The key of the method.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var object = {
   *   'user': 'fred',
   *   'greet': function(greeting, punctuation) {
   *     return greeting + ' ' + this.user + punctuation;
   *   }
   * };
   *
   * var bound = _.bindKey(object, 'greet', 'hi');
   * bound('!');
   * // => 'hi fred!'
   *
   * object.greet = function(greeting, punctuation) {
   *   return greeting + 'ya ' + this.user + punctuation;
   * };
   *
   * bound('!');
   * // => 'hiya fred!'
   *
   * // Bound with placeholders.
   * var bound = _.bindKey(object, 'greet', _, '!');
   * bound('hi');
   * // => 'hiya fred!'
   */
  var bindKey = baseRest(function(object, key, partials) {
    var bitmask = BIND_FLAG | BIND_KEY_FLAG;
    if (partials.length) {
      var holders = replaceHolders(partials, getHolder(bindKey));
      bitmask |= PARTIAL_FLAG;
    }
    return createWrap(key, bitmask, object, partials, holders);
  });

  // Assign default placeholders.
  bindKey.placeholder = {};

  return bindKey;
});
