//(loadTree(window, undefined))(window);

var loadTree = function(window,undefined){
  var treeView = tools.$('#treeView');
  var fileData = data.files;

  // 初始化
  //treeView.innerHTML = treeHtml(fileData, 0);
  treeView.innerHTML = treeHtml(fileData, -1);
  

  // 事件
  var fileItem = tools.$('.treeNode');
  var root_icon = tools.$('.icon-control', fileItem[0])[0];
  //文件左边减号图标---------
  root_icon.className = 'icon icon-control icon-minus';

  tools.each(fileItem, function (item) {
    filesHandle(item);
  });

  function treeHtml(fileData, fileId) {
    var _html = '';
    var children = getChildById(fileData, fileId);
    //var hideChild = fileId > 1 ? 'none' : '';
    var hideChild = fileId > 0 ? 'none' : '';
    _html += '<ul class="'+hideChild+'">';

    children.forEach(function (item, index) {
      var level = getLevelById(fileData, item.id);
      var distance = (level - 1) * 20 + 'px';
      var hasChild = hasChilds(fileData, item.id);
      var className = hasChild ? '' : 'treeNode-empty';
      var treeRoot_cls = fileId === -1 ? 'treeNode-cur' : '';
      //var treeRoot_cls = fileId === 0 ? 'treeNode-cur' : '';
//      <div class="treeNode ${className} ${treeRoot_cls}" style="padding-left: ${distance}" id="${item.id}">
      
      _html += `
        <li>
          <div class="treeNode ${className} ${treeRoot_cls}" style="padding-left: ${distance}" data-file-id="${item.id}">
            <i class="icon icon-control icon-add"></i>
            <i class="icon icon-file"></i>
            <span class="title">${item.title}</span>
          </div>
          ${treeHtml(fileData, item.id)}
        </li>`;
    });

    _html += '</ul>';

    return _html;
  };

  function filesHandle(item) {
    tools.addEvent(item, 'click', function () {
      var treeNode_cur = tools.$('.treeNode-cur')[0];
      var fileId = item.dataset.fileId;
      //var catalogId = $('#catalogId').val();
      //查询该目录下的笔记
      findAllNotes(fileId);
//      console.log("fileId="+fileId);
//      console.log("catalogId="+catalogId);
//      if(catalogId==fileId){//--------
      
     
          
          
      
      var curElem = document.querySelector('.treeNode[data-file-id="'+fileId+'"]');
      
      var hasChild = hasChilds(fileData, fileId);
      
      var icon_control = tools.$('.icon-control', item)[0];
      
      var openStatus = true;
      
      tools.removeClass(treeNode_cur, 'treeNode-cur');
      tools.addClass(curElem, 'treeNode-cur');
      
      if (hasChild) {
    	  //
//          tools.removeClass(treeNode_cur, 'treeNode-cur');
//          tools.addClass(curElem, 'treeNode-cur');
          //
        openStatus = tools.toggleClass(item.nextElementSibling, 'none');

        if (openStatus) {
          icon_control.className = 'icon icon-control icon-add';
        } else {
          icon_control.className = 'icon icon-control icon-minus';
        }
      }
    // }//---------
    });
  };
};

loadTree(window);