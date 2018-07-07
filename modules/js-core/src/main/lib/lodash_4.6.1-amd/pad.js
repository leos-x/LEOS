define(['./_createPadding', './_stringSize', './toInteger', './toString'], function(createPadding, stringSize, toInteger, toString) {

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeCeil = Math.ceil,
      nativeFloor = Math.floor;

  /**
   * Pads `string` on the left and right sides if it's shorter than `length`.
   * Padding characters are truncated if they can't be evenly divided by `length`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.pad('abc', 8);
   * // => '  abc   '
   *
   * _.pad('abc', 8, '_-');
   * // => '_-abc_-_'
   *
   * _.pad('abc', 3);
   * // => 'abc'
   */
  function pad(string, length, chars) {
    string = toString(string);
    length = toInteger(length);

    var strLength = stringSize(string);
    if (!length || strLength >= length) {
      return string;
    }
    var mid = (length - strLength) / 2,
        leftLength = nativeFloor(mid),
        rightLength = nativeCeil(mid);

    return createPadding('', leftLength, chars) + string + createPadding('', rightLength, chars);
  }

  return pad;
});
