var SCALE_FACTOR = 1.3;
var zoomMax = 5;
var canvas = new fabric.Canvas('canvas1', {
  // backgroundColor: 'rgb(100,100,200)',
    // selectionColor: 'red',
    // selectionLineWidth: 0
    // selectable, false
  });
var canvas2 = new fabric.Canvas('canvas2', {
    top: 30
  });
fabric.Object.prototype.set({
    transparentCorners: true,
    cornerColor: 'rgba(102,153,255,1)',
    cornerSize: 4,
    padding: 5
});

fabric.Image.fromURL('images/ground.png', function(img){
  // img.left = 20;
  // img.top = 30;
  img.height = canvas2.height;
  img.width = canvas2.width;
  img.hasControls = false;
  img.lockMovementX = true;
  img.lockMovementY = true;
  // angle: 30
  // opacity: 0.85
  canvas2.setBackgroundImage(img);
  canvas2.renderAll();
});


$('.open-intro').click(function() {
  $('#intro-wrap').animate({
    //opacity: '1',
    left: '0',
}, 500, function() {
    // Animation complete.
});
  $('.open-intro').hide();
  $('.close-intro').show();
});


$('.close-intro').click(function() {
  $('#intro-wrap').animate({
    //opacity: 0.25,
    left: '-225',
}, 400, function() {
    // Animation complete.
});
  $('.open-intro').show();
  $('.close-intro').hide();
});


$('#main-div').on('click', function(e){
  
  active = canvas2.getActiveObject()
  if(active){
    // cloneObject(e.pageX, e.pageY)
    canvas2.deactivateAll().renderAll();
  }
})

// $('canvas').click(function(){
//   // alert('djddjdj')
//   if(canvas2.getActiveObject()){
//     $(".panzoom").panzoom("disable");
//   }
//   else{
//     $(".panzoom").panzoom("enable");
//   }
// })

// $('#main-div').on('click', function(e){
//   var evenX = e.clientX
//   var evenY = e.clientY
//   var window_width = $(window).width()
//   var window_height = $(window).height()
//   console.log(evenY)
//   console.log(evenX)
//   console.log(e.clientX,$('#myModal .modal-dialog').width())
//   console.log(e.clientY,$(window).height())
//   active = canvas2.getActiveObject()
//   if(active){
//     window._prevActive= active;
//     var sumWidth = evenX + $('#myModal .modal-dialog').width()
//     var sumHeight = evenY + $('#myModal .modal-dialog').height()
//     console.log(sumWidth)
//     if(sumWidth<window_width){
//       console.log(sumWidth<window_width)
//       $('.modal-dialog').css({'position':'absolute','left':e.clientX-21,'top':e.clientY-10})
      

//     }else if(sumHeight>window_height){
//       $('.modal-dialog').css({'position':'absolute','left':e.clientX-50,'top':window_height-$('#myModal .modal-dialog').height()})
//     }else if(sumHeight>window_height && sumWidth<window_width){
//       $('.modal-dialog').css({'position':'absolute','left':window_width-$('#myModal .modal-dialog').width(),'top':window_height-$('#myModal .modal-dialog').width()})
//     }

//     else{
//       $('.modal-dialog').css({'position':'absolute','left':window_width-$('#myModal .modal-dialog').width(),'top':e.clientY})
//     }

//     $('#myModal').modal('show')
//     $('.modal-backdrop').remove();
//       $(".panzoom").panzoom("disable");

    

//   }
//   else{
//       $(".panzoom").panzoom("enable");
//     }
// })

// window.deleteObject = function() {
//   if(canvas2.getActiveObject().hasControls)
//     canvas2.getActiveObject().remove();

//   else if(canvas2.getActiveGroup()) {
//     canvas2.getActiveGroup().forEachObject(function(o){canvas2.remove(o)})
//     canvas2.deactivateAll().renderAll();
//   }
// }

// $('html').keyup(function(e){
//   if(e.keyCode == 8) {
//     deleteObject();

//   }
// });

// // $('#zoom_in').on('click', function(e){
// //   if(canvas2.getZoom().toFixed(5) > zoomMax){
// //         console.log("zoomIn: Error: cannot zoom-in anymore");
// //         return;
// //     }
// //   canvas2.setZoom(canvas2.getZoom()*SCALE_FACTOR);
// //     canvas2.setHeight(canvas2.getHeight() * SCALE_FACTOR);
// //     canvas2.setWidth(canvas2.getWidth() * SCALE_FACTOR);
// //     canvas2.renderAll();
// // });

// // $('#zoom_out').on('click', function(e){
// //   console.log(canvas2.getZoom().toFixed(5))
// //   if( canvas2.getZoom().toFixed(5) <=1 ){
// //         console.log("zoomOut: Error: cannot zoom-out anymore");
// //         return;
// //     }

// //     canvas2.setZoom(canvas2.getZoom()/SCALE_FACTOR);
// //     canvas2.setHeight(canvas2.getHeight() / SCALE_FACTOR);
// //     canvas2.setWidth(canvas2.getWidth() / SCALE_FACTOR);
// //     canvas2.renderAll();
// // });

// var selectAllObjects = function(){
//   canvas2.deactivateAll().renderAll();
//   var objs = canvas2.getObjects().map(function(o) {
//     return o.set('active', true);
//   });
//   var group = new fabric.Group(objs, {
//     originX: 'center', 
//     originY: 'center'
//   });

//   canvas2._activeObject = null;
//   canvas2.setActiveGroup(group.setCoords()).renderAll();
// }
//  $('#get_scale').on('click', function(e){
//   canvas2.getActiveObject(function(o){
//     console.log(o)
//   })
//  });


//  $(document).on('click','.addMasterSwitch',function(){
//     fabric.util.loadImage('images/networkconfig/server.png', function(img) {
//     if(img == null) {
//        alert("Error!");
//     }else {
// //    var newimg = new fabric.Image.(img, {
//     var image = new fabric.Image(img);
//     image.left = 20;
//     image.top = 30;
//     image.width = 50;
//     image.height = 50;
//     // var length = getLength('matser_switch')
//     // image.type="matser_switch";
//     // image.name = "MS "+ length;
//       // image.id="333"
//     image.lockMovementX = false;
//     image.lockMovementY = false;
//     // canvas2.add(image);
//     canvas2.add(image).setActiveObject(image);
//        // children.push(image);
//     canvas2.renderAll();
//     var html ='<option>Select</option>';
//     var objectLength = canvas2._objects.length
//     // $(".panzoom").panzoom("disable");
//     if (objectLength>1){
//       $.each(canvas2._objects , function (index, value){
//       if (this.type=='matser_switch'){
//         console.log('afxal');
//         html +='<option>'+this.name+'</option>';
      
//       }
//       });
//     }
//     $('.switch_form .form-control').html(html)
//     console.log(length)
//     // var html = '<li class="parent_li" data-master="'+"MS "+ length+'"><span><i class="icon-folder-open"></i>'+"MS "+ length+'</span><ul class="firstList"></ul></li>'
//     // $('.mytree .parentList').append(html);
    


//    }
// });
// });

// //
 


// function getLength(type){
//   var length = 1;
//   $.each(canvas2._objects , function (index, value){
//       if (this.type==type){
//         length +=1
//       }
//     });
//   return length;
// }

// function addData(type){
//   var html ='<option>Select</option>';
//   $.each(canvas2._objects , function (index, value){
//           if(this.type==type){
//             html +='<option>'+this.name+'</option>';
//             console.log(this.type)
//         }
//   });
//   return html;
// };



// function getNewJson(){
//   var json = {};
//   $.each(canvas2._objects , function (index, value){
//           if(this.type=='matser_switch'){
//             json[this.name] = {}; 
//         }
//   });
//   $.each(canvas2._objects , function (index, value){
//           if(this.type=='switch'){
//             json[this.matser_switch] = 'afxl'; 
//         }
//   });
//   return json;
// }


// $('.jsonMake').click(function(){
//   canvas2.clear()
//   var exportData = window._json = canvas.toJSON();
//     exportData = JSON.stringify(exportData);
//     canvas.clear();
//     canvas.loadFromJSON(exportData);
//     // var = json {"objects":[{"type":"image","originX":"left","originY":"top","left":0,"top":0,"width":1084,"height":700,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"src":"http://img.photobucket.com/albums/v193/Bangladesh/mirpurstadium13.jpg","filters":[],"crossOrigin":"","alignX":"none","alignY":"none","meetOrSlice":"meet"}],"background":""}
// });




