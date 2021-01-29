module.exports = function (eleventy) {
  eleventy.setDataDeepMerge(true);

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },
    templateFormats: [
      'njk',
      'md',
      '11ty.js'
    ],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  }
};
