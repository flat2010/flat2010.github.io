function addIcons(){
    var $itemHasChild = $("#toc .toc-item:has(> .toc-child)");
    var $titleHasChild = $itemHasChild.children(".toc-link");
    $itemHasChild.prepend("<i class='fa fa-caret-down'></i><i class='fa fa-caret-right'></i>");
    var $iconToFold = $(".toc-item > .fa-caret-down");
    $iconToExpand.addClass("hide");
}