$(function (){
  createTable("cardTable");
});

function createTable(id) {
  $('#' + id).height(TABLE_H);
  $('#' + id).width(TABLE_W);

  var stage = new Kinetic.Stage({
    width: TABLE_W,
    height: TABLE_H,
    scale: CARD_SCALE,
    container: id,
    id: 'can_' + id
  });
  var scoreList = [1, 5, 10, 11, 55, 100, 101, 102, 103, 104];
  for(var i in scoreList ){
    var ccc = drawCard(scoreList[i], CARD_W, CARD_H,  i*100 + 25,  500);
    ccc.setDraggable(true);
    ccc.on('mouseover', function (){
      this.moveToTop();
    });
    ccc.on('mouseover', function (){
    });
    stage.add( ccc );
  }
}

