SVG.A = function() {
  this.constructor.call(this, SVG.create('a'))
}

// Inherit from SVG.Parent
SVG.A.prototype = new SVG.Container

//
SVG.extend(SVG.A, {
  // Link url
  to: function(url) {
    return this.attr('href', url, SVG.xlink)
  }
  // Link show attribute
, show: function(target) {
    return this.attr('show', target, SVG.xlink)
  }
  // Link target attribute
, target: function(target) {
    return this.attr('target', target)
  }

})

//
SVG.extend(SVG.Container, {
  // Create a hyperlink element
  link: function(url) {
    return this.put(new SVG.A).to(url)
  }
  
})