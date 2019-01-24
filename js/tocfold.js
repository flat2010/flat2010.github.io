var $itemWithoutChild = $("#toc .toc-item:not(> .toc-child)");
$itemWithoutChild.prepend("<i class='fa fa-dispay-nothing' style='visibility:hidden'> </i>");

var $itemHasChild = $("#toc .toc-item:has(> .toc-child)");
var $titleHasChild = $itemHasChild.children(".toc-link");
$itemHasChild.prepend("<i class='fa fa-contains-subcontent'> </i>");
var $iconToFold = $(".toc-item > .fa-contains-subcontent");

//点击目录前小图标
var clickIcon = function(){
    $("#toc .toc-item > i").click(function(){
        $(this).siblings(".toc-child").slideToggle(10);
        $(this).toggleClass("hide");
        $(this).siblings("i").toggleClass("hide");
    })
}()


var $iconToExpand = $(".toc-item > .fa-contains-subcontent");
$iconToExpand.addClass("hide");

// 点击大目录标题
var clickTitle = function(){
    $titleHasChild.dblclick(function(){
        $(this).siblings(".toc-child").hide(10);
        $(this).siblings("i").toggleClass("hide");
    })
    // After dblclick event
    $titleHasChild.click(function(){
        var $curentTocChild = $(this).siblings(".toc-child");
        if ($curentTocChild.is(":hidden")) {
            $curentTocChild.show(10);
            $(this).siblings("i").toggleClass("hide");
        }
    })
}()


// 点击小目录标题
var clickTocTitle = function(){
    var $iconToExpand = $(".toc-item > .fa-dispay-nothing");
    var $iconToFold = $(".toc-item > .fa-contains-subcontent");
    var $subToc = $titleHasChild.next(".toc-child");

    var $tocTitle = $("#toc .toc-title");

    // 当包含多级目录时再执行
    if ($titleHasChild.length) {
        $tocTitle.addClass("clickable");
        $tocTitle.click(function(){
            if ($subToc.is(":hidden")) {
                $subToc.show(10);
                $iconToExpand.removeClass("hide");
                $iconToFold.addClass("hide");
            } else {
                $subToc.hide(10);
                $iconToExpand.addClass("hide");
                $iconToFold.removeClass("hide");
            }
        })
    }
}()