// sidebar
$("#menu-toggle-2").on("click",function(){
  if ($(window).width() > 767 ){
    $(this).toggleClass('active');
  }
  if($("#wrapper").hasClass("toggled-2")){
    $("#wrapper").removeClass("toggled-2");
  }else{
    $("#wrapper").addClass("toggled-2");
  }
  if ($(window).width() < 768 ){
    $('#sidebar-wrapper').toggleClass('open');
  }

  if ($(window).width() >= 768) {
    if($("#wrapper").hasClass("toggled-2")){
      $('.FloorListTab').css({"padding-left": "266px"});
    }else{
      $('.FloorListTab').css({"padding-left": "130px"});
    }
  };
});

// logs script
if ($(window).width() <= 1030) {
  $('.logsSection.main-section-activity').addClass("col-sm-12")
  $('.logsSection.main-section-activity').removeClass("col-sm-9 col-md-9")
}

// sidebar
$(".sidebar-nav li>ul").hide();
$(".sidebar-nav li a").on("click",function(){ 
  $(".sidebar-nav li").siblings().removeClass("active");
  $(this).parent().siblings().find("ul").hide();
  if($(this).siblings("ul").length){
   $(this).siblings("ul").slideToggle();
   $(this).siblings("ul").addClass("active");
 }
});  

// homepage
$(document).ready(function(){
  // set window height
  function setHeight() {
    var windowHeight = $(window).height();
    $('#banner, #contact_banner').css('height', windowHeight);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
})

// addvenue collapse
$(".network-heading").click(function(){
  if($(this).parent().siblings().hasClass("hide")){
    $(this).parent().siblings().slideToggle();
  }else{
    $(this).parent().siblings().slideToggle();
  }
})

// homepage search
$(".search-mob-hide").click(function(){
  $(this).addClass("hide");
  $(".network-heading").addClass("hide");
  $(".search-opt").removeClass("hide");
});

// floorlist search
$(".floorlistImg").click(function(){
  $(this).addClass("hide");
  $(".OverviewSort ul li .search-opt").removeClass("hide");
});

// sunburst chart
var width = 800,
height = 800,
radius = Math.min(width, height) / 2;

var x = d3.scale.linear()
.range([0, 2 * Math.PI]);

var y = d3.scale.linear()
.range([0, radius]);

var color = d3.scale.category20c();

var svg = d3.select("#sbtChart").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");

var partition = d3.layout.partition()
.value(function(d) { return d.size; });

var arc = d3.svg.arc()
.startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
.endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
.innerRadius(function(d) { return Math.max(0, y(d.y)); })
.outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

d3.json("flare.json", function(error, root) {
  var g = svg.selectAll("g")
  .data(partition.nodes(root))
  .enter().append("g");

  var path = g.append("path")
  .attr("d", arc)
  .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
  .on("click", click);

  var text = g.append("text")
  .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
  .attr("x", function(d) { return y(d.y); })
    .attr("dx", "6") // margin
    .attr("dy", ".35em") // vertical-align
    .text(function(d) { return d.name; });

    function click(d) {
    // fade out all text elements
    text.transition().attr("opacity", 0);

    path.transition()
    .duration(750)
    .attrTween("d", arcTween(d))
    .each("end", function(e, i) {
          // check if the animated element's data e lies within the visible angle span given in d
          if (e.x >= d.x && e.x < (d.x + d.dx)) {
            // get a selection of the associated text element
            var arcText = d3.select(this.parentNode).select("text");
            // fade in the text element and recalculate positions
            arcText.transition().duration(750)
            .attr("opacity", 1)
            .attr("transform", function() { return "rotate(" + computeTextRotation(e) + ")" })
            .attr("x", function(d) { return y(d.y); });
          }
        });
  }
});

d3.select(self.frameElement).style("height", height + "px");

// Interpolate the scales!
function arcTween(d) {
  var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
  yd = d3.interpolate(y.domain(), [d.y, 1]),
  yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d, i) {
    return i
    ? function(t) { return arc(d); }
    : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
}

function computeTextRotation(d) {
  return (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
}




